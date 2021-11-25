import React, { useRef, useEffect, useState } from 'react';
import './Map.css'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_CODE


export default function Map() {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-120);
    const [lat, setLat] = useState(50);
    const [zoom, setZoom] = useState(2);
    const [geoJsondata, setGeoJsondata] = useState([])

    useEffect(() => {
        async function getGeoJsonData() {

            try {
                let response = await (await fetch('https://corona.lmao.ninja/v3/covid-19/countries')).json()
                console.log({ response })
                // const { data = [] } = response;
                // const hasData = Array.isArray(data) && data.length > 0;

                // if (!hasData) return;

                const geoJson = {
                    type: 'geojson',
                    data: {
                        "type": "FeatureCollection",
                        "features": response.map((country = {}) => {
                            const { countryInfo = {} } = country;
                            const { lat, long: lng } = countryInfo;
                            return {
                                type: 'Feature',
                                properties: {
                                    ...country,
                                },
                                geometry: {
                                    type: 'Point',
                                    coordinates: [lng, lat]
                                }
                            }
                        })
                    }
                }
                console.log(JSON.stringify(geoJson, null, 2))
                setGeoJsondata(geoJson)
            } catch (e) {
                console.log(`Failed to fetch countries: ${e.message}`, e);
                return;
            }


        }
        getGeoJsonData();

    }, [])

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [lng, lat],
            zoom: zoom
        });

        map.current.on('load', () => {
            map.current.addSource('earthquakes', {
                'type': 'geojson',
                'data': geoJsondata
            });

            map.current.addLayer(
                {
                    'id': 'earthquakes-heat',
                    'type': 'heatmap',
                    'source': 'earthquakes',
                    'maxzoom': 9,
                    'paint': {
                        // Increase the heatmap weight based on frequency and property magnitude
                        'heatmap-weight': [
                            'interpolate',
                            ['linear'],
                            ['get', 'mag'],
                            0,
                            0,
                            6,
                            1
                        ],
                        // Increase the heatmap color weight weight by zoom level
                        // heatmap-intensity is a multiplier on top of heatmap-weight
                        'heatmap-intensity': [
                            'interpolate',
                            ['linear'],
                            ['zoom'],
                            0,
                            1,
                            9,
                            3
                        ],
                        // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
                        // Begin color ramp at 0-stop with a 0-transparancy color
                        // to create a blur-like effect.
                        'heatmap-color': [
                            'interpolate',
                            ['linear'],
                            ['heatmap-density'],
                            0,
                            'rgba(33,102,172,0)',
                            0.2,
                            'rgb(103,169,207)',
                            0.4,
                            'rgb(209,229,240)',
                            0.6,
                            'rgb(253,219,199)',
                            0.8,
                            'rgb(239,138,98)',
                            1,
                            'rgb(178,24,43)'
                        ],
                        // Adjust the heatmap radius by zoom level
                        'heatmap-radius': [
                            'interpolate',
                            ['linear'],
                            ['zoom'],
                            0,
                            2,
                            9,
                            20
                        ],
                        // Transition from heatmap to circle layer by zoom level
                        'heatmap-opacity': [
                            'interpolate',
                            ['linear'],
                            ['zoom'],
                            7,
                            1,
                            9,
                            0
                        ]
                    }
                },
                'waterway-label'
            );

            map.current.addLayer(
                {
                    'id': 'earthquakes-point',
                    'type': 'circle',
                    'source': 'earthquakes',
                    'minzoom': 7,
                    'paint': {
                        // Size circle radius by earthquake magnitude and zoom level
                        'circle-radius': [
                            'interpolate',
                            ['linear'],
                            ['zoom'],
                            7,
                            ['interpolate', ['linear'], ['get', 'mag'], 1, 1, 6, 4],
                            16,
                            ['interpolate', ['linear'], ['get', 'mag'], 1, 5, 6, 50]
                        ],
                        // Color circle by earthquake magnitude
                        'circle-color': [
                            'interpolate',
                            ['linear'],
                            ['get', 'mag'],
                            1,
                            'rgba(33,102,172,0)',
                            2,
                            'rgb(103,169,207)',
                            3,
                            'rgb(209,229,240)',
                            4,
                            'rgb(253,219,199)',
                            5,
                            'rgb(239,138,98)',
                            6,
                            'rgb(178,24,43)'
                        ],
                        'circle-stroke-color': 'white',
                        'circle-stroke-width': 1,
                        // Transition from heatmap to circle layer by zoom level
                        'circle-opacity': [
                            'interpolate',
                            ['linear'],
                            ['zoom'],
                            7,
                            0,
                            8,
                            1
                        ]
                    }
                },
                'waterway-label'
            );
        })
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <div className="map-container" >

            <div ref={mapContainer} />
        </div >
    );
}

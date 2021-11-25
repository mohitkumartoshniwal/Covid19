import React, { useState, useEffect } from 'react'
import './Table.css'

function Table() {
    const [countriesWithCases, setCountriesWithCases] = useState([]);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(5);

    useEffect(() => {
        async function getCovidData() {

            try {
                let countriesData = [];
                let todayCases = await (await fetch('https://corona.lmao.ninja/v3/covid-19/countries?sort=todayCases')).json()
                let yeserdayCases = await (await fetch('https://corona.lmao.ninja/v3/covid-19/countries?yesterday=true&sort=todayCases')).json()
                todayCases.forEach((country, index) => {
                    let newActiveCases = country.todayCases - yeserdayCases[index].todayCases;
                    countriesData.push({
                        ...country,
                        newActiveCases: newActiveCases < 0 ? -newActiveCases : newActiveCases,
                        image: country.countryInfo.iso2,
                        arrow: newActiveCases > 0
                    })
                });

                console.log({ countriesData })
                setCountriesWithCases(countriesData)
            } catch (error) {
                console.log({ error })
            }

        }
        getCovidData()

    }, [])

    function arrowHandler(direction) {
        if (direction === "left" && min > 0) {
            setMin(min => min - 6);
            setMax(max => max - 6);
        } else if (direction === "right") {
            setMin(min => min + 6);
            setMax(max => max + 6);
        }
    }

    return (
        <div className="table">
            <table className="table__live-report">
                <thead>
                    <tr>
                        <th>
                            <div> Live Reports</div>
                            <div className="table__actions">
                                <button className="arrow" onClick={() => { arrowHandler("left") }}>
                                    <img src={`/images/${min > 0 ? 'right_colored_arrow' : 'pagination_arrow'}.svg`} alt="" className={min > 0 ? 'left_colored_arrow' : 'left_arrow'} />
                                </button>
                                <div></div>
                                <button className="arrow" onClick={() => { arrowHandler("right") }}>
                                    <img src="/images/right_colored_arrow.svg" alt="" className="right_arrow" />
                                </button>
                            </div>
                        </th>
                        <th className="" >

                        </th>
                    </tr>
                </thead>
                <tbody>

                    {countriesWithCases.map(({ country, newActiveCases, image, arrow }, index) => {

                        return (min <= index && index <= max) && (
                            < tr key={country}>
                                <td ><img className="flag" src={`/images/flags/${image.toLowerCase()}.svg`} alt={country} />
                                </td>
                                <td className="country">{country}</td>
                                <td className="active-cases">{newActiveCases}</td>
                                <td ><img className="arrow" src={`/images/${arrow ? 'up_arrow' : 'down_arrow'}.svg`} alt="" /> </td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>
        </div >
    )
}

export default Table

import React, {useState,useEffect, Fragment} from 'react';

import TopStats from '../TopStats/TopStats'
import PersonChart from '../PersonChart/PersonChart'
import Loading from '../Loading/Loading'

import './CountryData.css'

const CountryData = (props) => {
  const {name,code} = props.match.params;

  const [countryData, setCountryData] =useState(null)

  let flagSrc = `https://coronastatistics.live/assets/flags/${code.toLowerCase()}.svg`;

  useEffect( ()=>{

    const getCountryData = async () =>{
        let URL_API = 'https://api.coronastatistics.live/countries'
        let response = await  fetch(`${URL_API}/${name.toLowerCase()}`)
        response = await response.json();
        setCountryData(response)
    }

      getCountryData();

    },[])

    console.log(countryData)
  return (
    <div className="countryData_container">
      <div className="country_header">
        <img className="flag" src={flagSrc} alt={name} />
        <h3 className="white-text">{name} </h3>
      </div>
      {
        (countryData)?
        (
          <Fragment>
            <div className="topStatsCotainer">
              <TopStats
                  allInformation={ {
                    cases:countryData.cases,
                    deaths:countryData.deaths,
                    recovered:countryData.recovered
                  } }
                  totalCasesToday={ countryData.todayCases}
                  totalDeathsToday={countryData.todayDeaths}
                  totalRemaining={countryData.active}
              />
              <PersonChart cases={countryData.cases} deaths={countryData.deaths} />
            </div>
          </Fragment>

        )
        :(
          <Loading/>
        )
      }
    </div>
  );
}

export default CountryData;

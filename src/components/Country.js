import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../css/Country.css"

function Country() {
     const [country, setCountry] = useState([])
    const { name } = useParams()
    
     useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${name}`
      )
      const country = await response.json()
      setCountry(country)
    }
  fetchCountryData()
  }, [name])
    return (
         <>
      <section className="country">
        <Link to="/" className="btn btn-light">
           Back Home
        </Link>
        {country.map((c) => {
          const {
            numericCode,
            flag,
            name,
            nativeName,
            population,
            region,
            subregion,
            capital,
            topLevelDomain,
            currencies,
            languages,
            borders,
          } = c

          return (
            <article key={numericCode}>
              <div className="country-inner">
                <div className="flag">
                  <img src={flag} alt={name} />
                </div>

                <div className="country-details">
                  <div>
                    <h1>{name}</h1>
                    <h4>
                      Native Name: <span>{nativeName}</span>
                    </h4>
                    <h4>
                      Population: <span>{population}</span>
                    </h4>
                    <h4>
                      Region: <span>{region}</span>
                    </h4>
                    <h4>
                      Sub Region: <span>{subregion}</span>
                    </h4>
                    <h4>
                      Capital: <span>{capital}</span>{' '}
                    </h4>
                  </div>

                  <div>
                    <h4>
                      Top Level Domain: <span>{topLevelDomain}</span>
                    </h4>
                    <h4>
                      Currencies: <span>{currencies[0].name}</span>
                    </h4>
                    <h4>
                      Languages: <span>{languages[0].name}</span>
                    </h4>
                  </div>
                </div>
              </div>

              <div>
                <h4>Border Countries: </h4>
                <div className="borders">
                  {borders.map((border) => {
                    return (
                      <ul key={border}>
                        <li>{border}</li>
                      </ul>
                    )
                  })}
                </div>
              </div>
            </article>
          )
        })}
      </section>
    </>
  
    )
}

export default Country

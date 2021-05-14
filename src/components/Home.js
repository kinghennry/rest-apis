import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import {BiSearch} from "react-icons/bi"
import "../css/Home.css"

function Home() {
      const [search, setSearch] = useState("")
      const [countries, setCountries] = useState([])
      const [region, setRegion] = useState("");
      const handleSelect = (event) => {
        setRegion(event.target.value);
  };
      const url = 'https://restcountries.eu/rest/v2/all'
     useEffect(() => {
      const fetchCountries = async () => {
      const response = await fetch(url)
      const countries = await response.json()
      setCountries(countries)
    }

    fetchCountries()
  }, [])
  
  return (
    <section className="home">
      <div className="container">
        <div className="form">
         <div className="form__input">
                <BiSearch className="form__icon"/>
                <input type="search" placeholder="Search for a country" value={search}  onChange={(e) => {setSearch(e.target.value)}}
 />
            </div>
           {/* <div className="select__input">
            <select value={region} onChange={handleSelect} > 
            <option value="">Filter by Region</option>           

              {countries.map((country) => {
                const {name,region} = country
                return (
                  <>
                    <option key={name} value={region}>{region} </option>
                    </>
                )
              })} 
        
                </select>
            </div> */}
        </div>
         
        <section className="countries">
              {countries.filter((country) => {
                    if (search === "") {
                        return country
                    } else if (country.name.toLowerCase().includes(search.toLowerCase()) ){
                        return country
                    }
                }).map((country) => {
          const {numericCode,name,flag,population,region,capital} = country
          return (
            <Link to={`/${name}`} key={numericCode}>
              <div className="flag">
                <img src={flag} alt={name} />
              </div>
              <div className="details">
                <h1 className="country-name">{name}</h1>
                <h4>Population: <span>{population}</span></h4>
                <h4>Region: <span>{region}</span></h4>
                <h4>Capital: <span>{capital}</span></h4>  
              </div>
            </Link>
          )
        })} 
        </section>
      </div>
    </section>
  )
}

export default Home




// function Products() {
    

//     const filteredCountries = countries.filter(
//   country => {country.name.toLowerCase().includes(search.toLowerCase()) && country.region.toLowerCase().includes(region.toLocaleLowerCase())
//     }
// );
//   return (
//     <section className="home">
//         <form>


// 
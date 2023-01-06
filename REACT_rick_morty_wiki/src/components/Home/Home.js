import React, { useState, useEffect } from "react";
import Search from '../Search/Search';
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import Filter from "../Filter/Filter";


export default function Home() {

   /* API Data */
  let [data, setData] = useState([]);
  let {info, results} = data;

  /* Search Bar */
 let [search, setSearch] = useState("");
  /* Page  */
 let [pageNumber, updatePageNumber] = useState(1);

 /* Filter */
 let [status, updateStatus] = useState("");
 let [gender, updateGender] = useState("");
 let [species, updateSpecies] = useState("");


  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`

  useEffect(() => {
    (async function(){
      let data = await fetch(api).then((res) => res.json())

      setData(data);
    })();
  }, [api])
  console.log(data)

  return (
    <div className="Main">
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      
      <div className="container">
        <div className="row">
          
          <Filter
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            updatePageNumber={updatePageNumber}
          />


          <div className="col-lg-8 col-12">
            <div className="row">
              <Card page="/" results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination
  info={info}
  pageNumber={pageNumber}
  updatePageNumber={updatePageNumber}
/>

    </div>
  );
}
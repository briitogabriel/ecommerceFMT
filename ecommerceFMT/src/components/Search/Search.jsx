import { useState } from "react";
 import { SlMagnifier } from "react-icons/sl";
 
import products from "../../assets/mock.json";

function Search() {
  const [searchInput, setSearchInput] = useState([]);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <div className=" w-100 ">
    <div className="input-container d-flex justify-content-center align-items-center"  style={{position: "relative"}}>
   
        <input
          className="form-control w-75 mt-4"
        /*   style={{margin: "0 auto"}} */
          list="datalistOptions"
          onChange={handleSearch}
          value={searchInput}
          placeholder="Digite para procurar..."  
        />
         <SlMagnifier className="mt-4"  style={{position: "absolute", right:"12rem"}}/>
        </div>
        <datalist id="datalistOptions">
          {products.map((value, id) => (
            <option key={id} value={value.nome} />
          ))}
        </datalist>
        {/*       <button >
        
      </button> */}
      </div>{" "}
    </>
  );
}

export default Search;

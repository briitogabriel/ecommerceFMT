import { useState } from "react";
/* import { SlMagnifier } from "react-icons/sl";
 */
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
        <input
          className="form-control w-75"
          style={{margin: "0 auto"}}
          list="datalistOptions"
          onChange={handleSearch}
          value={searchInput}
          placeholder="Digite para procurar..."
        />
        <datalist id="datalistOptions">
          {products.map((value, id) => (
            <option key={id} value={value.nome} />
          ))}
        </datalist>
        {/*       <button >
        <SlMagnifier />
      </button> */}
      </div>{" "}
    </>
  );
}

export default Search;

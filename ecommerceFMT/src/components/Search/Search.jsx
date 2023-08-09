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
      <input
        className="form-control"
        list="datalistOptions"
        id="exampleDataList"
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
    </>
  );
}

export default Search;


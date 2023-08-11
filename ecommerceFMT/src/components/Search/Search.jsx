import { SlMagnifier } from "react-icons/sl";
import { useAppContext } from "../../context/Context";
import data from '../../assets/mock.json';

function Search() {
  const {products, setProducts} = useAppContext();

  const handleSearch = (e) => {
    if (!e.target.value) {
      return setProducts(data)
    } 

    

    

    const result = products.filter((product) => {
    const nome = product.nome.toLowerCase();
     return nome.includes(e.target.value.toLowerCase())
    })

    setProducts(result)

    console.log(products)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
      <div className=" w-100 ">
        <form onSubmit={handleSubmit} className="input-container d-flex justify-content-center align-items-center"  style={{position: "relative"}}>
          <input
            className="form-control w-75 mt-4"
            list="datalistOptions"
            onChange={handleSearch}
            placeholder="Digite para procurar..."  
          />
          <SlMagnifier className="mt-4"  style={{position: "absolute", right:"12rem"}}/>
        </form>
        <datalist id="datalistOptions">
          {products.map((value, id) => (
            <option key={id} value={value.nome} />
          ))}
        </datalist>
      </div>
  );
}

export default Search;

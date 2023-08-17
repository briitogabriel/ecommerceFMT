import React from 'react';

import { InputGroup, Form, FormLabel } from 'react-bootstrap';
import { SlMagnifier } from 'react-icons/sl';
import { useAppContext } from '../../context/Context';
import data from '../../assets/mock.json';

function Search() {
  const { products, setProducts } = useAppContext();

  const handleSearch = (e) => {
    if (!e.target.value) {
      return setProducts(data);
    }

    const result = products.filter((product) => {
      const nome = product.nome.toLowerCase();
      return nome.includes(e.target.value.toLowerCase());
    });
    setProducts(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className=" w-100 ">
      <form
        onSubmit={handleSubmit}
        className="input-container d-flex justify-content-center align-items-center"
        style={{ position: 'relative' }}
      >
        <FormLabel htmlFor="Pesquisar" className="d-none">
          Pesquisar
        </FormLabel>
        <InputGroup className="mt-5">
          <Form.Control
            placeholder="Digite para procurar..."
            list="datalistOptions"
            onChange={handleSearch}
            id="Pesquisar"
          />
          <InputGroup.Text className="d-flex justify-content-center align-items-center">
            <SlMagnifier /> <span className="ms-2">Pesquisar</span>
          </InputGroup.Text>
        </InputGroup>
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

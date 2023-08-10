import {TbFaceIdError} from 'react-icons/tb'

export const NotFoundPage = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{height: '45vh'}}>
      <div className='fs-1'><TbFaceIdError/></div>
      <h1 className="text-secondary mt-5">404 Página não encontrada!</h1>
      <img src="/404.jpg" alt="" width={600} />
    </div>
  );
};

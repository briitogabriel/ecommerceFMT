import "./Maps.css"

function Maps() {
    return (
        <>
            <div className="card text-center mt-5 ">
                <div className="p-2">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6534.224621478669!2d-48.70702301132225!3d-28.336714155385696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1687528204626!5m2!1spt-BR!2sbr" width="98%" height="300" ></iframe>
                </div>

                    <h4 className="card-title  "> Matriz </h4>
                    <div className="d-flex justify-content-evenly mt-3">
                        <ul className="contato">
                            <li >Rua A-5, 123</li>
                            <li >Imbituba -SC</li>
                        </ul>                    
                   
                        <ul className="contato">
                            <li className="contato-li "><a className="list-group-item" href="tel:+554899999999">(48)9 9999-9999</a></li>
                            <li className="contato-li"><a className="list-group-item" href="mailto:acervo@acervo.com">acervo@acervo.com</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-start mt-4 p-1 text-secondary"> Aberto Seg - Sex, 8am - 18px</p>
      
                </div>
            </div>
        </>
    );
}

export default Maps;
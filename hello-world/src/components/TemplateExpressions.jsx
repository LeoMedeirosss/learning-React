const TemplateExpressions = () => {

    const name = "NomeExemplo"
    const data = {
        ex1: 10 ,
        ex2: "Exemplo2",
    };

    return(
        <div>
            <p>Olá, {name}.</p>
            <p>Um outro exemplo é: {data.ex2}</p>
            <p>{30 + 4}</p>
        </div>

    )

};

export default TemplateExpressions;
const Numbers = () => {

    const cinco = 5;

    const dez = 10;

    var result = 0;

    return(

        <div>
            <div>

                <p>{cinco}</p>
                <p>{dez}</p>

                <button onClick={() => console.log(cinco + dez)}>
                    aperte para ver a soma
                </button>
            </div>
        </div>

    )

}

export default Numbers;
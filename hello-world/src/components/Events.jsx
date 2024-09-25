const Events = () => {

    const handleMyEvent = (e) =>{
        console.log(e);


    }

    return(

        <div>
            <div>
                <button onClick={handleMyEvent}>
                    Aperte aqui.
                </button>
            </div>

            <div>
                <button onClick={() => console.log("apertou.")}>
                    Agora aperte aqui.
                </button>
            </div>
        </div>

    )

}

export default Events;
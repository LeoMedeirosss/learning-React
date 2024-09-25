const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);


    }

    const render = (x) => {

        if(x){

            return <p>renderizou isso</p>

        }  else{

            return <p>renderizou aquilo</p>

        }

    };

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
            {render(true)}
            {render(false)}
        </div>

    )

};

export default Events;
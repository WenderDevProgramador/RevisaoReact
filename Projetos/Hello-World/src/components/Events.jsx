

const Events = () => {

    const handleClick = (e) => {
        alert('Executou o teste com sucesso.')
    }

    const rederSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso</h1> 
        } else {return <h1>Renderizando outra coisa</h1>}
    }


    return (
        <div>
            <div>
                <button className="button" onClick={handleClick}>Teste</button>
            </div>

            <div>
                {rederSomething(true)}
                {rederSomething(false)}
            </div>

            <div>
                
            </div>
        </div>
    )
}

export default Events


const CondicionalRender = () => {
    const x = true;
    const name = 'Wender'

    return (
        <div>
            {/* Render condicional */}

            <h3>Isso será exibido?</h3>
            {x && <p>Se X for True sim.</p>}

            <h3>O nome é ? </h3>
                {name === 'Wender' ? (<div> 
                    <p>Olá João!</p>
                    </div>) : (<div><p>Nome não encontrado!</p></div>)}

        </div>
    )
}

export default CondicionalRender
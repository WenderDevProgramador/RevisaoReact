

const TemplateExpression = () => {
    const name = "Wender"
    const data =  {
        age: 30,
        job: 'Programador'
    }

    return (
        <>
        <h3>2 + 2 é = {2 + 2}</h3>
        <h3>Bem vindo {name}</h3>
        <p>Sua idade é {data.age} e você é um {data.job}</p>

        </>
    )
}

export default TemplateExpression
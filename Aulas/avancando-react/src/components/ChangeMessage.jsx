

const ChangeMessage = ({ handleMessage }) => {
    const messages = ['oi', 'olá', 'tudo bem?']
    return (
        <div>
            <button onClick={() => handleMessage(messages[0])} type="button">

            1</button>

            <button onClick={() => handleMessage(messages[1])} type="button">

            2</button>

            <button onClick={() => handleMessage(messages[2])} type="button">

            3</button>

        </div>
    )
}

export default ChangeMessage
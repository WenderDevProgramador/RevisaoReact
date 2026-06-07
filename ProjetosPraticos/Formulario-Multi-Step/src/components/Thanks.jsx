import './Thanks.css'

import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill
} from 'react-icons/bs';


const emojiData = {
    unsatisfied: {
        icon: <BsFillEmojiFrownFill />,
        label: 'Insatisfeito'
    },
    neutral: {
        icon: <BsFillEmojiNeutralFill />,
        label: 'Neutro'
    },
    satisfied: {
        icon: <BsFillEmojiSmileFill />,
        label: 'Satisfeito'
    },
    very_satisfied: {
        icon: <BsFillEmojiHeartEyesFill />,
        label: 'Muito Satisfeito'
    }
};

const Thanks = ({data}) => {
    return (
        <div className='thansks-container'>
            <h2>Falta pouco...</h2>
            <p>Sua opnião é muito importante, em breve você receberá um cupom de desconto!<br />
                Para concluir a avaliação clique no botão enviar abaixo:</p>
            
            <h3>Aqui está o resumo da sua avaliação:</h3>
            <p className='review-data'>
                <span>Satisfação com o produto:</span>
                {emojiData[data.review]?.icon}
                {emojiData[data.review]?.label}
            </p>

            <p className='review-data'>
                <span>Comentário:</span>
                {data.comment}
            </p>

        </div>
    )
}

export default Thanks
import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill
} from 'react-icons/bs';

import './ReviewForm.css';

const ReviewForm = ({data, updateHandler}) => {
    return (
        <div className="review-form">
            <div className="form-control score-container">
                <label className="radio-container">

                    <input
                    type="radio" 
                    name="review" 
                    value='unsatisfied' 
                    required 
                    checked={data.review === 'unsatisfied'}
                    onChange={(e) => updateHandler('review', e.target.value)}
                    />

                    <BsFillEmojiFrownFill   />

                    <p>Insatisfeito</p>
                </label>

                <label className="radio-container">

                    <input type="radio" 
                    name="review" 
                    value='neutral' 
                    required
                    checked={data.review === 'neutral'}
                    onChange={(e) => updateHandler('review', e.target.value)}
                    />

                    <BsFillEmojiNeutralFill  />

                    <p>Neutro</p>
                </label>

                <label className="radio-container">

                    <input type="radio" 
                    name="review" 
                    value='satisfied' 
                    required 
                    checked={data.review === 'satisfied'}
                    onChange={(e) => updateHandler('review', e.target.value)}
                    />

                    <BsFillEmojiSmileFill  />

                    <p>Satisfeito</p>
                </label>

                <label className="radio-container">

                    <input type="radio" 
                    name="review" 
                    value='very_satisfied' 
                    required 
                    checked={data.review === 'very_satisfied'}
                    onChange={(e) => updateHandler('review', e.target.value)}
                    />

                    <BsFillEmojiHeartEyesFill   />

                    <p>Muito Satisfeito</p>
                </label>


            </div>
            <div className="form-control">
                <label htmlFor="comment">Comentário:</label>
                <textarea 
                id="comment" 
                name="comment" 
                rows="4" 
                placeholder="Conte-nos sobre sua experiência..." required
                value={data.comment || ''}
                onChange={(e) => updateHandler('comment', e.target.value)}
                ></textarea>
            </div>
        </div>
    )
}

export default ReviewForm
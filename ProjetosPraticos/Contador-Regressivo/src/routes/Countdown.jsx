import Counter from "../components/Counter"
import Title from "../components/Title"
import useCountdown from "../hooks/useCountdown";
import { useContext, useEffect } from "react";
import { CountdownContext } from "../context/countdownContext";
import { useNavigate } from "react-router-dom";

const Countdown = () => {
    const { event } = useContext(CountdownContext);
    const navigate = useNavigate(); // ✅ hook no topo

    // Se não houver evento, redireciona
    useEffect(() => {
        if (!event) {
            navigate('/');
        }
    }, [event, navigate]);

    if (!event) {
        return null; // evita renderizar enquanto redireciona
    }

    const eventTitle = event.title;
    const eventDate = event.date;
    const eventImage = event.image;
    const eventColor = event.color;

    const [
        dayNumber, hourNumber, minuteNumber, secondNumber
    ] = useCountdown(eventDate);

    return (
        <>
            <Title title={eventTitle} eventColor={eventColor} />
            <div className="countdown-container">
                <Counter title='Dias' number={dayNumber} eventColor={eventColor} />
                <Counter title='Horas' number={hourNumber} eventColor={eventColor} />
                <Counter title='Minutos' number={minuteNumber} eventColor={eventColor} />
                <Counter title='Segundos' number={secondNumber} eventColor={eventColor} />
            </div>
        </>
    )
}

export default Countdown;

import { useState, useEffect } from 'react';

const useCountdown = (data) => {
    const [dayNumber, setDayNumber] = useState(0);
    const [hourNumber, setHourNumber] = useState(0);
    const [minuteNumber, setMinuteNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);

    useEffect(() => {
        const countDown = () => {
            const countDate = new Date(data).getTime();
            const now = new Date().getTime();
            const gap = countDate - now;

            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            setDayNumber(Math.floor(gap / day));
            setHourNumber(Math.floor((gap % day) / hour));
            setMinuteNumber(Math.floor((gap % hour) / minute));
            setSecondNumber(Math.floor((gap % minute) / second));
        };

        // chama imediatamente e depois a cada segundo
        countDown();
        const interval = setInterval(countDown, 1000);

        // limpa o intervalo ao desmontar
        return () => clearInterval(interval);
    }, [data]);

    return [dayNumber, hourNumber, minuteNumber, secondNumber];
};

export default useCountdown;

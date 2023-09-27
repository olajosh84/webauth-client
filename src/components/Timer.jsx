import { useState, useEffect } from "react";

export default function Timer () {
    const [time, setTime] = useState(300);
    
    useEffect(() => {
        let timer = setInterval(() => {
            setTime((time) => {
                if(time === 0){
                    clearInterval(timer);
                    return 0;
                }else {
                    return time - 1;
                }
            })
        }, 1000);
        return () => clearInterval(timer);
    },[]);

    return (
        <div>
            <p>
                Time left: {`${Math.floor(time / 60)}`.padStart(2, 0)} : {`${time % 60}`.padStart(2,0)}
            </p>
        </div>
    )
}
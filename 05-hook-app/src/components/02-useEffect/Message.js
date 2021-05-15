import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coordinates, setCoordinates] = useState({
        x: 0,
        y: 0
    });

    const { x, y } = coordinates;

    useEffect(() => {
        const mouseMove = (e) =>{
            const coordinates = { x: e.x, y: e.y };
            setCoordinates(coordinates);
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }

    }, [])

    return (
        <div>
            <h3>Eres genial</h3>
            <p>
                x:{ x } y: { y }
            </p>
        </div>
    )
}

import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [ images, setImages ] = useState([]);
    
    useEffect(  (_) => {
        getGifs();
    }, []);

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick and  Morty&limit=10&api_key=7Bgn9EjW3vpLFZD3UoBd7OKLpWvLFnPP';
        const response = await fetch( url );
        const { data } = await response.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });

        setImages(gifs);
        console.log(gifs);
    }

   

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img } 
                        />
                    ))
                }
            </div>
        </>
    )
}

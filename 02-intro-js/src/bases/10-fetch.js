

const apiKey = '7Bgn9EjW3vpLFZD3UoBd7OKLpWvLFnPP';

const _call = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// _call.then( response => {
//     //console.log(response);
//     response.json().then( data => {
//         console.log( data );
//     })
// }).catch( console.warn );

_call
    .then( response => response.json())
    .then( ( {data } ) => {
        const { url } = data.images.original;
        console.log( url );

        const img = document.createElement('img');

        img.src = url;

        document.body.append( img );
    })
    .catch( console.warn );
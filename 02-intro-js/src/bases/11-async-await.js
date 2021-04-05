// async await

const getImage = async () => {
    try {
        const apiKey = '7Bgn9EjW3vpLFZD3UoBd7OKLpWvLFnPP';
        const reponse = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } =  await reponse.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    } catch (error) {
        console.error(error);
    }
}

// getImage().then(console.log);
getImage();

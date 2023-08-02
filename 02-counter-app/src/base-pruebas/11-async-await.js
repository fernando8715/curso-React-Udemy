
export const getImagen = async() => {

    try {

        const apiKey = '8jKcGziwgO0Q5ir5Hf8UcN3ureCJBS1B';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url

    } catch (error) {
        return `No se encontro la imagen`
    }    
}





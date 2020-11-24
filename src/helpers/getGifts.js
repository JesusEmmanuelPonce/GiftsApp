export const getGifts = async(category) => {
        
    const url = `http://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=V06oX1avCR8oEbPEIt3mb1IbDMB1sjoh`
    const resp = await fetch(url)
    const { data } = await resp.json()
    
    const gift = data.map ( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gift
} 
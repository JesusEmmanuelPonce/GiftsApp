import React, { useEffect, useState } from 'react'

export const GiftGrid = ({category}) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifts()
    },[])

    const getGifts = async() => {
        
        const url = 'http://api.giphy.com/v1/gifs/search?q=rick&limit=10&api_key=V06oX1avCR8oEbPEIt3mb1IbDMB1sjoh'
        const resp = await fetch(url)
        const { data } = await resp.json()
        
        const gift = data.map ( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        setImages(gift)
        console.log(gift)
    } 

    return (
        <>
            <h3>
                { category }
            </h3>  
            <ul>
                {
                    images.map( image => (
                        <li key={ image.id }>
                            { image.title }
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

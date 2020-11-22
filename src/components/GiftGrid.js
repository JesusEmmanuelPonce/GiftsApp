import React, { useEffect } from 'react'

export const GiftGrid = ({category}) => {

    const url = 'http://api.giphy.com/v1/gifs/search?q=rick&limit=10&api_key=V06oX1avCR8oEbPEIt3mb1IbDMB1sjoh'

    useEffect(() => {
        
    },[])

    return (
        <>
            <h3>
                { category }
            </h3>  
        </>
    )
}

import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifts'
import { GiftGridItem } from './GiftGridItem'

export const GiftGrid = ({category}) => {

    const { loading, data } = useFetchGifts(category)

    return (
        <>
            <h3>
                { category }
            </h3>
            { loading && <p>Cargando</p> }
            <div className="card-grid">  
                {
                    data.map( img => (
                        <GiftGridItem 
                            key={img.id}              
                            img={img} 
                        />
                    ))
                }
            </div>
        </>
    )
}

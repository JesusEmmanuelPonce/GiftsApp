import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['one punch'])

    return ( 
        <>
            <h1>
                Gift Expert App
            </h1>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ul>
                { 
                    categories.map( (category, index) => <GiftGrid key={index} category={category} /> )
                }
            </ul>
        </>
     );
}
 
export default GiftExpertApp;
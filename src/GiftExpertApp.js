import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['uno'])

    return ( 
        <>
            <h1>
                Gift Expert App
            </h1>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ul>
                { 
                    categories.map( category => <GiftGrid category={category} /> )
                }
            </ul>
        </>
     );
}
 
export default GiftExpertApp;
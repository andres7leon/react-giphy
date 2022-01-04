import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = () => {

    // const categories = ['One Puch', 'Samura x', 'Dragon Ball'];

    const [categories, setCategories] = useState(['Dragon Ball'])

    // const handleAdd = () => {
    //     setCategories( [...categories, 'Otra neuva'] )
    // }

    return (
        <>
            <h2>Gif Expert</h2>
            <hr/>  

            <AddCategory setCategories={ setCategories } />

            <ol>
                {
                    categories.map( categoria => (

                        <GifGrid 
                            key={ categoria }
                            category={ categoria }
                        />

                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;
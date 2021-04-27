import React, { Fragment, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Drangon Ball']);

    // const handleAdd = () => { 
    //     // setCategories([...categories, 'Batman']);
    //     setCategories( _categories => [...categories, 'Batman']);
    // }

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                            key={ category } 
                            category={ category } 
                        />
                    )
                }
            </ol>
        </Fragment>
    );
}

export default GifExpertApp;

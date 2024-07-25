import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {
        if (categories.includes(newCategory)) return;
        const newItem = [ newCategory, ...categories ] ;
        setCategories(newItem);
        // setCategories( cat = > [...categories, 'New Category']);
    };

  return (
    <>
        <h1>GifExpertApp luis</h1>
        <p>Hola amor </p>
        <AddCategory 
            // setCategories={ setCategories }
            onNewCategory = { onAddCategory } 
        />
        
        {
            categories.map((category) => (
                <GifGrid 
                    key={ category} 
                    category={ category }
                />
            ))
        }
    </>
  )
}

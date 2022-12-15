import { useState } from "react"
import { AddCategory,GiftGrid } from "./components"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['one pounch '])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return

        //setCategories(['valorA',...categories])
        setCategories(cat => [newCategory, ...categories])
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory addNewCategory={onAddCategory} />
            {
                categories.map(category => (
                    <GiftGrid key={category} category={category} />

                ))

            }

        </>

    )


    
}
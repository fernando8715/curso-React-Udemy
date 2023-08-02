import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifApiApp = () => {

    const [categories, setCategories] = useState(['Dragon']);

    const onNewCategory = (category)=>{
        if(categories.includes(category)) return;
        setCategories([category]);
    }


  return (
    <>
    {/* titulo */}
        <h1>GifApiApp</h1>
    
    {/* input */}
        <AddCategory 
            onNewCategory={onNewCategory}
        />

    {/* lista gifs */}
        <ol>
            {
            categories.map(category => {
                return <li key={category}>{category}</li>
                
                })
            }
        </ol>

    </>

  )
}
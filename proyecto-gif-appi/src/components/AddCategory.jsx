import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event)=>{
        setInputValue(event.target.value);
    }
    
    const onSubmit = (event)=> {
        event.preventDefault();

        const category = inputValue.trim().toLowerCase();

        if(category.length <3) return;
        onNewCategory(category);
        setInputValue('');
    }

    
    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Ingresa una categoria"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

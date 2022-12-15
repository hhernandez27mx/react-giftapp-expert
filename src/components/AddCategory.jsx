import { useState } from "react"



export const AddCategory = ({addNewCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)

    }

    const onSubmit = (event) => {
        event.preventDefault()  
        if (inputValue.trim().length<=1) return ;

        const value=inputValue.trim()
        addNewCategory(value)
        setInputValue('')

    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Agrega categoria"
                onChange={onInputChange}
                value={inputValue}

            />

        </form>

    )

}
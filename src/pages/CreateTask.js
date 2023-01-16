import { useState } from "react";

const CreateTask = () => {
    const [ name, setName ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ rating, setRating ] = useState("")
    const [ formErrors, setFormErrors ] = useState(null)

    const handleCreateTask = () => {

    }

    return (
        <div className="page create">
            <form onSubmit={handleCreateTask}>
                <label htmlFor="name">Event Name:</label>
                <input 
                type="text" 
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                
                <label htmlFor="description">Method:</label>
                <textarea 
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />

                <label htmlFor="rating">Rating:</label>
                <input 
                type="number"
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                />

                <button>Create Smoothie Recipe</button>

                { formErrors && <p className="error">{formErrors}</p> }
            </form>
        </div>
    )
}

export default CreateTask;
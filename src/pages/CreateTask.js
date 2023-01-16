import { useState } from "react";

const CreateTask = () => {
    const [ name, setName ] = useState(null)
    const [ description, setDescription ] = useState(null)
    const [ rating, setRating ] = useState(null)

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

            </form>
        </div>
    )
}

export default CreateTask;
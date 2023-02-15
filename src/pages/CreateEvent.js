import { useState } from "react";
import supabase from "../config/SupabaseConfig"
import { useNavigate } from "react-router-dom"

const CreateEvent = () => {
    const [ name, setName ] = useState("")
    const [ description, setDescription ] = useState("true")
    const [ rating, setRating ] = useState("")
    const [ formErrors, setFormErrors ] = useState(null)
    
    const navigate = useNavigate();
    const handleCreateTask = async (e) => {
        e.preventDefault();

        if (!name || !description || !rating ) {
            setFormErrors("All fields are compulsory")
            return
        }

        const { error } = await supabase
            .from('events')
            .insert({name, description, rating})
        
        if (error) {
            setFormErrors("An error occured")
            return
        }
        navigate('/')
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
                
                <label htmlFor="description">Description:</label>
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

                <button>Create Event</button>

                { formErrors && <p className="error">{formErrors}</p> }
            </form>
        </div>
    )
}

export default CreateEvent;
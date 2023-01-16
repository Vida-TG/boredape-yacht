import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import supabase from "../config/SupabaseConfig"

const EditEvent = () => {
    const [ name, setName ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ rating, setRating ] = useState("")
    const [ formErrors, setFormErrors ] = useState(null)

    const { id } = useParams()

    const handleEditEvent = () => {
        
    }

    useEffect(() => {
        const addInfo = async () => {
            const { data, error } = await supabase
                .from('events')
                .select()
                .eq('id', id)
                .single()
            
            if (data) {
                setName(data.name)
                setDescription(data.description)
                setRating(data.rating)
            }
        }

        addInfo();
    }, [])

    return (
        <div className="page edit">
            <form onSubmit={handleEditEvent}>
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

                <button>Edit Event</button>

                { formErrors && <p className="error">{formErrors}</p> }
            </form>
        </div>
    )
}

export default EditEvent;
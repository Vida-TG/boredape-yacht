import { Link } from "react-router-dom"
import supabase from "../config/SupabaseConfig"

const EventCard = ({event, onDeleted}) => {

    const handleDelete = async () => {
        const { error } = await supabase
            .from('events')
            .delete()
            .eq("id", event.id)
        
        if(!error) onDeleted()
    }
    return (
        <div className="event-card">
            <h3>{event.name}</h3>
            <h4>{event.description}</h4>
            <div className="rating">{event.rating}</div>

            <div className="buttons">
                <Link to={"/" + event.id}>
                    <i className="material-icons">edit</i>
                </Link>
                <i className="material-icons" onClick={handleDelete}>delete</i>
            </div>
        </div>
    )
}

export default EventCard;
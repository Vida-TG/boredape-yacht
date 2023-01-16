import { Link } from "react-router-dom"

const EventCard = ({event}) => {

    return (
        <div className="event-card">
            <h3>{event.name}</h3>
            <h4>{event.description}</h4>
            <div className="rating">{event.rating}</div>

            <div className="buttons">
                <Link to={"/" + event.id}>
                    <i className="material-icons">edit</i>
                </Link>
                <i className="material-icons">delete</i>
            </div>
        </div>
    )
}

export default EventCard;
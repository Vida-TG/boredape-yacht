const EventCard = ({event}) => {

    return (
        <div>
            {event.id}
            {event.name}
            {event.description}
        </div>
    )
}

export default EventCard;
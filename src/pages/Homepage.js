import { useState, useEffect } from "react";
import supabase from "../config/SupabaseConfig"

import EventCard from "../components/EventCard"


const HomePage = () => {

    const [ events, setEvents ] = useState(null)
    const [ fetchError, setFetchError ] = useState(null)

    useEffect(() =>{
        const fetchEvents = async () => {
            const { data, error } = await supabase
                .from("events")
                .select()

            if (error){
                setFetchError("Error getting events")
            }
            if (data){
                setEvents(data)
            }
        }

        fetchEvents()
    }, [])
    
    return (
        <div className="page home">
            { fetchError && (<p>{fetchError}</p>) }
            <div className="event-grid">
                { events && events.map((event) => <EventCard key={event.id} event={event} />)}
            </div>
        </div>
    )
}

export default HomePage;
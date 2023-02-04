import { useState, useEffect } from "react";
import supabase from "../config/SupabaseConfig"

import EventCard from "../components/EventCard"


const HomePage = () => {

    const [ events, setEvents ] = useState(null)
    const [ fetchError, setFetchError ] = useState(null)
    
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

    useEffect(() =>{
        fetchEvents()
    }, [])
    
    return (
        <div className="page home">
            { fetchError && (<h3>{fetchError}</h3>) }
            <div className="event-grid">
                { events && events.map((event) => <EventCard key={event.id} event={event} onDeleted={fetchEvents}/>)}
            </div>
        </div>
    )
}

export default HomePage;
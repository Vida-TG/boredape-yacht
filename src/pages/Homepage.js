import { useState, useEffect } from "react";
import supabase from "../config/SupabaseConfig"


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
        console.log("dwndwnk")
    }, [])
    
    return (
        <div className="page home">
            { fetchError && (<p>{fetchError}</p>) }
            { events && events.map((event) => <div key="{event.id}">{event.name}</div>)}
        </div>
    )
}

export default HomePage;
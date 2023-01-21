import React, { useState, useEffect } from "react";
import supabase from "../config/SupabaseConfig";
import { useNavigate } from "react-router-dom"; 

const Success = () => {
    const navigate = useNavigate()
    const [ user, setUser ] = useState({})

    useEffect(() => {
        const getUserData = async () => {
            await supabase.auth.getUser().then((value) => {
                if(value.data?.user){
                    setUser(value.data.user);
                }
            })
        }

        getUserData();
    }, []);
}

export default Success;
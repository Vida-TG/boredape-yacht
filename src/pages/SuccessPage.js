import React, { useState, useEffect } from "react";
import supabase from "../config/SupabaseConfig";
import { useNavigate } from "react-router-dom"; 

const Success = () => {
    const navigate = useNavigate()
    const [ user, setUser ] = useState({})

    useEffect(() => {
        

        getUserData();
    }, []);
}

export default Success;
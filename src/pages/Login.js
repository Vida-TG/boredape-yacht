import { Auth, ThemeSupa } from "@supabase/auth-ui-react"
import { useNavigate } from "react-router-dom";
import supabase from "../config/SupabaseConfig";


const Login = () => {
    const navigate = useNavigate()
    supabase.auth.onAuthStateChange(async (e) => {
        if (e !== "SIGNED_OUT") {
            navigate("/success")
        } else {
            navigate("/")
        }
    })

    return (
        <div className="App">
            <Auth
                supabaseClient={supabase}
                appearance={{theme: ThemeSupa}}
                theme="dark"
                providers={["discord", "google"]}
            />
        </div>
    )
}

export default Login;
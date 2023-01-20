import { Auth, ThemeSupa } from "@supabase/auth-ui-react"
import { supabase } from "../config/SupabaseConfig";

const Login = () => {
    supabase.auth.onAuthStateChange
}

export default Login;
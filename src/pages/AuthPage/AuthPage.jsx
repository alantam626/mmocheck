import LoginForm from "../../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";

 export default function AuthPage({setUser}) {
    return(
    <main>

        <h1>MMO Check Login</h1>
        <LoginForm setUser = {setUser} />

        <Link to="/signup" className="button">Sign Up</Link>
        
    </main>
    )}
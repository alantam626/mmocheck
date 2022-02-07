import { set } from "mongoose";
import SignUpForm from "../../components/SignUpForm/SignupForm";
import LoginForm
 from "../../components/LoginForm/LoginForm";
export default function AuthPage({setUser}) {
    return (
    <main>
        <h1>MMO Check Login</h1>
        <LoginForm setUser = {setUser} />
        <SignUpForm setUser = {setUser} />
        
    </main>
    )
}
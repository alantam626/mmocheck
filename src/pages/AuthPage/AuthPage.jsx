
import SignUpForm from "../../components/SignUpForm/SignupForm";
import LoginForm
 from "../../components/LoginForm/LoginForm";
export default function AuthPage({setUser}) {
    return(
    <main>

        <h1>MMO Check Login</h1>
        <LoginForm setUser = {setUser} />
        <h1>MMO Check Sign Up</h1>
        <SignUpForm setUser = {setUser} />
        
    </main>
    )}
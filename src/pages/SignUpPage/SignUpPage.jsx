import SignUpForm from "../../components/SignUpForm/SignupForm";
export default function SignUpPage({ setUser }) {
    return (
        <div>
            <h1>MMO Check Sign Up</h1>
            <SignUpForm setUser={setUser} />
        </div>
    )

}
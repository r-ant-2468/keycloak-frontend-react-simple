import {useAuthSession} from "../../features/auth/hooks/useAuthSession.ts";

function LandingPage() {

    const {login} = useAuthSession();

    return (
        <div>
            <h1>Landing Page</h1>
            <button className="text-blue-600 hover:underline cursor-pointer mt-4" onClick={login}>Login here</button>
        </div>
    );
}
export default LandingPage;
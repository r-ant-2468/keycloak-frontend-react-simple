import {useAuthSession} from "../features/auth/hooks/useAuthSession.ts";

function Navbar(){
    const {connectedUser, isAuthenticated, logout} = useAuthSession();
    return (
        <nav className="flex justify-between items-center p-4 bg-white border-b">
            <span className="font-bold text-xl">My App</span>
            <div className="flex items-center gap-4">
                {isAuthenticated && (
                    <>
                        <span className="text-sm">Hi, {connectedUser.firstName}</span>
                        <button
                            onClick={logout}
                            className="text-sm text-red-600 hover:underline"
                        >
                            Logout
                        </button>
                    </>
                )}
            </div>
        </nav>
    )
}

export default Navbar;
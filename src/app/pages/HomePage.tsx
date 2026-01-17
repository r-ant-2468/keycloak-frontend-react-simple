import {useAuthSession} from "../../features/auth/hooks/useAuthSession.ts";

function HomePage(){
    const {connectedUser} = useAuthSession();
    return (
        <div className="p-10 font-sans text-gray-800">
            <h1 className="text-3xl font-extrabold mb-2">
                Welcome, {connectedUser.firstName} {connectedUser.lastName}
            </h1>
            <p className="text-sm text-gray-500 mb-6">ID: {connectedUser.id}</p>

            <h2 className="text-lg font-semibold mb-3">Your Roles:</h2>
            <div className="flex gap-2 flex-wrap">
                {connectedUser.roles.map((role: string) => (
                    <span key={role} className="px-3 py-1 bg-gray-100 border rounded text-sm">
                        {role}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
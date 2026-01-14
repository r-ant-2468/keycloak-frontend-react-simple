import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import AuthRouteGuard from "./features/auth/components/AuthRouteGuard.tsx";
import HomePage from "./app/pages/HomePage.tsx";
import Navbar from "./components/Navbar.tsx";
import LandingPage from "./app/pages/LandingPage.tsx";
import {useAuthSession} from "./features/auth/hooks/useAuthSession.ts";

function App() {

    const { isAuthenticated, isLoading } = useAuthSession();

    // Make sure the app is not in a loading state before rendering a page
    if (isLoading) {
        return <div className="spinner" />;
    }

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route element={<AuthRouteGuard />}>
                    <Route path="/home" element={<HomePage />} />
                </Route>
                <Route path="/" element={isAuthenticated ? <Navigate to="/home" replace /> : <LandingPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

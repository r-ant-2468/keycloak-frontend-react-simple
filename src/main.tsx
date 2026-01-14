import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from "react-oidc-context";
import {authProviderConfig} from "./features/auth/authConfig.ts";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthProvider {...authProviderConfig}>
            <App/>
        </AuthProvider>
    </StrictMode>,
)

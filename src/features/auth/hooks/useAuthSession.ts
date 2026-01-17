import {useAuth} from "react-oidc-context";
import {useMemo} from "react";
import type {AuthSession} from "../types/AuthSession.ts";
import {signoutRedirectConfig} from "../authConfig.ts";

export function useAuthSession(): AuthSession {
    const auth = useAuth();

    // Use memo, only need to updated returned value when auth changes
    return useMemo((): AuthSession => {

        const profile = auth.user?.profile as any;
        const clientId = import.meta.env.VITE_KEYCLOAK_CLIENT;
        const roles : string[] = profile?.resource_access?.[clientId]?.roles ?? [];

        return {
            isAuthenticated: auth.isAuthenticated,
            isLoading: auth.isLoading,
            connectedUser: {
                id: profile?.sub ?? "",
                firstName: profile?.given_name ?? "",
                lastName: profile?.family_name ?? "",
                roles: roles
            },
            login: () => void auth.signinRedirect(), // Added login
            logout: () => auth.signoutRedirect(signoutRedirectConfig)
        }
    }, [auth]);
}
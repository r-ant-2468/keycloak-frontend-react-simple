import type {ConnectedUser} from "./ConnectedUser.ts";

export interface AuthSession {
    isAuthenticated : boolean,
    isLoading: boolean,
    connectedUser : ConnectedUser,
    login: () => void
    logout: () => void
}
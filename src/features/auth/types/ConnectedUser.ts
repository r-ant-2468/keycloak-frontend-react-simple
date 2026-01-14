import type {ApplicationRole} from "./ApplicationRole.ts";

export interface ConnectedUser {
    id: string,
    firstName: string,
    lastName: string,
    roles: ApplicationRole[]
}
# Keycloak Frontend React Simple

This repository gives an example of a simple React application with standardised Keycloak PKCE integration for authentication with minimal code.

This is an example only, focusing on integration. Therefore, styling and additional functionality are kept simple.

## Running Application


### Requirements:

Note: A working example of a backend REST API service, which includes a fully configured Keycloak instance as a devservice, can be found here: [keycloak-backend-quarkus](https://github.com/r-ant-2468/keycloak-backend-quarkus).

- [Node.js](https://nodejs.org/) (>= 20.19.0)
- A running **Keycloak** instance with a client configured with:
  - **Protocol**: `openid-connect`
  - **Access Type**: `public`
  - **Valid Redirect URIs**: `http://localhost:5173/*`
  - **Web Origins**: `http://localhost:5173`
  - **Valid Post Logout Redirect URIs**: `http://localhost:5173/*`
  - **Roles**: any roles returned by Keycloak must be included in the type `src/features/auth/types/ApplicationRole.ts`

### Running application:
**Install dependencies**
   ```bash
   npm install
   ```

**Configure Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_KEYCLOAK_URL=https://your-keycloak-domain/
   VITE_KEYCLOAK_REALM=your-realm-name
   VITE_KEYCLOAK_CLIENT=your-client-id
   ```

**Start Development Server**
   ```bash
   npm run dev
   ```

## Project notes

- The app is wrapped within an AuthProvider context given by the package `react-oidc-context` - in the [main.tsx](src/main.tsx) file.
- The contained [App](src/App.tsx) component references routes using the package `react-router-dom`.
- There are two routed pages:
  * Path `/`     [Landing page](src/app/pages/LandingPage.tsx) with a link to the Keycloak login page. If authenticated, redirects to `/home` using the <Navigate/> component
  * Path `/home` [Home page](src/app/pages/HomePage.tsx) a guarded route, showing user information from Keycloak.
- The home route is contained within a simple [guard component](src/features/auth/components/AuthRouteGuard.tsx) which wraps each route within a withAuthenticationRequired higher order component (detailed in the `react-oidc-context` package). To ensure authentication is required.
- Authentication information (ex. connected user info) and methods (login/logout) are contained within a [custom hook](src/features/auth/hooks/useAuthSession.ts) and referenced in multiple components.


## Full Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Auth Client**: [React Oidc Context](https://github.com/authts/react-oidc-context)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)

## AI Usage
No part of this repository may be used to train machine learning models or artificial intelligence without express written permission.
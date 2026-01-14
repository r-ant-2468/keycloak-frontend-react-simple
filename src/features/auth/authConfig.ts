// automaticSilentRenew: true to make sure access token is automatically refreshed
export const authProviderConfig = {
    authority: `${import.meta.env.VITE_KEYCLOAK_URL}realms/${import.meta.env.VITE_KEYCLOAK_REALM}`,
    client_id: import.meta.env.VITE_KEYCLOAK_CLIENT,
    automaticSilentRenew: true,
    redirect_uri: window.location.origin,
    onSigninCallback: () => {
        window.history.replaceState({}, document.title, window.location.pathname);
    },
};

export const signoutRedirectConfig = {
    post_logout_redirect_uri: window.location.origin
};
import { apiRequest } from "../../../shared";

/**
 * Connecte un utilisateur via son username ou email et son mot de passe
 * @param {string} username_or_email 
 * @param {string} password 
 * @returns {Promise<{ token: string, user: object }>}
 */
export async function login(username_or_email, password) {
    return await apiRequest('/auth/login', {
        method: 'POST',
        body: {
            username_or_email,
            password
        }
    });
}

/**
 * Enregistre un nouvel utilisateur
 * @param {string} username 
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<{ token: string, user: object }>}
 */
export async function register(username, email, password) {
    return await apiRequest('/auth/register', {
        method: 'POST',
        body: {
            username,
            email,
            password
        }
    });
}

/**
 * Récupère le profil et les succès de l'utilisateur connecté
 * @returns {Promise<object>}
 */
export async function getMe() {
    return await apiRequest('/auth/me', {
        method: 'GET'
    });
}
const API_BASE_URL = (import.meta.env.VITE_API_URL_BASE || 'http://localhost:8000')
    .replace(/\/+$/, '')
    .replace(/\/api$/, '') + '/api';

export function getAuthToken() {
    if (typeof localStorage !== 'undefined') {
        return localStorage.getItem('token') || null;
    }
    return null;
}

export function setAuthToken(token) {
    if (typeof localStorage !== 'undefined') {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }
}

export async function apiRequest(endpoint, options = {}) {
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    const url = `${API_BASE_URL}${cleanEndpoint}`;
    
    const headers = {
        'Content-Type': 'application/json',
        ...(options.headers || {})
    };

    const token = options.token !== undefined ? options.token : getAuthToken();
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const config = {
        ...options,
        headers
    };

    if (config.body && typeof config.body === 'object') {
        config.body = JSON.stringify(config.body);
    }

    const response = await fetch(url, config);

    if (response.status === 401) {
        setAuthToken(null);
    }

    if (!response.ok) {
        let errorMessage = `Erreur HTTP ${response.status}`;
        try {
            const errorData = await response.json();
            if (errorData?.message) {
                errorMessage = errorData.message;
            } else if (errorData?.error) {
                errorMessage = errorData.error;
            }
        } catch {
            // Corps de réponse non JSON
        }
        throw new Error(errorMessage);
    }

    if (response.status === 204) {
        return null;
    }

    return await response.json();
}

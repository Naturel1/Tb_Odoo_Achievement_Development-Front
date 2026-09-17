import { apiRequest } from "../../../shared";

/**
 * Récupère la liste de tous les succès approuvés
 * @returns {Promise<Array>}
 */
export async function getAllAchievement() {
    return await apiRequest('/achievements', {
        method: 'GET'
    });
}

/**
 * Récupère un succès par son identifiant
 * @param {string|number} id 
 * @returns {Promise<object>}
 */
export async function getOneAchievementById(id) {
    return await apiRequest(`/achievements/${id}`, {
        method: 'GET'
    });
}

/**
 * Récupère un succès aléatoire parmi les succès approuvés
 * @returns {Promise<object|null>}
 */
export async function getOneRandomAchievement() {
    try {
        const achievements = await getAllAchievement();
        if (!achievements || achievements.length === 0) {
            return null;
        }
        const randomIndex = Math.floor(Math.random() * achievements.length);
        return achievements[randomIndex];
    } catch {
        return null;
    }
}

/**
 * Récupère les succès obtenus par un utilisateur
 * @param {string|number} [userId] 
 * @returns {Promise<Array>}
 */
export async function getMyAchievements(userId) {
    try {
        const endpoint = userId ? `/profiles/${userId}` : '/auth/me';
        const profile = await apiRequest(endpoint, {
            method: 'GET'
        });

        if (profile && Array.isArray(profile.achievements)) {
            return profile.achievements.map(item => ({
                ...item,
                id: item.achievement_id || item.user_achievement_id
            }));
        }
        return [];
    } catch {
        return [];
    }
}

/**
 * Propose un nouveau succès (soumis à modération)
 * @param {string} title 
 * @param {string} description 
 * @returns {Promise<object>}
 */
export async function proposeAchievement(title, description) {
    return await apiRequest('/achievements/propose', {
        method: 'POST',
        body: { title, description }
    });
}

/**
 * Débloque un succès approuvé pour l'utilisateur connecté
 * @param {string|number} id 
 * @returns {Promise<object>}
 */
export async function obtainAchievement(id) {
    return await apiRequest(`/achievements/obtain/${id}`, {
        method: 'POST'
    });
}


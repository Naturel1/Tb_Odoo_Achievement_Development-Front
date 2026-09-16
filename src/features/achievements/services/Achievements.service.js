import { useAtom } from "jotai";
import { userAtom } from "../../auth";

const apiBase = import.meta.env.VITE_API_URL_BASE;

/* simulation area */
const data = {
    achivements: [
        {   
            id: 1,
            title: "Faire la pluie et le beau temp",
            description: "A donner sa météo du jour",
            imageSrc:"meteo.svg",
            pourcent: 95
        },
        {   
            id: 2,
            title: "Avoir le mot sur le bout de la langue",
            description: "Terminer un pédantix",
            imageSrc:"pedantix.svg",
            pourcent: 45.2
        },
        {   
            id: 3,
            title: "In Chartreuse, we trust!",
            description: "Placer au moins un élément en charteuse dans un projet",
            imageSrc:"chartreuse.svg",
            pourcent: 45.2
        },
        {   
            id: 4,
            title: "Cheque Point",
            description: "Recevoir un cheque",
            imageSrc:"cheque.svg",
            pourcent: 1
        },
    ],
    achievementsUsers: [
        {
            userId: 1,
            achievementIds : [
                1,3
            ]
        },
        {
            userId: 2,
            achievementIds : [
                1,2,3,4
            ]
        }
    ]
};

const achievementList = () => {
    return data.achivements.map(achievement => ({
        id: achievement.id,
        title: achievement.title,
        imageSrc: achievement.imageSrc
    }))
}

// permet de simuler le call api
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); 

async function getAllAchievementSimulated() {
    await delay(1000);
    return achievementList();
}

async function getOneAchievementByIdSimulated(id) {
    await delay(1000);

    const achivement = data.achivements.find(achievement => achievement.id == id);
    if (!achivement) {
        throw new Error(`Achievement id ${id} not found`);
    }
    return achivement;
}

async function getOneRandomAchievementSimulated() {
    const randomIndex = Math.floor(Math.random() * data.achivements.length);

    return getOneAchievementById(data.achivements[randomIndex].id);
}

export async function getMyAchievementsSimulated(userId) {
    await delay(1000);
    if (userId) {

        return achievementList().filter(achievement => 
            data.achievementsUsers.find(user => 
                user.userId == userId
            ).achievementIds.includes(achievement.id)
        )
    } else {
        return [];
    }

}
/* */

export async function getAllAchievement() {
    return await getAllAchievementSimulated();
}

export async function getOneAchievementById(id) {
    return await getOneAchievementByIdSimulated(id);
}

export async function getOneRandomAchievement() {
    return await getOneRandomAchievementSimulated();
}

export async function getMyAchievements(id) {
    return await getMyAchievementsSimulated(id);
}


const data = [
    {   
        id: 1,
        name: "Faire la pluie et le beau temp",
        description: "A donner sa météo du jour",
        // imageSrc:"meteo.svg",
        pourcent: 95
    },
    {   
        id: 2,
        name: "Avoir le mot sur le bout de la langue",
        description: "Terminer un pédantix",
        imageSrc:"pedantix.svg",
        pourcent: 45.2
    },
    {   
        id: 3,
        name: "In Chartreuse, we trust!",
        description: "Placer au moins un élément en charteuse dans un projet",
        imageSrc:"chartreuse.svg",
        pourcent: 45.2
    },
    {   
        id: 4,
        name: "Cheque Point",
        description: "Recevoir un cheque",
        imageSrc:"cheque.svg",
        pourcent: 1
    },
];

const dataList = () => {
    return data.map(achievement => ({
        id: achievement.id,
        name: achievement.name,
        imageSrc: achievement.imageSrc
    }))
}

export async function getAllAchievement() {
    await delay(1000);
    return dataList();
}

export async function getOneAchievementById(id) {
    await delay(1000);

    const achivement = data.find(achievement => achievement.id == id);
    if (!achivement) {
        throw new Error(`Achievement id ${id} not found`);
    }
    return achivement;
}

export async function getOneRandomAchievement() {
    const randomIndex = Math.floor(Math.random() * data.length);

    return getOneAchievementById(data[randomIndex].id);
}

// permet de simuler le call api
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); 

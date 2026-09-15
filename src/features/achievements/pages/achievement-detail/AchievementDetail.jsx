import { useParams } from "react-router-dom";
import { getOneAchievementById } from "../../services/Achievements.service";
import { Suspense, use } from "react";
import LoadingScreen from "../../../../shared/components/loading-screen/LoadingScreen";

export default function AchievementDetail() {
    const { id } = useParams();

    const achievementPromise = getOneAchievementById(id);

    return (
        <Suspense fallback={<LoadingScreen sentence="chargement du succés"/>}>
            <InnerAchievementDetail achievementPromise= {achievementPromise}/>
        </Suspense>
    )
}

function InnerAchievementDetail({achievementPromise}) {
    const achievement = use(achievementPromise);

    return (
        <>
            <h2>Détail du succés</h2>
            <p>{achievement.name}</p>
            <p>{achievement.description}</p>
            <img src={`./${achievement.imageSrc}`}/>
        </>
    )
}
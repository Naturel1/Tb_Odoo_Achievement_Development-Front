import { useParams } from "react-router-dom";
import { getOneAchievementById } from "../../services/Achievements.service";
import { Suspense, use } from "react";
import LoadingScreen from "../../../../shared/components/loading-screen/LoadingScreen";
import { ErrorBoundary } from "react-error-boundary";
import ResourceNotFound from "../../../../shared/components/resource-not-found/ResourceNotFound";
import questionIcon from "../../../../assets/question.svg";

export default function AchievementDetail() {
    const { id } = useParams();

    const achievementPromise = getOneAchievementById(id);

    return (
        <Suspense fallback={<LoadingScreen sentence="chargement du succés"/>}>
            <ErrorBoundary fallback={<ResourceNotFound sentence="Nous avons réussi à ne pas trouver ce succés avec brio..."/>}>
                <InnerAchievementDetail achievementPromise= {achievementPromise}/>
            </ErrorBoundary>
        </Suspense>
    )
}

function InnerAchievementDetail({achievementPromise}) {
    const achievement = use(achievementPromise);

    return (
        <>
            <h2>Détail du succés</h2>
            <h3>{achievement.title}</h3>
            {
                achievement.imageSrc ?
                <img src={`../${achievement.imageSrc}`} />:
                <img src={questionIcon}/>
            }
            <p>{achievement.description}</p>
            
        </>
    )
}
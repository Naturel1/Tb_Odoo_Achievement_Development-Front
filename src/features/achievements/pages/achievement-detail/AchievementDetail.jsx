import { useParams } from "react-router-dom";
import { Suspense, use } from "react";
import { ErrorBoundary } from "react-error-boundary";
import questionIcon from "../../../../assets/question.svg";
import { ResourceNotFound, LoadingScreen } from "../../../../shared";
import { getOneAchievementById } from "../../services/Achievements.service";
import AchievementCard from "../../components/AchievementCard/AchievementCard"

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
        <section>
            <h2>Détail du succés</h2>

            <div className="container">
                <AchievementCard achievement={achievement}/>
            </div>
        </section>
    )
}
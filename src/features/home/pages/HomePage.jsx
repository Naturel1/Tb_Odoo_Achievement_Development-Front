import { Suspense } from "react";
import AchievementCard from "../../achievements/components/AchievementCard/AchievementCard";
import { getOneRandomAchievement } from "../../achievements/services/Achievements.service";
import { use } from "react";
import LoadingScreen from "../../../shared/components/loading-screen/LoadingScreen";

export default function HomePage() {
    
    const achievementPromise = getOneRandomAchievement();

    return (
        <Suspense fallback={<LoadingScreen sentence="Succés en cours de réalisation. Veuillez patienter..."/>}>
            <InnerHomePage homePromise={achievementPromise}/>
        </Suspense>
    );
}

function InnerHomePage({homePromise}) {
    const achievement = use(homePromise)

    return (
        <section>
            <p>Rejoins les mousquedevs et réalises avec nous:</p>
            <div className="container">
                <AchievementCard achievement={achievement}/>
            </div>
        </section>
    );
}
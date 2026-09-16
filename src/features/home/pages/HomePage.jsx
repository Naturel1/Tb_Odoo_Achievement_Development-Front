import { Suspense, use } from "react";
import { LoadingScreen } from "../../../shared";
import { AchievementCard, getOneRandomAchievement } from "../../achievements";

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
import { Suspense, use } from "react";
import { getAllAchievement } from "../../services/Achievements.service";
import { NavLink } from "react-router-dom";
import LoadingScreen from "../../../../shared/components/loading-screen/LoadingScreen";

export default function AchievementList () {
    const achievementListPromise = getAllAchievement();

    return (
        <Suspense fallback={<LoadingScreen sentence="Chargement des succés..."/>}>
            <InnerAchievementList achievementListPromise={achievementListPromise}/>
        </Suspense>
    );
}
function InnerAchievementList({achievementListPromise}) {
    const achievementList = use(achievementListPromise);

    return (
        <>
            <h2>Liste des succés</h2>
            <ul>
                {
                    achievementList ?
                    achievementList.map(achievement => 
                        <li key={achievement.id}>
                            <NavLink to={`/achievement/${achievement.id}`}>
                                <p>{achievement.name}</p>
                            </NavLink>
                        </li>
                    ):
                    <p>La liste des succés est vide.</p>
                }
            </ul>
        </>
    )
}
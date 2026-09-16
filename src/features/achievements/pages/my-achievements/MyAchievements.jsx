import { Suspense, use, useEffect } from "react";
import { getMyAchievements } from "../../services/Achievements.service";
import { NavLink } from "react-router-dom";
import { LoadingScreen } from "../../../../shared";
import { userAtom } from "../../../auth";
import { useAtom } from "jotai";

export default function MyAchievement () {
    const [userConnected] = useAtom(userAtom);

    const achievementListPromise = getMyAchievements(userConnected.id);

    return (
        <Suspense fallback={<LoadingScreen sentence="Chargement de vos succés..."/>}>
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
                                <p>{achievement.title}</p>
                            </NavLink>
                        </li>
                    ):
                    <p>La liste des succés est vide.</p>
                }
            </ul>
        </>
    )
}
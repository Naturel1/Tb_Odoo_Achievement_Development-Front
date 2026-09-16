import { Route } from "react-router-dom";
import AchievementList from "./pages/achievement-list/AchievementList";
import AchievementDetail from "./pages/achievement-detail/AchievementDetail";
import MyAchievement from "./pages/my-achievements/MyAchievements";
import { RequireAuth } from "../auth";

export const achievementRoutes = (
    <Route path="/achievement">
        <Route path="" index element={<AchievementList/>}/>
        <Route path="my-achievements" element={
            <RequireAuth>
                <MyAchievement/>
            </RequireAuth>
        }/>
        <Route path=":id" element={<AchievementDetail/>}/>
    </Route>
)
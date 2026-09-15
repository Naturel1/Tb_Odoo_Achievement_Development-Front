import { Route } from "react-router-dom";
import AchievementList from "./pages/achievement-list/AchievementList";
import AchievementDetail from "./pages/achievement-detail/AchievementDetail";

export const AchievementRoutes = (
    <Route path="/achievement">
        <Route path="" index element={<AchievementList/>}/>
        <Route path=":id" element={<AchievementDetail/>}/>
    </Route>
)
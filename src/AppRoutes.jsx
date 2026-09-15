import { Route, Routes } from "react-router-dom";
import HomePage from "./features/home/pages/HomePage";
import { AchievementRoutes } from "./features/achievements/AchievementRoutes";
export default function AppRoutes() {
    return(
        <Routes>
            <Route path="" element={<HomePage/>}/>
            {AchievementRoutes}
        </Routes>
    );
}
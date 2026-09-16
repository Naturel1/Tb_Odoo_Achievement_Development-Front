import { Route, Routes } from "react-router-dom";
import { HomePage } from "./features/home";
import { achievementRoutes } from "./features/achievements";
import { authRoutes } from "./features/auth";

export default function AppRoutes() {
    return(
        <Routes>
            <Route path="" element={<HomePage/>}/>
            {authRoutes}
            {achievementRoutes}
        </Routes>
    );
}
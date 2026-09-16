import { Route, Routes } from "react-router-dom";
import { HomePage } from "./features/home";
import { achievementRoutes } from "./features/achievements";

export default function AppRoutes() {
    return(
        <Routes>
            <Route path="" element={<HomePage/>}/>
            {achievementRoutes}
        </Routes>
    );
}
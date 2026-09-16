import { Route } from "react-router-dom";
import HomePage from "../home/pages/HomePage";
import LoginPage from "./pages/LoginPage";

export const authRoutes = (
    <>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<HomePage/>}/>
    </>
);
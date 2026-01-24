import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Landing/Landing";
import FrontendPortfolio from "../pages/Frontend/FrontendPortfolio";


export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/frontend" element={<FrontendPortfolio />} />
        </Routes>
    );
}

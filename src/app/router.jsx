import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Landing/Landing";
import FrontendPortfolio from "../pages/Frontend/FrontendPortfolio";
import MobilePortfolio from "../pages/Mobile/MobilePortfolio";


export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/frontend" element={<FrontendPortfolio />} />
            <Route path="/mobile" element={<MobilePortfolio />} />
        </Routes>
    );
}

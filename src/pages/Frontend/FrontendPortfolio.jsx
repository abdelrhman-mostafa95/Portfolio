import { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import PortfolioHero from "../../components/PortfolioHero";

export default function FrontendPortfolio() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <Navbar onMenuOpen={() => setMenuOpen(true)} />
            <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

            <PortfolioHero
                title="Abdel-Rahman Mostafa"
                subtitle="I build modern, high-quality frontend applications focused on performance, clean architecture, and great user experience."
                cta1="View Projects"
                cta2="Contact Me"
            />
        </>
    );
}

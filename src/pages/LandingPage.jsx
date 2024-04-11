import HeroHeader from "../components/HeroHeader";
import Navbar from "../components/navbar/Navbar";
import NewestBook from "../components/newest/NewestBook";

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <HeroHeader />
            <NewestBook />
        </>
    )
}
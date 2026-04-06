import "./Home.css";
import Hero from "./components/Hero";
import Banner from "../../components/common/Banner/Banner";
import MiniCta from "./components/MiniCta";
import FeatureCards from "./components/FeatureCards";

function Home () {
    return(
        <div className="home-page">
            <Hero />
            <Banner />
            <MiniCta />
            <FeatureCards />
        </div>
    );
}

export default Home;
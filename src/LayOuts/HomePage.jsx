import { useEffect } from "react";
import Banner from "../Components/Banner";
import HomeAbout from "../Components/HomeAbout";
import JoinNow from "../Components/JoinNow";
import Success from "../Components/Success";
import UserComment from "../Components/UserComment";


const HomePage = () => {
    useEffect(() => {
        document.title = "Lingo Bingo || Learn Language"
    }, [])



    return (
        <div>

            <Banner></Banner>


            <HomeAbout></HomeAbout>


            <Success></Success>


            <UserComment></UserComment>


            <JoinNow></JoinNow>

        </div>
    );
};

export default HomePage;
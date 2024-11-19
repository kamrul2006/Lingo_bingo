/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";


const HomeAbout = () => {
    return (
        <div className="mx-4 md:mx-0 md:px-8 px-0 md:py-5 my-5 md:my-8 bg-teal-50 text-lg font-semibold">
            <h1 className="text-center font-bold text-2xl">Mission of <span className="font-serif text-3xl">"Lingo <span className="text-blue-500">Bingo.</span>"</span></h1>


            <p className="text-center py-2">
                At <span className="font-serif text-[27px] font-bold">Lingo <span className="text-blue-500">Bingo</span></span>, {"we're"} passionate about making language learning accessible and enjoyable for everyone. Our mission is to provide a comprehensive platform where learners can effortlessly expand their vocabulary and master a new language.
            </p>

            <p className="text-3xl font-mono text-center  font-bold">
                How It Works
            </p>
            <p className="text-center py-2">
                Our innovative approach combines the power of technology with proven language learning techniques. {"Here's"} how it works:
            </p>
            <br />
            <p className="text-[22px] font-serif italic">Discovering New Words,  Learn Through Interactive Exercises:  ,Practice in Context, Track Your Progress</p>

            <Link to={'/aboutUs'} className="btn btn-sm btn-neutral mx-auto my-5 ">Read Full Document</Link>

        </div>
    );
};

export default HomeAbout;
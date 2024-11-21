/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";


const HomeAbout = () => {
    return (
        <div className="mx-4 md:mx-0 md:px-20 px-5 md:py-5 my-5 md:my-8 bg-teal-50 text-lg font-semibold">
            <h1 className="text-center font-bold text-3xl md:text-4xl animate__animated animate__heartBeat">Mission of <span className="font-serif text-3xl">"Lingo <span className="text-blue-500">Bingo.</span>"</span></h1>

            <div className="bg-yellow-200 rounded-lg shadow-lg pb-3 my-5">
                <p className="text-center py-2 md:px-20 md:py-5">
                    At <span className="font-serif text-xl font-bold">Lingo <span className="text-blue-500">Bingo</span></span>, {"we're"} passionate about making language learning accessible and enjoyable for everyone. Our mission is to provide a comprehensive platform where learners can effortlessly expand their vocabulary and master a new language.
                </p>

                <p className="text-2xl font-mono text-center py-3 bg-white font-bold">
                    How It Works
                </p>
                <p className="text-center py-2">
                    Our innovative approach combines the power of technology with proven language learning techniques. {"Here's"} how it works:
                </p>
                <br />
                <p className="text-[22px] text-center mb-3 text-amber-800 font-serif italic">Discovering New Words,  Learn Through Interactive Exercises:  ,Practice in Context, Track Your Progress</p>

                <Link to={'/aboutUs'}><p className="bg-sky-400 w-fit px-4 py-1 rounded-full hover:font-bold text-center mx-auto my-5 ">Read Full Document</p></Link>
            </div>


        </div>
    );
};

export default HomeAbout;
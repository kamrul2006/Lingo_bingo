/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";


const JoinNow = () => {
    return (
        <div className="bg-yellow-400 text-center">
            <h1 className="md:text-4xl text-2xl text-center text-white font-bold pt-2 md:pb-6 md:pt-10">🌟Join <span className="font-serif text-3xl md:text-5xl text-black">"Lingo <span className="text-blue-500">Bingo.</span>"</span> Now🌟
            </h1>

            <p className="font-semibold text-lg md:text-xl py-3 md:px-52 px-5">
                Connect with language enthusiasts around the world! Share tips, practice together, and explore new ways to master your vocabulary.
            </p>

            <div className="md:flex  items-center justify-center gap-4 py-4 ">
                <Link to="/signup" >
                    <p className="px-8 py-3 bg-white text-yellow-500 rounded-lg shadow-md font-semibold hover:bg-gray-200 text-lg" >
                        Sign Up Now
                    </p></Link>

                <Link to='/lesson'>
                    <p className="px-8 py-3 bg-indigo-700 border border-white rounded-lg shadow-md font-semibold hover:bg-indigo-800  text-white text-lg">
                        Explore Community
                    </p>
                </Link>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 pb-4 md:pb-10 mx-4 md:mx-40">
                <div className="flex flex-col items-center">
                    <div className="text-4xl mb-2">👩‍🏫</div>
                    <h3 className="text-xl font-bold">Learn Together</h3>
                    <p>Practice with peers and mentors in live sessions.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-4xl mb-2">🌐</div>
                    <h3 className="text-xl font-bold">Global Network</h3>
                    <p>Connect with language learners from across the globe.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-4xl mb-2">🎓</div>
                    <h3 className="text-xl font-bold">Exclusive Content</h3>
                    <p>Access premium vocabulary lessons and quizzes.</p>
                </div>
            </div>

        </div>
    );
};

export default JoinNow;
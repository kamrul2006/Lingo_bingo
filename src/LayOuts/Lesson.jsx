/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import lesson from '../assets/lesson.png'
import { useEffect } from "react";
import les from '../assets/les.png'

const Lesson = () => {
    useEffect(() => {
        document.title = "Lingo Bingo || Let's learn"
    }, [])


    const Dadas = [
        { "lesson_no": 1 }, { "lesson_no": 2 }, { "lesson_no": 3 }, { "lesson_no": 4 }, { "lesson_no": 5 }, { "lesson_no": 6 }, { "lesson_no": 7 }, { "lesson_no": 8 }, { "lesson_no": 9 }, { "lesson_no": 10 }
    ]
    // console.log(data)


    return (
        <div>
            <div>
                <p className="my-4 md:my-8 text-center text-2xl md:text-5xl font-bold font-serif">Here are the Lessons for you !</p>
                <p className="my-4 md:px-20 text-center text-xl md:text-2xl font-semibold text-gray-500">Complete all Lessons on time , and stay confident. You can do it. HAPPY LEARNING👍.Thanks for being with <span className="text-2xl text-black font-serif">"Lingo <span className="text-blue-500">Bingo.</span>"</span></p>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-7  md:mx-20 my-5">

                <div className="grid md:grid-cols-2  gap-3 md:col-span-5">
                    <div className="md:col-span-5 grid md:grid-cols-2 gap-3 bg-fuchsia-300 px-4 py-3">
                        {Dadas.map((data, i) => <div key={i}>
                            <Link to={`/lesson/${data.lesson_no}`}>
                                <div className="text-center p-4 border-2 rounded-lg bg-white shadow-md">
                                    <img src={lesson} alt="Lesson" className="w-60 mx-auto" />
                                    <p className="text-7xl font-serif font-bold text-red-500">{data.lesson_no}</p>
                                </div>
                            </Link>
                        </div>)}
                    </div>


                    <div className="md:col-span-5 my-4 py-2 md:py-8 px-4 bg-emerald-200">
                        <h1 className="text-3xl font-bold bg-white py-1 text-center">  Tutorials for you</h1>

                        <div className="md:flex items-center gap-3 my-4">
                            <div>
                                <iframe
                                    src="https://www.youtube.com/embed/Zv55AD9yZKc?si=m4MK-w46WmJXvH6Z"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                    className="mx-auto rounded-lg shadow-lg md:w-[400px] w-3/4 h-60">
                                </iframe>
                            </div>

                            <div>
                                <iframe
                                    src="https://www.youtube.com/embed/XunD5fk8wr4?si=gzVFjaO4QFu9nX-l"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                    className="mx-auto rounded-lg shadow-lg md:w-[400px] w-3/4 h-60">
                                </iframe>
                            </div>
                        </div>

                        <Link to={'/tutorials'}>
                            <p className=" w-1/2 text-lg font-semibold hover:font-bold py-2 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-center mx-auto items-center">Watch All Tutorials</p>
                        </Link>
                    </div>
                </div>

                <div className="hidden md:block sticky top-0 col-span-2">
                    <img src={les} className="mx-auto sticky top-16 w-3/4" />
                </div>
            </div>
        </div>
    );
};

export default Lesson;
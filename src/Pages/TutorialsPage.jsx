/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import Tut from '../assets/Tut.png';
import { Link } from "react-router-dom";

const TutorialsPage = () => {
    useEffect(() => {
        document.title = "Lingo Bingo || Tutorials"
    }, [])



    return (
        <div>

            <div>
                <p className="my-4 md:my-8 text-center text-2xl md:text-5xl font-bold font-serif">Here are the Tutorials for you !</p>
                <p className="my-4 md:px-20 text-center text-xl md:text-2xl font-semibold text-gray-500">Complete all video on time , and stay confident. You can do it. HAPPY LEARNING👍.Thanks for being with <span className="text-2xl text-black font-serif">"Lingo <span className="text-blue-500">Bingo.</span>"</span></p>
            </div>


            <div className="grid lg:grid-cols-7 mx-4 md:mx-10 my-2 md:my-8 font-serif">
                <div className="hidden col-span-2 lg:block">
                    <img src={Tut} alt="*" className="w-3/4 sticky top-5 mx-auto" />
                </div>

                <div className="grid col-span-5 lg:grid-cols-2 bg-slate-300 p-4 rounded-xl">
                    <div>
                        <h1 className="text-center py-2 text-3xl font-bold">Tutorial 1</h1>
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
                        <h1 className="text-center py-2 text-3xl font-bold">Tutorial 2</h1>
                        <iframe
                            src="https://www.youtube.com/embed/XunD5fk8wr4?si=gzVFjaO4QFu9nX-l"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                            className="mx-auto rounded-lg shadow-lg md:w-[400px] w-3/4 h-60">                </iframe>
                    </div>

                    <div>
                        <h1 className="text-center pt-7 text-3xl font-bold">Tutorial 3</h1>
                        <iframe src="https://www.youtube.com/embed/ssreN98nBDo?si=GST92ds-BCe46VM5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen
                            className="mx-auto rounded-lg shadow-lg md:w-[400px] w-3/4 h-60"></iframe>
                    </div>

                    <div>
                        <h1 className="text-center pt-7 text-3xl font-bold">Tutorial 4</h1>
                        <iframe src="https://www.youtube.com/embed/xLmzu6g7wtE?si=9wSGGx-ElpWYY5-a" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen className="mx-auto rounded-lg shadow-lg md:w-[400px] w-3/4 h-60"></iframe>
                    </div>

                    <div>
                        <h1 className="text-center pt-7 text-3xl font-bold">Tutorial 5</h1>
                        <iframe src="https://www.youtube.com/embed/LcFlvXYCGUc?si=0FvYIkQCppAM4zsV&amp;start=2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen className="mx-auto rounded-lg shadow-lg md:w-[400px] w-3/4 h-60"></iframe>
                    </div>

                    <div>
                        <h1 className="text-center pt-7 text-3xl font-bold">Tutorial 6</h1>
                        <iframe
                            src="https://www.youtube.com/embed/98onoU5eXFY?si=bQHPy-FUBeX5Yvsi&amp;start=2"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                            className="mx-auto rounded-lg shadow-lg md:w-[400px] w-3/4 h-60">                </iframe>
                    </div>

                    <div>
                        <h1 className="text-center pt-7 text-3xl font-bold">Tutorial 7</h1>
                        <iframe
                            src="https://www.youtube.com/embed/nJyhtIH94pk?si=47pnph5un7X_huLZ&amp;start=2"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                            className="mx-auto rounded-lg shadow-lg md:w-[400px] w-3/4 h-60"></iframe>
                    </div>

                    <div>
                        <h1 className="text-center pt-7 text-3xl font-bold">Tutorial 8</h1>
                        <iframe
                            src="https://www.youtube.com/embed/XunD5fk8wr4?si=gzVFjaO4QFu9nX-l"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                            className="mx-auto rounded-lg shadow-lg md:w-[400px] w-3/4 h-60">                </iframe>
                    </div>

                    <div>
                        <h1 className="text-center pt-7 text-3xl font-bold">Tutorial 9</h1>
                        <iframe src="https://www.youtube.com/embed/ssreN98nBDo?si=GST92ds-BCe46VM5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen
                            className="mx-auto rounded-lg shadow-lg md:w-[400px] w-3/4 h-60"></iframe>
                    </div>

                    <div>
                        <h1 className="text-center pt-7 text-3xl font-bold">Tutorial 10</h1>
                        <iframe src="https://www.youtube.com/embed/xLmzu6g7wtE?si=9wSGGx-ElpWYY5-a" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen className="mx-auto rounded-lg shadow-lg md:w-[400px] w-3/4 h-60"></iframe>
                    </div>

                    <div>
                        <h1 className="text-center pt-7 text-3xl font-bold">Tutorial 11</h1>
                        <iframe src="https://www.youtube.com/embed/LcFlvXYCGUc?si=0FvYIkQCppAM4zsV&amp;start=2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen className="mx-auto rounded-lg shadow-lg md:w-[400px] w-3/4 h-60"></iframe>
                    </div>

                    <div className=" text-center flex flex-col items-center justify-center text-xl my-5 md:my-0">
                        <Link to={"/lesson"}>
                            <p className=" bg-sky-600 hover:bg-sky-500 py-2 px-5 text-white rounded-lg">Learn Vocabularies</p>

                            <p className="py-2 px-5">Wants to learn some Vocabularies ? Click on the button now!</p>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TutorialsPage;
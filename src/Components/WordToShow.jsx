import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { HiSpeakerWave } from "react-icons/hi2";


const WordToShow = () => {
    const lessonNo = useParams()

    const { WordBoLa } = useContext(AuthContext)

    useEffect(() => {
        document.title = `Lingo Bingo || Lesson ${lessonNo.lesson_no}`
    }, [])

    const Data = useLoaderData();
    const [Word, setWord] = useState([])
    const [mWord, setMWord] = useState({})

    useEffect(() => {
        setWord(Data)
    }, [])

    useEffect(() => {
        const Hindi = Data.filter((word) => word.lesson_no == lessonNo.lesson_no)
        setWord(Hindi)
        // console.log(Hindi)
    }, [])

    const HandleModal = (word) => {
        document.getElementById('my_modal_5').showModal()
        setMWord(word)
    }

    // console.log(Word)

    return (
        <div>

            {/* --------------------------title--------------------------- */}

            <div className="my-2 md:my-10 text-center">
                <h1 className="text-xl text-yellow-600">Here you Go:</h1>
                <h1 className="md:text-6xl text-3xl font-serif text-sky-600">Your Lesson {lessonNo.lesson_no} Started.</h1>
                <p className="font-semibold font-sans py-2 bg-slate-50 my-1"><span className="text-green-500"> Easy word </span> -- <span className="text-orange-500">Medium word</span> -- <span className="text-red-500">Difficult word</span></p>
            </div>

            {/* ----------------------------all words---------------------------- */}

            <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-3 mx-4 my-2 md:my-10 md:mx-20 text-center">

                {/* ---------------------image part-------------------------- */}

                <div className="col-span-1">
                    <img src="https://i.gifer.com/ZP2h.gif" className="sticky top-10 hidden md:block" />
                </div>

                {/* -----------------------------Word part------------------------- */}

                <div className="md:col-span-2 lg:col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {Word.map((wor, i) => <div key={i} className=" border-2 pb-2 rounded-lg"> <div
                        onClick={() => HandleModal(wor)}
                        className="my-2 px-3 py-2 rounded-lg">
                        <div className={`${wor.difficulty == "easy" && "bg-green-200 hover:bg-green-300 text-green-700"}
                     ${wor.difficulty == "difficult" && "bg-red-200 hover:bg-red-300  text-red-700"}  
                     ${wor.difficulty == "medium" && "bg-orange-200 hover:bg-orange-300  text-orange-700"} md:pt-5 pt-2 lg:pt-10 text-3xl italic rounded-xl`}>
                            <p className="font-extrabold lg:text-4xl"> {wor.word}</p>

                            <p className="text-xl font-sans py-3">Meaning: {wor.meaning}</p>
                            <p className="text-xl font-sans bg-white py-2">Pronunciation: <br /> {wor.pronunciation}</p>
                            <p className="text-lg text-black font-sans py-3">Part of speech
                                : {wor.part_of_speech
                                }</p>

                        </div>
                    </div>

                        <button onClick={() => WordBoLa(wor.word)} className="btn btn-sm btn-neutral"><HiSpeakerWave /> Word</button>
                    </div>)}

                </div>


                {/* ---------------------------------- Modal-------------------------------- */}

                <dialog id="my_modal_5" className="modal modal-middle">
                    <div className="modal-box bg-sky-400 p-4">
                        <div className="bg-white px-3 py-2 md:py-4">
                            <p className="font-extrabold text-3xl lg:text-5xl"> {mWord.word}</p>

                            <p className="text-xl font-sans text-left">Meaning: <span className="text-lg font-serif font-semibold text-blue-500">{mWord.meaning}</span></p>
                            <p className="text-xl font-sans text-left">Pronunciation: <span className="text-lg font-serif font-semibold text-red-500">{mWord.pronunciation}</span></p>
                            <p className="text-xl font-sans text-center py-1 my-2 bg-green-50">When to say: <br />
                                <span className="text-lg font-serif font-semibold text-green-500">{mWord.when_to_say}</span></p>
                            <p className="text-xl font-sans text-center py-3 bg-slate-300 my-2">Example: <br /> <span className="text-lg font-serif font-semibold text-orange-500">{mWord.example}</span></p>

                            <div className="flex items-center justify-center gap-2">
                                <button onClick={() => WordBoLa(mWord.word)} className="btn btn-sm"><HiSpeakerWave /> Word</button>
                                <button onClick={() => WordBoLa(mWord.example)} className="btn btn-sm"><HiSpeakerWave /> Example</button>
                            </div>

                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn btn-warning btn-sm text-sm ">Close</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </dialog>
            </div>

            <div className="mx-auto">
                <Link to={'/lesson'}> <p className="py-2 my-4 text-white bg-slate-700 hover:bg-slate-800 rounded-xl w-1/4 mx-auto text-center">Go Back Lesson</p></Link>
            </div>


        </div>
    );
};

export default WordToShow;
import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";


const WordToShow = () => {

    const lessonNo = useParams()
    const Data = useLoaderData();
    const [Word, setWord] = useState([])
    const [mWord, setMWord] = useState({})

    useEffect(() => {
        setWord(Data)
    }, [])

    useEffect(() => {
        const Hindi = Data.filter((word) => word.lesson_no == lessonNo.lesson_no)
        setWord(Hindi)
        console.log(Hindi)
    }, [])

    const HanldleModal = (word) => {
        document.getElementById('my_modal_5').showModal()
        setMWord(word)
    }

    // console.log(Word)

    return (
        <div>

            <div className="my-2 md:my-10 text-center">
                <h1 className="text-xl text-yellow-600">Here you Go:</h1>
                <h1 className="text-6xl font-serif text-sky-600">Your Lesson {lessonNo.lesson_no} Started.</h1>
            </div>

            <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-3 mx-4 my-2 md:my-10 md:mx-20 text-center">
                <div className="col-span-1">
                    <img src="https://i.gifer.com/ZP2h.gif" className="sticky top-10 hidden md:block" />
                </div>

                <div className="md:col-span-2 lg:col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {Word.map((wor, i) => <div key={i}
                        onClick={() => HanldleModal(wor)}
                        className="my-2 px-3 py-2 border-2 rounded-lg">
                        <div className={`${wor.difficulty == "easy" && "bg-green-200 text-green-700"}
                     ${wor.difficulty == "difficult" && "bg-red-200 text-red-700"}  
                     ${wor.difficulty == "medium" && "bg-orange-200 text-orange-700"} md:pt-5 pt-2 lg:pt-10 text-3xl italic rounded-xl`}>
                            <p className="font-extrabold lg:text-4xl"> {wor.word}</p>

                            <p className="text-xl font-sans py-3">Meaning: {wor.meaning}</p>
                            <p className="text-xl font-sans bg-white py-2">Pronunciation: <br /> {wor.pronunciation}</p>
                            <p className="text-lg text-black font-sans py-3">Part of speech
                                : {wor.part_of_speech
                                }</p>
                        </div>
                    </div>)}
                </div>


                {/* ---------------------------------- Modal-------------------------------- */}

                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <p className="font-extrabold lg:text-4xl"> {mWord.word}</p>

                        <p className="text-xl font-sans text-left">Meaning: {mWord.meaning}</p>
                        <p className="text-xl font-sans text-left">Pronunciation: {mWord.pronunciation}</p>
                        <p className="text-xl font-sans text-left">When to say: {mWord.when_to_say}</p>
                        <p className="text-xl font-sans text-left">example: {mWord.example}</p>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
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
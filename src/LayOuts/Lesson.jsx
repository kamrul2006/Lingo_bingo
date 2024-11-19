import { Link } from "react-router-dom";
import lesson from '../assets/lesson.png'

const Lesson = () => {
    const Dadas = [{ "lesson_no": 1 }, { "lesson_no": 2 }, { "lesson_no": 3 }, { "lesson_no": 4 }, { "lesson_no": 5 }, { "lesson_no": 6 }, { "lesson_no": 7 }, { "lesson_no": 8 }, { "lesson_no": 9 }, { "lesson_no": 10 }]
    // console.log(data)


    const wordElements = [];
    for (let i = 0; i < Dadas.length; i++) {
        wordElements.push(
            <div key={Dadas[i].id}>
                <Link to={`/lesson/${Dadas[i].lesson_no}`}>
                    <div className="text-center p-4 border-2">
                        <img src={lesson} alt="Lesson" className="w-60 mx-auto" />
                        <p className="text-7xl font-serif font-bold text-red-500">{Dadas[i].lesson_no}</p>
                    </div>
                </Link>
            </div>
        );
    };


    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:mx-20 my-5">
            {Dadas.map((data, i) => <div key={i}>
                <Link to={`/lesson/${data.lesson_no}`}>
                    <div className="text-center p-4 border-2">
                        <img src={lesson} alt="Lesson" className="w-60 mx-auto" />
                        <p className="text-7xl font-serif font-bold text-red-500">{data.lesson_no}</p>
                    </div>
                </Link>
            </div>)}

            {/* {wordElements} */}

        </div>
    );
};

export default Lesson;
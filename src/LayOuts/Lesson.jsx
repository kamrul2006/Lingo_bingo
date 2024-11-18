import { Link, useLoaderData } from "react-router-dom";
import lesson from '../assets/lesson.png'

const Lesson = () => {
    const datas = useLoaderData()
    // console.log(data)
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:mx-20 my-5">
            {datas.map(data => <div key={data.category_id}>
                <Link to={`/lesson/${data.lesson_no}`}>
                    <div className="text-center p-4 border-2">
                        <img src={lesson} alt="Lesson" className="w-60 mx-auto" />
                        <p className="text-7xl font-serif font-bold text-red-500">     {data.lesson_no}</p>
                    </div>
                </Link>

            </div>)}
        </div>
    );
};

export default Lesson;
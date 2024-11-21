/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";


const UserComment = () => {


    const [Comments, setComments] = useState([])
    useEffect(() => {
        fetch('/Comment.json')
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])

    return (
        <div className="py-5 md:py-10 bg-emerald-200">
            <h1 className="text-center font-bold text-2xl animate__animated animate__pulse animate__slow animate__delay-2s">Whats people say About <span className="font-serif text-3xl">"Lingo <span className="text-blue-500">Bingo.</span>"</span></h1>

            <div className="grid md:grid-cols-3 gap-5 mt-4 md:mt-8 md:mx-10 mx-3">
                {Comments.map(comment => <div key={comment.id}
                    className="bg-white h-fit rounded-ss-3xl rounded-br-3xl shadow-lg py-2 flex flex-col items-center justify-center">

                    <div className="w-16 h-16">
                        <img src={comment.image} alt="*" className="object-cover h-full w-full rounded-full border-2 border-yellow-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{comment.name}</h3>

                    <p className="text-yellow-500 text-sm mb-4">
                        {"★".repeat(comment.rating) + "☆".repeat(5 - comment.rating)}
                    </p>
                    <p className="text-gray-600 text-center px-5">{comment.text}</p>
                </div>)}

            </div>

        </div>
    );
};

export default UserComment;
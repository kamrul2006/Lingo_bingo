
const Error = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-sky-300">

            <div className="bg-white text-sky-500 rounded-2xl text-center py-5 px-8">
                <img src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png" className="w-96 mx-auto" />
                <p className="text-lg px-20 py-5 font-sans font-semibold">Oops! It looks like the page you are looking for, <br /> not available at the moment.!</p>
                <a href="/"><button className="bg-sky-500 hover:font-serif text-white px-5 py-2 rounded-full font-bold m">Go back to home</button></a>

            </div>


        </div>
    );
};

export default Error;
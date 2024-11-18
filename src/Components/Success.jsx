import CountUp from 'react-countup';

const Success = () => {
    return (
        <div className='bg-lime-100 py-7 my-5'>
            <p className='text-3xl my-5 text-center font-bold'>What <span className=" font-serif">Lingo</span> <span className="text-blue-500 font-serif">Bingo</span> Got for you ?</p>

            <div className="flex flex-col md:flex-row py-4 items-center justify-center rounded-2xl gap-10 my-5 md:my-10 mx-7 md:mx-20 bg-slate-50  shadow">

                <div className="text-center bg-slate-200 rounded-xl p-5">
                    <div className=" text-xl font-serif font-bold">Our Users</div>
                    <div className="my-3 text-4xl font-bold font-serif">
                        <p>
                            <CountUp delay={1} duration={5} end={100} />
                        </p>
                    </div>
                    <div className="stat-desc">From January 1st to Now.</div>
                </div>

                <div className="text-center bg-green-200 rounded-xl p-5">
                    <div className=" text-xl font-serif font-bold">Lessons</div>
                    <div className="my-3 text-4xl font-bold font-serif text-secondary">
                        <p>
                            <CountUp delay={1} duration={5} end={10} /> +
                        </p>
                    </div>
                    <div className="stat-desc text-secondary">We have 10+ lesson for you.</div>
                </div>

                <div className="text-center bg-sky-200 rounded-xl p-5">
                    <div className=" text-xl font-serif font-bold">Vocabulary</div>
                    <div className="my-3 text-4xl font-bold font-serif">
                        <p>
                            <CountUp delay={1} duration={5} end={1240} /> +
                        </p>
                    </div>
                    <div className="stat-desc">We got a rich amount of Vocabulary</div>
                </div>

                <div className="text-center bg-yellow-200 rounded-xl p-5">
                    <div className=" text-xl font-serif font-bold">Tutorials</div>
                    <div className="my-3 text-4xl font-bold font-serif text-primary">
                        <p>
                            <CountUp delay={2} duration={5} end={200} /> +
                        </p>
                    </div>
                    <div className="stat-desc text-primary">There are 200 + tutorials for you.</div>
                </div>
            </div>

        </div>
    );
};

export default Success;
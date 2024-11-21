import { useEffect } from 'react';
import about from '../assets/About.png'

const AboutUs = () => {
    useEffect(() => {
        document.title = "Lingo Bingo || About us"
    }, [])

    return (
        <div className="md:flex items-center text-center gap-3 mx-2 my-5 md:my-8 lg:my-14 md:mx-10 lg:mx-14">
            <div className='hidden md:block'>
                <img src={about} className="w-60" />
            </div>
            <div className='px-4 md:mx-10'>
                <p className='text-3xl  font-bold animate__animated animate__slow animate__shakeY animate__infinite text-red-500'>About Us:</p>

                <div className='my-5 rounded-2xl shadow-lg bg-slate-50 py-3 px-10 text-left'>
                    <p className='py-4 text-2xl font-semibold'>Our Mission</p>

                    <p>At Lingo Bingo, {"we're"} passionate about making language learning accessible and enjoyable for everyone. Our mission is to provide a comprehensive platform where learners can effortlessly expand their vocabulary and master a new language.</p>

                    <p className='py-4 text-2xl font-semibold'>How It Works</p>

                    <p> Our innovative approach combines the power of technology with proven language learning techniques. {"Here's"} how it works:</p >

                    <p > Discover New Words: Immerse yourself in a vast collection of carefully curated vocabulary lists, categorized by topic and difficulty level.</p >

                    <p > Learn Through Interactive Exercises: Strengthen your understanding with a variety of engaging exercises, including flashcards, quizzes, and word games.</p >

                    <p > Practice in Context: Apply your new vocabulary in real - life scenarios through contextualized examples and practice sentences.</p >

                    <p > Track Your Progress: Monitor your learning journey with detailed progress reports and personalized recommendations.</p >

                    <p className='font-bold my-4 text-violet-500'> Whether {"you're"} a beginner or an advanced learner, Lingo Bingo offers a tailored experience to help you achieve your language goals.Join our community of language enthusiasts and embark on a rewarding linguistic adventure today!</p >

                </div>
            </div >
        </div >
    );
};

export default AboutUs;
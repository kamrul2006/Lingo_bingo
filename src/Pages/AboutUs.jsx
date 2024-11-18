import about from '../assets/About.png'

const AboutUs = () => {
    return (
        <div className="md:flex gap-3 mx-2 my-5 md:my-8 lg:my-14 md:mx-10 lg:mx-14">
            <div className='hidden md:block'>
                <img src={about} alt="" />
            </div>
            <div>
                About Us

                Our Mission

                At [Your Website Name], {"we're"} passionate about making language learning accessible and enjoyable for everyone. Our mission is to provide a comprehensive platform where learners can effortlessly expand their vocabulary and master a new language.

                How It Works

                Our innovative approach combines the power of technology with proven language learning techniques. {"Here's"} how it works:

                Discover New Words: Immerse yourself in a vast collection of carefully curated vocabulary lists, categorized by topic and difficulty level.

                Learn Through Interactive Exercises: Strengthen your understanding with a variety of engaging exercises, including flashcards, quizzes, and word games.

                Practice in Context: Apply your new vocabulary in real-life scenarios through contextualized examples and practice sentences.

                Track Your Progress: Monitor your learning journey with detailed progress reports and personalized recommendations.

                Whether {"you're"} a beginner or an advanced learner, [Your Website Name] offers a tailored experience to help you achieve your language goals. Join our community of language enthusiasts and embark on a rewarding linguistic adventure today!
            </div>
        </div>
    );
};

export default AboutUs;
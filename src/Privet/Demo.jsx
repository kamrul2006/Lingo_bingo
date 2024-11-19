

const JoinCommunity = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-12 px-6 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">🌟 Join Our Community 🌟</h2>
        <p className="text-lg md:text-xl mb-8">
          Connect with language enthusiasts around the world! Share tips, practice
          together, and explore new ways to master your vocabulary.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          {/* Call to Action Buttons */}
          <a
            href="/signup"
            className="px-8 py-3 bg-white text-indigo-600 rounded-lg shadow-md font-semibold hover:bg-gray-100 transition duration-300"
          >
            Sign Up Now
          </a>
          <a
            href="/community"
            className="px-8 py-3 bg-indigo-700 border border-white rounded-lg shadow-md font-semibold hover:bg-indigo-800 transition duration-300"
          >
            Explore Community
          </a>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">👩‍🏫</div>
            <h3 className="text-xl font-bold">Learn Together</h3>
            <p>Practice with peers and mentors in live sessions.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">🌐</div>
            <h3 className="text-xl font-bold">Global Network</h3>
            <p>Connect with language learners from across the globe.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">🎓</div>
            <h3 className="text-xl font-bold">Exclusive Content</h3>
            <p>Access premium vocabulary lessons and quizzes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;

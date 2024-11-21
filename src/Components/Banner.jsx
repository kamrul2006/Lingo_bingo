import lan1 from "../assets/lan-1.png"
import lan2 from "../assets/lan-2.png"
import lan3 from "../assets/lan-3.png"
import lan4 from "../assets/lan-4.png"

const Banner = () => {
  return (
    <div className="md:mx-20 py-5 mx-8 md:my-10 my-2">

      {/* -----------------banner--------------------- */}
      <div >
        <div className="carousel w-full py-3">

          {/* --------------------slide-1------------------- */}

          <div id="item1" className="carousel-item relative w-full">

            <div className="md:flex items-center justify-around w-full md:py-5 md:px-8 bg-pink-50 rounded-2xl">
              <div>
                <h1 className="md:text-5xl text-2xl font-bold text-center font-serif animate__animated animate__swing  animate__delay-1s">Learn any Languages Easily <br /> with  <span className="text-black text-3xl md:text-6xl font-serif"> Lingo</span> <span className="text-blue-500 font-serif text-3xl md:text-6xl my-3"> Bingo</span>😉</h1>

                <p className="text-center text-gray-500 text-base md:text-xl font-semibold my-4">Master any language with our <br /> interactive courses and expert guidance.</p>

              </div>
              <div className="md:w-[400px] w-60 md:h-[400px] h-60 mx-auto">
                <img src={lan1} alt="" className="w-full mx-auto h-full rounded-xl object-cover" />
              </div>
            </div>

            <div className="absolute left-5 right-5 top-[420px] md:top-1/2 flex -translate-y-1/2 transform gap-2 md:justify-between">
              <a href="#item4" className="btn btn-xs md:btn-sm btn-primary btn-circle">❮ 4</a>
              <a href="#item2" className="btn btn-xs md:btn-sm btn-primary btn-circle">2 ❯</a>
            </div>


          </div>

          {/* --------------------slide-2------------------- */}

          <div id="item2" className="carousel-item relative w-full">
            <div className="md:flex items-center justify-around w-full md:py-10 md:px-16 bg-blue-50 rounded-2xl">

              <div className="md:w-[400px] w-60 md:h-[400px] h-60 mx-auto">
                <img src={lan2} alt="" className="w-full h-full mx-auto" />
              </div>

              <div>
                <h1 className="md:text-5xl text-2xl font-bold text-center font-serif animate__animated animate__swing  animate__delay-1s">Boost Your Vocabulary <br /> with  <span className="text-black text-3xl md:text-6xl font-serif"> Lingo</span> <span className="text-blue-500 font-serif text-3xl md:text-6xl my-3"> Bingo</span>🧐</h1>

                <p className="text-center text-gray-500 text-base md:text-xl font-semibold my-4">Learn new words every day and enhance <br /> your communication skills.</p>

                <div className="absolute left-5 right-5 top-[420px] md:top-1/2 flex -translate-y-1/2 transform gap-2 md:justify-between">
                  <a href="#item1" className="btn btn-xs md:btn-sm btn-secondary btn-circle">❮ 1</a>
                  <a href="#item3" className="btn btn-xs md:btn-sm btn-secondary btn-circle">3 ❯</a>
                </div>

              </div>



            </div>
          </div>

          {/* --------------------slide-4------------------- */}

          <div id="item4" className="carousel-item relative w-full">
            <div className="md:flex items-center justify-around w-full md:py-10 md:px-16 bg-green-50 rounded-2xl">

              <div className="md:w-[400px] w-60 md:h-[400px] h-60 mx-auto">
                <img src={lan3} alt="" className="w-full h-full mx-auto" />
              </div>

              <div>
                <h1 className="md:text-5xl text-2xl font-bold text-center font-serif">Speak with Confidence <br /> with  <span className="text-black text-3xl md:text-6xl font-serif"> Lingo</span> <span className="text-blue-500 font-serif text-3xl md:text-6xl my-3"> Bingo</span>😇</h1>

                <p className="text-center text-gray-500 text-base md:text-xl font-semibold my-4">Practice speaking with our AI tools and <br /> native language coaches.</p>

                <div className="absolute left-5 right-5 top-[420px] md:top-1/2 flex -translate-y-1/2 transform gap-2 md:justify-between">
                  <a href="#item3" className="btn btn-xs md:btn-sm btn-info btn-circle">❮ 3</a>
                  <a href="#item1" className="btn btn-xs md:btn-sm btn-info btn-circle">1 ❯</a>
                </div>

              </div>



            </div>
          </div>

          {/* --------------------slide-3------------------- */}

          <div id="item3" className="carousel-item relative w-full">
            <div className="w-full md:py-7 md:px-8 bg-orange-50 rounded-2xl">
              <div className="md:flex items-center justify-around w-full">
                <div>
                  <h1 className="md:text-5xl text-2xl font-bold text-center font-serif">Practice your lesson everyday<br />with <span className="text-black text-3xl md:text-6xl font-serif"> Lingo</span> <span className="text-blue-500 font-serif text-3xl md:text-6xl my-3"> Bingo</span>🤓</h1>

                  <p className="text-center text-gray-500 text-base md:text-xl font-semibold my-4">Practice your every day lesson properly, because <br /> Practice makes a man perfect.</p>

                </div>

                <div className="md:w-[470px] w-60 md:h-[380px] h-60 mx-auto">
                  <img src={lan4} alt="" className="w-full mx-auto h-full rounded-xl" />
                </div>

                <div className="absolute left-5 right-5 top-[420px] md:top-1/2 flex -translate-y-1/2 transform gap-2 md:justify-between">
                  <a href="#item2" className="btn btn-xs md:btn-sm btn-warning btn-circle">❮ 2</a>
                  <a href="#item4" className="btn btn-xs md:btn-sm btn-warning btn-circle">4 ❯</a>
                </div>
              </div>


            </div>
          </div>

        </div>
      </div>


    </div>
  );
};

export default Banner;
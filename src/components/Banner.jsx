

import BannerBtnImg from '../images/banner-btn.png';
import BannerImage from '../images/Banner-image.png';
import  PlayButton from '../images/Play.png'


const Banner = () => {

  return (
    <section className="bg-white py-16" id="home">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left">

            {/* Small badge above heading */}
            <span className="inline-flex items-center bg-[#E1E7FF] text-purple-600 text-[13px] font-semibold px-[16px] py-2 rounded-full mb-4">
              <img className='w-[14px] h-[14px] mr-[6px]' src={BannerBtnImg} alt="" />
              New: AI-Powered Tools Available
            </span>

            <h1 className="text-4xl lg:text-6xl/snug font-extrabold text-gray-900 mb-4 ">
              Supercharge Your <br />
              <span className="text-purple-600">Digital Workflow</span>
            </h1>

            <p className="text-gray-500 text-base lg:text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              Access premium AI tools, design assets, templates, and productivity
              software—all in one place. Start creating faster today.
              Explore Products
            </p>

            {/* Two buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="#products"
                className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold px-5 py-3 rounded-3xl hover:bg-purple-700 transition-colors"
              >
                Explore Products
              </a>
              <a
                href="#pricing"
                className=" flex items-center gap-2 whitespace-nowrap border border-gray-300 font-semibold px-5 py-3 rounded-3xl hover:border-purple-600 text-purple-600"
              >
                <img src={PlayButton} alt="" /> Watch Demo
              </a>
            </div>
          </div>

          {/* Right side - Image */}
          <div>
            <img className='h-[520px]' src={BannerImage} alt="" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;

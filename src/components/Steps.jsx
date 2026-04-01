

import User from '../images/user-01.png';
import Package from '../images/package.png';
import Rocket from '../images/rocket-02.png'

const Steps = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 text-center mt-4 max-w-xl mx-auto text-sm">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* 3 step cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

          <div className="bg-white p-10 rounded-[14px] shadow-sm flex flex-col items-center text-center border border-gray-50">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                <img className='w-[62px] h-[62px]' src={User} alt="" />
              </div>
              <span className="absolute -top-3 -right-12 w-6 h-6 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold rounded-full flex items-center justify-center">
                01
              </span>
            </div>
            <h3 className="font-bold text-[#101727] text-xl mb-3">Create Account</h3>
            <p className="text-[#627382] text-sm leading-relaxed">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>
          <div className="bg-white p-10 rounded-[14px] shadow-sm flex flex-col items-center text-center border border-gray-50">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                <img className='w-[62px] h-[62px]' src={Package} alt="" />
              </div>
              <span className="absolute -top-3 -right-12 w-6 h-6 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold rounded-full flex items-center justify-center">
                02
              </span>
            </div>
            <h3 className="font-bold text-[#101727] text-xl mb-3">Choose Products</h3>
            <p className="text-[#627382] text-sm leading-relaxed">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
          <div className="bg-white p-10 rounded-[14px] shadow-sm flex flex-col items-center text-center border border-gray-50">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                <img className='w-[62px] h-[62px]' src={Rocket} alt="" />
              </div>
              <span className="absolute -top-3 -right-12 w-6 h-6 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold rounded-full flex items-center justify-center">
                03
              </span>
            </div>
            <h3 className="font-bold text-[#101727] text-xl mb-3">Start Creating</h3>
            <p className="text-[#627382] text-sm leading-relaxed">
              Download and start using your premium tools immediately.
            </p>
          </div>

          

        </div>
      </div>
    </section>
  );
};

export default Steps;

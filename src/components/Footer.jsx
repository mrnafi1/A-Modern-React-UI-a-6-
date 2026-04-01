
import X from '../images/x.png';
import Insta from '../images/Instagram.png';
import Facebook from '../images/Facebook.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8" id="faq">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top: brand + link columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          <div className="lg:col-span-2">
            <h2 className="text-white font-extrabold text-2xl tracking-wide mb-3">DigiTools</h2>
            <p className="text-sm leading-relaxed max-w-xs">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-5">
              <a href="#" className="w-10 h-10 bg-white rounded-3xl flex items-center justify-center hover:bg-purple-600 transition-colors text-sm">
                <img className='w-6 h-6' src= {Insta} alt="" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-3xl flex items-center justify-center hover:bg-purple-600 transition-colors text-sm">
                <img className='w-6 h-6' src= {Facebook} alt="" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-3xl flex items-center justify-center hover:bg-purple-600 transition-colors text-sm">
                <img className='w-6 h-6' src= {X} alt="" />
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-white font-semibold text-md mb-4">Product</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-white font-semibold text-md mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Resources</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

        </div>

        {/* copyright section */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} DigiTools. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

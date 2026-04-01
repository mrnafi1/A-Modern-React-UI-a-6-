


const Pricing = () => {
  return (
    <section id="pricing" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 text-center mt-4 max-w-xl mx-auto text-sm">
         Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        {/* 3 pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 items-center">

          {/* Starter Plan */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7 flex flex-col gap-5">
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Starter</h3>
              <p className="text-gray-400 text-sm tracking-normal mt-1">Perfect for getting started</p>
            </div>
            <div>
              <span className="text-4xl font-extrabold text-gray-900">$0</span>
              <span className="text-gray-400 text-sm"> /Month</span>
            </div>
            <ul className="space-y-2.5 flex-1">
              <li className="flex items-center gap-2 text-sm text-gray-600"><span className="text-green-500">✔</span> Access to 10 free tools</li>
              <li className="flex items-center gap-2 text-sm text-gray-600"><span className="text-green-500">✔</span> Basic templates</li>
              <li className="flex items-center gap-2 text-sm text-gray-600"><span className="text-green-500">✔</span> Community support</li>
              <li className="flex items-center gap-2 text-sm text-gray-600"><span className="text-green-500">✔</span> 1 project per month</li>
            </ul>
            <button className=" [word-spacing:1px] w-full py-3 rounded-3xl font-bold text-sm bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:bg-purple-700 transition-colors">
              Get Started Free
            </button>
          </div>

          <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl p-7 flex flex-col gap-5 scale-105  relative">
            {/* Badge */}
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
              Most Popular
            </span>
            <div>
              <h3 className="font-bold text-white text-lg">Pro</h3>
              <p className="text-purple-200 text-sm mt-1">Everything you need to scale your workflow.</p>
            </div>
            <div>
              <span className="text-4xl font-extrabold text-white">$29</span>
              <span className="text-purple-200 text-sm"> /month</span>
            </div>
            <ul className="space-y-2.5 flex-1">
              <li className="flex items-center gap-2 text-sm text-white"><span>✔</span> Access to all premium tools</li>
              <li className="flex items-center gap-2 text-sm text-white"><span>✔</span> Unlimited templates</li>
              <li className="flex items-center gap-2 text-sm text-white"><span>✔</span> Priority support</li>
              <li className="flex items-center gap-2 text-sm text-white"><span>✔</span> Unlimited projects</li>
              <li className="flex items-center gap-2 text-sm text-white"><span>✔</span> Cloud sync</li>
              <li className="flex items-center gap-2 text-sm text-white"><span>✔</span> Advanced analytics</li>
            </ul>
            <button className="[word-spacing:1px] w-full py-3 rounded-3xl font-bold text-sm  bg-white text-purple-600 hover:bg-gray-100 transition-colors">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7 flex flex-col gap-5">
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Enterprise</h3>
              <p className="text-gray-400 text-sm mt-1">For teams and businesses</p>
            </div>
            <div>
              <span className="text-4xl font-extrabold text-gray-900">$99</span>
              <span className="text-gray-400 text-sm"> /Month</span>
            </div>
            <ul className="space-y-2.5 flex-1">
              <li className="flex items-center gap-2 text-sm text-gray-600"><span className="text-green-500">✔</span> Everything in Pro</li>
              <li className="flex items-center gap-2 text-sm text-gray-600"><span className="text-green-500">✔</span> Team collaboration</li>
              <li className="flex items-center gap-2 text-sm text-gray-600"><span className="text-green-500">✔</span> Custom integrations</li>
              <li className="flex items-center gap-2 text-sm text-gray-600"><span className="text-green-500">✔</span> Dedicated support</li>
              <li className="flex items-center gap-2 text-sm text-gray-600"><span className="text-green-500">✔</span> SLA guarantee</li>
              <li className="flex items-center gap-2 text-sm text-gray-600"><span className="text-green-500">✔</span> Custom branding</li>
            </ul>
            <button className=" [word-spacing:1px] w-full py-3 rounded-3xl font-bold text-sm bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:bg-purple-700 transition-colors">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;

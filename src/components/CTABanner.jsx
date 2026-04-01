

const CTABanner = () => {
  return (
    <section className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-wide">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-purple-200 text-base md:text-lg mb-8 max-w-xl mx-auto">
          Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#products"
            className="bg-white text-purple-600 font-bold px-7 py-3 rounded-3xl hover:bg-purple-600 hover:text-white transition-colors text-sm"
          >
            Explore Products
          </a>
          <a
            href="#pricing"
            className="border-2 border-white text-white font-bold px-7 py-3 rounded-3xl hover:bg-white hover:text-purple-600 transition-colors text-sm"
          >
            View Pricing
          </a>
        </div>

        <p className="text-purple-200 text-sm mt-6">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </section>
  );
};

export default CTABanner;

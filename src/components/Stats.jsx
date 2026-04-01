

const Stats = () => {
  return (

    <section className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-8">
      <div className="max-w-7xl mx-auto px-4">

        {/* 3 stats: 1-column on mobile, 3-columns on desktop */}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

          <div className="text-white">
            <p className="text-4xl font-extrabold">50K+</p>
            <p className="text-purple-200 text-md mt-2">Active Users</p>
          </div>

          <div className="text-white">
            <p className="text-4xl font-extrabold">200+</p>
            <p className="text-purple-200 text-md mt-2">Premium Tools</p>
          </div>

          <div className="text-white">
            <p className="text-4xl font-extrabold">4.9</p>
            <p className="text-purple-200 text-md mt-2">Rating</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;

const AboutPage = () => {
    return (
        <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-6xl">Accounting <span className="text-[#2462EE]"> made simple</span></h1>
          <h1 className="text-6xl">for a small businesses.</h1>
          <p className="mt-5">Lorem,Totam voluptate officia perspiciatis maiores dolores dolor maxime excepturi.</p>
          <p className="">Lorem,Totam voluptate officia perspiciatis culpa maiores</p>
          <div className="flex item-center justify-center">
          <button className="rounded-full h-10 w-40 border-4 mt-5 mr-5 text-sm bg-black text-white">Get 6 months free</button>
          <button className="rounded-full h-10 w-40 border-4 mt-5 text-sm bg-black text-white">Watch video</button>
        </div>
        </div>
    </div>
    );
};

export default AboutPage;
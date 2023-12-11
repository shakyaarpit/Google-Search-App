import React from "react";
import HomeHeader from './HomeHeader'
import logo from '../assets/logo.png';
import SearchInput from './SearchInput'
import Footer from './Footer';
const Home = () => {
  return <div className="flex h-[100vh] flex-col">
    <HomeHeader/>
    <main className=" grow flex justify-center">
      <div className="w-full px-5 flex flex-col items-center mt-10 ">
        <img className="w-[172px] md:w-[272px] mb-8" src={logo} alt="" />
        <SearchInput/>
        <div className="flex mt-8 text-[#3c4043] gap-2">
          <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border-[#f8f9fa] hover:border-[#8c8c8e] hover:shadow-c">Google Search</button>
          <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border-[#f8f9fa] hover:border-[#8c8c8e] hover:shadow-c">I`m Feeling Lucky</button>

        </div>
      </div>
    
    </main>
    <Footer/>
  </div>;

};

export default Home;

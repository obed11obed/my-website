import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";

import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <div>
     
    <main className="relative bg-black-100 flex justify-center 
    items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
     <div className="z-50 self-start">
     <p className="md:text-base text-sm md:font-normal font-light mt-5">
          <span className="text-purple text-4xl">Page</span><span className="text-red-400 text-5xl mr-10">X</span>
        </p>
     </div>
      <div className="max-w-7xl w-full">
         
        <FloatingNav navItems={navItems}/>
       
       <Hero />

       <Grid />
       <RecentProject/>
       <Clients/>
       <Experience/>
       <Approach/>
       <Footer/>
       
      </div>
    </main>
    </div>
  );
}

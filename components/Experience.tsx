import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorder";


export default function Experience() {
  return (
    <div className="py-20">
    <h1 className="heading">
       My
       <span className="text-purple"> Work Experiance</span>
       </h1> 
       <div className="w-full mt-12 grid md:grid-cols-4 grid-cols-1 gap-10">

          {workExperience.map((cards)=>(
             <Button key={cards.id} 
             duration={Math.floor(Math.random() * 10000)
             + 10000}b borderRadius="1.75rem" 
            className="flex-1 text-white border-neutral-200
            dark:border-slate-800">
                <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                    <img src={cards.thumbnail} alt={cards.thumbnail} className="lg:w-32 md:w-20 w-16"/>
                    <div className="lg:ms-5">
                      <h1 className="text-start text-xl md:text-2xl font-bold">
                        {cards.title}
                      </h1>
                      <p className="text-start text-white-100 mt-3 font-semibold">
                        {cards.desc}
                        </p>
                    </div>
                </div>
             </Button>
          ))}
         
         
       </div>
   </div>
  )
}

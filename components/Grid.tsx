import { gridItems } from "@/data"
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid"

export default function Grid() {
  return (
    <div>
      <section id="about">
        <BentoGrid>
           {gridItems.map((item) =>(
              <BentoGridItem 
              id={item.id}
              key={item.id} 
              title={item.title}
              description={item.description}
              className = {item.className}
              img ={item.img}
              imgClassName = {item.imgClassName}
              spareImg = {item.spareImg}
              titleClassName={item.titleClassName}
              
                />
          ) )}
        </BentoGrid>

      </section>
    </div>
  )
}

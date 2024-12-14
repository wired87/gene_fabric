import { Card } from "@nextui-org/react";
import {AUTOMATION, CHANNELS, DEVELOPMENT, PRODUCTIVITY} from "@/components/Integration/contentArrays";
import Image from "next/image";

const IntegrationsContent = () => {

  return (
    <>
   <div className={"grid sm:grid-cols-1 md:grid-rows-3 lg: grid-rows-3"}>
     {DEVELOPMENT.map((item, i) => (
       <Card key={i} >
         <Image alt={item.title} src={item.src} fill className={"rounded-full object-cover"}/>
         <h4>
           {item.title}
         </h4>
         <p>
           {item.exp}
         </p>
       </Card>
     ))}

   </div>
      <div className={"grid sm:grid-cols-1 md:grid-rows-3 lg: grid-rows-3"}>

        {CHANNELS.map((item, i) => (
          <Card key={i} >
            <Image alt={item.title} src={item.src} fill className={"rounded-full object-cover"}/>
            <h4>
              {item.title}
            </h4>
            <p>
              {item.exp}
            </p>
          </Card>
        ))}
      </div>
      <div className={"grid sm:grid-cols-1 md:grid-rows-3 lg: grid-rows-3"}>

        {PRODUCTIVITY.map((item, i) => (
          <Card key={i} >
            <Image alt={item.title} src={item.src} fill className={"rounded-full object-cover"}/>
            <h4>
              {item.title}
            </h4><p>
            {item.exp}
          </p>

          </Card>
        ))}
    </div><div className={"grid sm:grid-cols-1 md:grid-rows-3 lg: grid-rows-3"}>

        {AUTOMATION.map((item, i) => (
          <Card key={i} >
            <Image alt={item.title} src={item.src} fill className={"rounded-full object-cover"}/>
            <h4>
              {item.title}
            </h4>
            <p>
              {item.exp}
            </p>
          </Card>
        ))}
    </div>
    </>

  );
}
export default IntegrationsContent;
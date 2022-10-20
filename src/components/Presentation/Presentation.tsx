import Title from "./Title";
import Introduction from "./Introduction";
import GetStarted from "./GetStarted";
import Picture from "./Picture";

const Presentation=()=>{
    return(
      <div className="  flex flex-col  items-start  mt-[38px] sm: mt-[99px]  sm:max-w-[398px]">
          <Title />
          <Introduction />
         <GetStarted />
      </div>
    );
};
export  default  Presentation;
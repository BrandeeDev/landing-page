import React from "react";

const CategoryItem: React.FC<{ image: string, title: string, description: string }> = (props) => {

    return (
        <div className="container my-4 pb-8 w-full  my-3 bg-white w-full rounded-2xl w-[343px] sm:w-[350px] relative">
            <div className="flex flex-col justify-start mt-[56px] mb-8 mx-7">
                <img src={require(`../../assets/${props.image}`) } alt="icon" className="absolute -top-5 left-7 h-[56px] w-[56px] overflow-visible" />
                <p className="font-plus_jakarta_s font-extrabold  text-xl leading-[25px] text-left align-top  mt-[80px] ">{props.title}</p>
                <p className="font-plus_jakarta_s font-medium text-base leading-[26px] text-left align-top text-[#83869A] ">{props.description}</p>
                <a href="#" className="no-underline bottom-0 mr-7 font-plus_jakarta_s font-bold text-lg leading-7 text-left align-top text-[#F74780] hover:text-[#FFA7C3]">
                    Get Started
                </a>
            </div>


    </div>);

}
export default CategoryItem;


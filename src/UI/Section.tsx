const Section=(props:any)=>{
    return(
        <section className="mt-4 sm:mt-6  mx-4 sm:mx-[50px]  lg:mx-[165px] flex flex-col justify-center items-start ">
            {props.children}
        </section>
    );
}
export  default   Section;
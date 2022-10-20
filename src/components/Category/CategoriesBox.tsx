import BoxHeader from "./BoxHeader";
import CategoryItem from "./CategoryItem";
const DUMMY_DATA=[
    {
        id:1,
        image:"icon-animation.svg",
        title:"Animation",
        description: "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
    },
    {
        id:2,
        image:"icon-design.svg",
        title:"Design",
        description: "Create beautiful, usable interfaces to help shape the future of how the web looks.",
    },
    {
        id:3,
        image:"icon-photography.svg",
        title:"Photography",
        description: "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
    },
    {
        id:4,
        image:"icon-crypto.svg",
        title:"Crypto",
        description: "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
    },
    {
        id:5,
        image:"icon-business.svg",
        title:"Business",
        description: "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
    },
];
const CategoriesBox=()=>
{
    const categoriesList=DUMMY_DATA.map((category)=>{
        return(<li key={category.id}>
            <CategoryItem image={category.image} title={category.title} description={category.description}/>
            </li>)
    })
    return(<section className="  self-center  bg-gradient-to-b from-box_gradient-start to-box_gradient-end pb-[80px] sm:mt-[186px] sm:grid sm grid-cols-2 sm:gap-x-2.5 sm:gap-y-8 lg:grid-cols-3 lg:gap-x-7.5 lg:gap-y-[56px] ">
        <BoxHeader />
        <ul className="flex flex-col justify-center items-center list-none contents ">
            {categoriesList}
        </ul>
    </section>)
};
export default  CategoriesBox;
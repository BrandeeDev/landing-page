const Main = (props: any) => {

    return (
        <main
            className={`w-screen ml-0 mx-0 bg-white bg-contain h-screen   sm:bg-hero_tablet sm:bg-[right_-16rem_top_-4rem] sm:bg-[length:640px_640px] lg:bg-hero_desktop lg:bg-[right_-20rem_top_-12rem]  lg:bg-[length:991px_936px] bg-no-repeat `}>
            {
                props.children
            }
        </main>);
}
export default Main;

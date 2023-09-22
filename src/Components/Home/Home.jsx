import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div className="">
             <div className=" banner-bg  ">
             <Banner />
             </div>
             <main className="container mx-auto my-32">
                <CategoryList/>
                <FeaturedJobs/>
             </main>
        </div>
    );
};

export default Home;
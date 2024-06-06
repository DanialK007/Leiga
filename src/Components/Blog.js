import Button from "./Button";
import Span from "./Span";
import blog1 from '../Image/blog1.png';
import blog2 from '../Image/blog2.png';
import blog3 from '../Image/blog3.png';

const blogs = [
    {
        image : blog1,
        catagory : "Design",
        title : "Developing Seamless mobile apps",
        date : "April 1, 2024"
    },
    {
        image : blog2,
        catagory : "Code",
        title : "Our design process explained",
        date : "April 27, 2024"
    },
    {
        image : blog3,
        catagory : "Marketing",
        title : "A peek into our branding strategy",
        date : "May 10, 2024"
    }
]

const Blog = () => (
    <>
        <div className="max-w-screen-xl mx-auto px-10 py-32">
            <div className="flex py-10 justify-between items-center">
                <div>
                    <div className="text-5xl font-semibold pb-5">From <i>blog</i></div>
                    <div className="text-2xl font-semibold">Discover the latest tips, <Span>trends and ideas.</Span></div>
                </div>
                <div>
                <Button>View all</Button>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3"></div>
        </div>
    </>
)

export default Blog;
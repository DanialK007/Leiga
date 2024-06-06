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
        <div className="max-w-screen-xl mx-auto px-10 pt-32">
            <div className="flex flex-col gap-y-10 items-start lg:flex-row py-10 justify-between lg:items-center">
                <div>
                    <div className="text-5xl font-semibold pb-5">From <i>blog</i></div>
                    <div className="text-2xl font-semibold">Discover the latest tips, <Span>trends and ideas.</Span></div>
                </div>
                <div>
                <Button>View all</Button>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    blogs.map((blog, index) => (
                        <div key={index} className="group flex flex-col py-10 cursor-pointer">
                            <img src={blog.image} alt="blog" className="w-full group-hover:opacity-60" />
                            <div className="font-semibold my-5 p-1 px-3 border-2 border-black rounded-s-full rounded-e-full me-auto">{blog.catagory}</div>
                            <div className="text-3xl font-semibold">{blog.title}</div>
                            <div className="text-black/70 text-lg font-semibold py-5">{blog.date}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
)

export default Blog;
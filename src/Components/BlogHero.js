import BlurBack from "./BlurBack";
import Fader from "./Fader";

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

const WorkHero = () => (
    <>
        <BlurBack>
            <div className="w-full h-full flex items-center justify-center text-center text-6xl lg:text-8xl font-semibold">
                <Fader>
                Our <i className="ps-1">Blogs</i>
                </Fader>
            </div>
        </BlurBack>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 px-10">
            {
                blogs.map((blog, index) => (
                    <Fader>
                    <div key={index} className="group flex flex-col py-10 cursor-pointer">
                        <img src={blog.image} alt="blog" className="w-full group-hover:opacity-60" />
                        <div className="font-semibold my-5 p-1 px-3 border-2 border-black rounded-s-full rounded-e-full me-auto">{blog.catagory}</div>
                        <div className="text-3xl font-semibold">{blog.title}</div>
                        <div className="text-black/70 text-lg font-semibold py-5">{blog.date}</div>
                    </div>
                    </Fader>
                ))
            }
        </div>
    </>
)

export default WorkHero;
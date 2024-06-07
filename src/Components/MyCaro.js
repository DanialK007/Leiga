import Fader from './Fader';
import Span from "./Span";
import company1 from "../Image/company1.svg";
import company2 from "../Image/company2.svg";
import company3 from "../Image/company3.svg";
// import company4 from "../Image/company4.svg";

const Companies = [
    {
        image: company1,
        quote: "Leiga creative prowess in the digital marketing realm is unmatched.",
        name: "Lucas Smith",
        role: "Marketing Director"
    },
    
    {
        image: company2,
        quote: "Choosing Leiga for our digital marketing needs was one of the best decisions we've made.",
        name: "Emma Harrison",
        role: "Tech Innovate"
    },
    {
        image: company3,
        quote: "Working with Leiga has been a transformative experience for our brand.",
        name: "Sophia Patel",
        role: "Product Designer"
    }
    // {
    //     image: company4,
    //     quote: "Leiga's creative prowess in the digital marketing realm is unmatched.",
    //     name: "Lucas Smith",
    //     role: "Marketing Director"
    // }
]

const MyCaro = () => (
    <>
        <div className="text-3xl lg:text-[2.5rem] text-center font-semibold lg:px-10">Trusted by 4,000 <Span>clients world wide</Span></div>
        <div className="p-10 lg:p-20">
            <div className="grid lg:grid-cols-3 gap-8 py-10">
                {
                    Companies.map((company, index) => (
                        <Fader>
                        <div key={index} className="bg-indigo-50 py-12 px-10 hover:scale-95 cursor-pointer">
                            <img src={company.image} alt="" className="h-8"/>
                            <div className="text-[1.5rem] font-semibold py-5">"{company.quote}"</div>
                            <div className="">{company.name}, <Span>{company.role}</Span></div>
                        </div>
                        </Fader>
                    ))
                }
            </div>  
        </div>
    </>
)

export default MyCaro;
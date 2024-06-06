import Span from "./Span";
import Fader from "./Fader";
import phone from "../Image/phone.png";
import apple from '../Image/appleLogo.png';
import playStore from '../Image/playStore.png';

const ListGrid = () => (
    <>
        <div className="max-w-screen-xl px-10 mx-auto grid lg:grid-cols-2 gap-20">
            <div className="flex justify-center flex-col">
                <Fader>
                <div className="text-4xl font-semibold">Artificial Intelligence solutions that deliver <Span>remarkable success.</Span></div>
                </Fader>
                <Fader>
                <div className="flex flex-col gap-5 py-10 font-semibold">
                    <div>> Marketing plans powered by AI technology</div>
                    <div>> Live customer support chat widget</div>
                    <div>> Automatic scaling campaign tools</div>
                    <div>> Adaptive testing reporting</div>
                </div>
                </Fader>
                <div className="flex flex-col items-start lg:flex-row gap-8">
                    <a href="#" className="shadow flex hover:-translate-y-1 duration-300 items-center gap-2 border text-[1.1rem] border-gray-100 font-semibold py-4 px-6 rounded-full">
                        <img src={apple} alt="" className="h-6" />
                        Download iOS
                    </a>
                    <a href="#" className="shadow flex hover:-translate-y-1 duration-300 items-center gap-2 border text-[1.1rem] bg-black/90 text-white border-gray-100 font-semibold py-4 px-6 rounded-full">
                        <img src={playStore} alt="" className="h-6" />
                        Download Android
                    </a>
                </div>
            </div>
            <div>
                <img src={phone} alt="phone" />
            </div>
        </div>
    </>
)

export default ListGrid;
import MenuImg from '../Image/liegeMenu.png';

const Navbar = () => (
    <nav className="fixed z-50 top-0 left-0 w-full bg-white flex items-center justify-between p-4 lg:px-24">
        <div className="text-3xl font-bold">Leiga</div>
        <button className="relative">
            <div className='absolute top-0 left-1 w-full h-full flex items-center justify-center rotate-90 font-bold text-xl'>||</div>
            <img src={MenuImg} alt="Menu" className="w-20 h-20 animate-spinSlow" />
        </button>
    </nav>
)

export default Navbar
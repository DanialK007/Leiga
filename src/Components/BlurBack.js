const BlurBack = ({children}) => (
    <>
        <div className="relative overflow-hidden py-20 lg:py-44 h-[500px] mt-10">
            <div className="absolute -z-10 top-56 -left-64 w-[500px] h-[140px] rounded-full blur-[100px] bg-cyan-500 opacity-80"></div>
            <div className="absolute -z-10 bottom-44 lg:top-64 -right-96 lg:right-40 w-[700px] h-[80px] rounded-full blur-[100px] bg-fuchsia-500 opacity-80"></div>
            {children}
        </div>
    </>
)

export default BlurBack;
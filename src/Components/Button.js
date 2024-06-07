const Button = ({children}) => (
    <button className="py-3 px-10 text-lg bg-gradient-to-tr from-fuchsia-600 to-cyan-400 text-white rounded-s-full rounded-e-full hover:scale-95 duration-300">
        {children}
    </button>
)

export default Button;
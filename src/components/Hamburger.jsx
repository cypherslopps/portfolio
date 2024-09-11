import { PropTypes } from "prop-types";

const Hamburger = ({ isOffsetOpen, toggleOffset }) => {
  return (
    <button
        onClick={toggleOffset}
        className={`relative flex items-center justify-center md:hidden rounded-full p-1.5 z-50 w-10 h-10 duration-200 transition-all ${isOffsetOpen ? "bg-white" : "hover:bg-white/20 scale-95"}`}
    >   
        <span className={`w-[95%] h-[3px] bg-white hamburger_ele relative ${isOffsetOpen ? "active bg-black" : "bg-white"}`}  />
    </button>
  )
}

Hamburger.propTypes = {
    isOffsetOpen: PropTypes.bool,
    toggleOffset: PropTypes.func,
}

export default Hamburger
import iconMoon from "../assets/icons/moon_icon.svg"
import iconSun from "../assets/icons/ligthmode.svg"

const Nav = ({handleTheme, theme}) => {
  return (
    <nav className="w-full h-20 shadow-md bg-white flex justify-between items-center dark:bg-darkBlue">
      <div className="pl-5 md:pl-10">
        <h1 className="font-bold md:text-lg dark:text-white">Where in the word?</h1>
      </div>

      {
        theme === "dark" ? (<div className="pr-5 flex gap-1 md:pr-10">
        <img className="w-4" src={iconSun} alt="" />
        <button onClick={()=>handleTheme()} className="font-semibold text-xs text-white md:text-base">Light mode</button>
      </div>) : (<div className="pr-5 flex gap-1 md:pr-10">
        <img className="w-4" src={iconMoon} alt="" />
        <button onClick={()=>handleTheme()} className="font-semibold text-xs md:text-base">Dark mode</button>
      </div>)
      }
      
    </nav>
  );
};

export default Nav;

import back_icon from "../assets/icons/back_icon.svg"
import white_icon from "../assets/icons/white_icon.svg"
import { Link } from "wouter"
import { useTheme } from "../context/ThemeContext"
const BackButton = () => {
  const { theme } = useTheme();

  return (
    <Link to="/" className="flex border-0 bg-white items-center rounded-sm justify-center shadow-xl w-32 py-2 gap-2 dark:bg-darkBlue dark:text-white">
      <img className="w-6 " src={theme=== "dark" ? white_icon : back_icon} alt="back" />
      Back
    </Link>
  );
}

export default BackButton
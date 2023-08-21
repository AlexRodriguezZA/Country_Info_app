import search_icon from "../assets/icons/search-icon.svg"
const Search = ({HadlerSearch}) => {
  return (
    <div className="w-11/12 h-14 rounded-sm  bg-white flex shadow-md justify-around items-center md:w-5/12 dark:bg-darkBlue">
      <div className="w-3/12 flex justify-center">
        <img className="w-6" src={search_icon} alt="" />
      </div>
      <div className="w-3/4">
        <input onChange={HadlerSearch} className="w-11/12 px-1 h-6 focus:outline-none active:outline-none text-sm placeholder:text-darkGray dark:bg-darkBlue dark:placeholder:text-veryLightGray dark:text-white" type="text" placeholder="search for a country..."/>
      </div>
    </div>
  );
};

export default Search;

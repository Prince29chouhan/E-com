import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ onSearch }) => {
  return (
    <header className="p-4 bg-base-100 shadow-md flex justify-between items-center">
      
      <h5 className="">
        <img src="/logo.png" alt="" className="w-10 h-auto"/>
      </h5>

      
      <div className="flex-1 mx-4">
        <SearchBar onSearch={onSearch} />
      </div>

      
      <ThemeToggle />
    </header>
  );
};

export default Navbar;

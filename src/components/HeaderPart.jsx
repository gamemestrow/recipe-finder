import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import FilterPanel from "./FilterPanel";
import { useLocation, useNavigate } from "react-router-dom";

const HeaderPart = ({
  query,
  setquery,
  handlesubmit,
  darkMode,
  setdarkMode,
  setfilter,
  filter,
}) => {
  const [isHomePage, setisHomePage] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location, isHomePage);

    if (location.pathname != "/") {
      setisHomePage(false);
    } else {
      setisHomePage(true);
    }
  }, [location]);

  return (
    <>
      <div className="flex justify-center bg-[#FAFAFA] dark:bg-[#1E1E1E] w-full h-20 md:h-24 lg:h-32">
        <div className="h-full w-full flex justify-between items-center p-4 md:p-6 lg:p-10">
          <div className="flex justify-center items-center gap-4 md:gap-8 lg:gap-20">
            <div className="text-[#111827] dark:text-[#E0E0E0]">
              <img
                src="/recipe-svgrepo-com.svg"
                alt="Logo"
                className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16"
              />
            </div>
            <div className="text-[#111827] dark:text-[#E0E0E0] text-xl md:text-3xl lg:text-5xl hidden md:block">
              Food and Fooood
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-10">
            {isHomePage ? (
              <SearchBar
                query={query}
                setquery={setquery}
                handlesubmit={handlesubmit}
              />
            ) : (
              <div
                className="text-base md:text-lg lg:text-xl cursor-pointer"
                onClick={() => navigate("/")}
              >
                home
              </div>
            )}

            <div
              className="cursor-pointer text-[#111827] dark:text-[#E0E0E0] text-2xl md:text-3xl lg:text-5xl"
              onClick={() => setdarkMode(!darkMode)}
            >
              {darkMode ? <MdDarkMode /> : <MdLightMode />}
            </div>

            {isHomePage && <FilterPanel setfilter={setfilter} filter={filter} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderPart;

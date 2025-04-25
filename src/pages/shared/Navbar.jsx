import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../component/AuthProvider/AuthProvider";
import logo from "../../assets/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {user, logOut} =useContext(authContext);
  const menuRef = useRef(null); // ref for dropdown menu 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = ()=>{
    logOut();
    setIsMenuOpen(false);
    // .then(()=>alert('successfully logout'))
  }

  useEffect(()=>{
    const handleClickOutside = (event) =>{
      if(menuRef.current && !menuRef.current.contains(event.target)){
        setIsMenuOpen(false);
      }
    };
    if(isMenuOpen){
      document.addEventListener("mousedown", handleClickOutside);
    }
    return()=>{
      document.removeEventListener("mousedown", handleClickOutside)
    }
  },[isMenuOpen])

  return (
    // <nav className=" shadow-md sticky top-0 z-50 bg-slate-200 backdrop-blur-lg ">
    <nav className="h-16 shadow-md sticky top-0 z-50 bg-[#1E3A8A] backdrop-blur-lg ">
      <div className="w-11/12 mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className=" flex flex-shrink-0 items-center">
            <Link to="/"><img src={logo} alt="" /></Link>
            <Link to="/" className="text-xl font-bold text-whiteContr hover:text-blue-600">
            CritiqueMaster
            </Link>
          </div>

          {/* Links */}
          {/* hide menu from md, so lg:flex */}
          <div className="hidden lg:flex space-x-6 items-center">
            <Link to="/" className="text-whiteContr font-bold hover:text-blue-600">
              Home
            </Link>
            {/* <Link to="/services" className=" font-bold hover:text-blue-600" style={{ color: '#FF9800' }}> */}
            <Link to="/services" className="text-whiteContr font-bold hover:text-blue-600">
              Services
            </Link>
            {/* {isLoggedIn ? ( */}
            {user ? (
              <>
                <Link to="/add-service" className="text-whiteContr font-bold hover:text-blue-600">
                  Add Service
                </Link>
                <Link to="/reviews" className="text-whiteContr font-bold hover:text-blue-600">
                  My Reviews
                </Link>
                <Link to="/my-services" className="text-whiteContr font-bold hover:text-blue-600">
                  My Services
                </Link>
                <div className="flex items-center space-x-4">
                  <img
                    referrerPolicy='no-referrer'
                    src={user?.photoURL || "https://via.placeholder.com/40"}
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full border"
                  />
                  <button
                    onClick={handleLogout}
                    className="text-whiteContr font-bold hover:text-blue-600">
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="text-whiteContr font-bold hover:text-blue-600">
                  Login
                </Link>
                <Link to="/register" className="text-whiteContr font-bold hover:text-blue-600">
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          {/* toggle on from md, so lg:hidden */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-whiteContr hover:text-blue-600 focus:outline-none">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          // dropdown menu on from md, so lg:hidden
          // <div className="lg:hidden">
          // <div className="lg:hidden flex justify-end">
          // <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1/2 mx-w-sm px-6 space-y-4 py-4 bg-white rounded-lg flex justify-end">
          <div ref={menuRef} className="absolute top-full left-3/4 transform -translate-x-1/2 bg-white shadow-md rounded-lg w-1/2 md:w-1/4 max-w-sm space-y-4 py-4 px-6 ">
            {/* <div className="w-1/2 mx-w-sm shadow-md rounded-lg bg-white px-6 space-y-4 py-4"> */}
            <div className="">
              {/* <Link to="/" className="block text-gray-600 hover:text-blue-600"> */}
              <Link to="/" className="block font-bold hover:text-blue-600" style={{ color: '#FF9800' }}>
                Home
              </Link>
              <Link to="/services" onClick={()=>setIsMenuOpen(false)} className="block text-gray-600 hover:text-blue-600">
                Services
              </Link>
              {user ? (
                <>
                  <Link
                    to="/add-service"
                    onClick={()=>setIsMenuOpen(false)}
                    className="block text-gray-600 hover:text-blue-600">
                    Add Service
                  </Link>
                  <Link
                    to="/reviews"
                    onClick={()=>setIsMenuOpen(false)}
                    className="block text-gray-600 hover:text-blue-600">
                    My Reviews
                  </Link>
                  <Link
                    to="/my-services"
                    onClick={()=>setIsMenuOpen(false)}
                    className="block text-gray-600 hover:text-blue-600">
                    My Services
                  </Link>
                  <div className="flex items-center space-x-4 py-2">
                    <img
                      src={user.photoURL || "https://via.placeholder.com/40"}
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full border"
                    />
                    <button
                      // onClick={onLogout}
                      onClick={handleLogout}
                      
                      className="text-gray-600 hover:text-blue-600">
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={()=>setIsMenuOpen(false)} className="block text-gray-600 hover:text-blue-600">
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block text-gray-600 hover:text-blue-600">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

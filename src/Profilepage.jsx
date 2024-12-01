import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Profile from "./assets/Image/Profile.svg";
import Verify from "./assets/image/Verify.svg";
import Ellipse from "./assets/image/Ellipse.svg";
import PopUpDelete from "./components/PopUpDelete.jsx";
import PopUpLogout from "./components/PopUpLogOut.jsx";
import "./css/ProfilePagePersonalInfo.css";
import Navbar from "./components/Navbar.jsx";
import axios from "axios";

const ProfilePagePersonalInfo = () => {
  const [activePage, setActivePage] = useState("info-personal");
  const [email, setEmail] = useState("dummyemail@example.com");
  const [name, setName] = useState("John Doe");
  const [phone, setPhone] = useState("+62123456789");
  const [profileImage, setProfileImage] = useState(Profile);
  const [showDeletePopUp, setShowDeletePopUp] = useState(false);
  const [showLogoutPopUp, setShowLogoutPopUp] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
 

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
          setUser(userData);
        } else {
          const response = await axios.get("https://campushub.web.id/api/user");
          const data = response.data;
          setUser(data);
          localStorage.setItem('user', JSON.stringify(data)); 
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
  
    fetchProfileData();
  }, []);
  

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  
  return (
    <div className="profile-page h-screen">
      <Navbar />
      <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-32">
        <div
          className={`container ${showAnimation ? "animate-slide-up" : ""}`}
          style={{
            transition: "transform 0.8s ease-out",
          }}
        >
          <div className="content-box px-4 sm:px-8 md:px-16 py-0">
            <div className="header flex flex-col lg:flex-row justify-between lg:py-10 py-6">
              <div className="text-header flex flex-col">
                <span className="page-title font-semibold text-[24px] lg:text-[32px]">
                  Info Personal
                </span>
                <span className="description text-regular text-[14px] lg:text-[18px]">
                  You can update your profile photo and personal details here.
                </span>
              </div>
              <span className="title font-semibold text-[24px] lg:text-[32px] mt-4 lg:mt-0">
                Profile Akun
              </span>
            </div>
            <div className="content flex flex-col sm:flex-row justify-between gap-8">
              <div className="profile flex flex-col lg:flex-row lg:items-start justify-center lg:justify-between lg:w-10/12 py-10">
                <div className="profile-picture w-[120px] lg:w-2/12 mx-auto lg:mx-0 rounded-full">
                  <img
                    src={profileImage || Profile}
                    alt="Profile Picture"
                    className="w-full rounded-full"
                  />
                </div>
                
                <div className="form flex flex-col w-full lg:w-10/12 gap-12 mt-6 lg:mt-0">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:w-11/12 pl-0 lg:pl-12">
                    <div className="form-label flex flex-col gap-6 lg:gap-20 w-full lg:w-4/12">
                      <label
                        htmlFor="name"
                        className="font-semibold text-[16px] lg:text-[20px] hidden sm:block"
                      >
                        Name
                      </label>
                      <label
                        htmlFor="email"
                        className="font-semibold text-[16px] lg:text-[20px] hidden sm:block"
                      >
                        Email Address
                      </label>
                      <label
                        htmlFor="phone"
                        className="font-semibold text-[16px] lg:text-[20px] hidden sm:block"
                      >
                        No. Telp
                      </label>
                    </div>
                    <div className="form-input flex flex-col gap-4 lg:gap-16 w-full lg:w-8/12">
                      <div className="flex flex-col sm:flex-col sm:items-start sm:gap-2">
                        <label
                          htmlFor="name"
                          className="sm:block lg:hidden font-semibold text-[16px]"
                        >
                          Name
                        </label>
                        <div className="input-box p-3 border-2 border-[#027FFF] rounded-lg hover:shadow-lg transition duration-300 px-4 py-2 w-full focus:ring focus:ring-blue-200 focus:outline-none">
                          <span className="">
                          {user ? user.name : "Loading..."}
                          </span>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="flex flex-col sm:flex-col sm:items-start sm:gap-2">
                          <label
                            htmlFor="email"
                            className="sm:block lg:hidden font-semibold text-[16px]"
                          >
                            Email Address
                          </label>
                          <div className="input-box p-3 border-2 border-[#027FFF] rounded-lg hover:shadow-lg transition duration-300 px-4 py-2 w-full focus:ring focus:ring-blue-200 focus:outline-none">
                            <span className="">
                            {user ? user.email : "Loading..."}
                            </span>
                          </div>
                          {true && (
                            <span
                              className="absolute right-3 py-2 animate-fade-in"
                              style={{ animationDuration: "1s" }}
                            >
                              <img
                                src={Verify}
                                alt="Valid Email"
                                className="w-6 h-6"
                              />
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="relative">
                        <label
                          htmlFor="phone"
                          className="sm:block lg:hidden font-semibold text-[16px]"
                        >
                          No. Telp
                        </label>
                        <div className="input-box p-3 border-2 border-[#027FFF] rounded-lg hover:shadow-lg transition duration-300 px-4 py-2 w-full focus:ring focus:ring-blue-200 focus:outline-none">
                          <span className="">
                          {user ? user.phone : "Loading..."}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="action-list flex flex-col lg:text-right text-center gap-6 lg:gap-11">
                <ul className="flex flex-col gap-4 lg:gap-11">
                  <li>
                    <Link
                      to="/profile-info"
                      className={`font-regular text-lg ${
                        activePage === "info-personal" ? "font-semibold underline" : ""
                      } hover:underline`}
                      onClick={() => handlePageChange("info-personal")}
                    >
                      Info Personal
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/password"
                      className={`font-regular text-lg ${
                        activePage === "password" ? "font-semibold underline" : ""
                      } hover:underline`}
                      onClick={() => handlePageChange("password")}
                    >
                      Password
                    </Link>
                  </li>
                  <li>
                    <button
                      className={`font-regular text-lg ${
                        activePage === "delete-account" ? "font-semibold underline" : ""
                      } hover:underline`}
                      onClick={(e) => {
                        e.preventDefault();
                        setShowDeletePopUp(true);
                      }}
                    >
                      Hapus Akun
                    </button>
                  </li>
                  <li>
                    <button
                      className={`font-regular text-lg ${
                        activePage === "delete-account" ? "font-semibold underline" : ""
                      } hover:underline`}
                      onClick={(e) => {
                        e.preventDefault();
                        setShowLogoutPopUp(true);
                      }}
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0">
          <img src={Ellipse} alt="Background" className="" />
        </div>
        {showDeletePopUp && <PopUpDelete setShowPopUp={setShowDeletePopUp} />}
        {showLogoutPopUp && <PopUpLogout setShowPopUp={setShowLogoutPopUp} />}
      </div>
    </div>
  );
};

export default ProfilePagePersonalInfo;

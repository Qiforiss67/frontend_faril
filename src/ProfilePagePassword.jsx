import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Profile from "./assets/image/Profile.svg";
import Ellipse from "./assets/image/Ellipse.svg";
import PopUpUpdate from "./components/PopUpUpdate";
import PopUpDelete from "./components/PopUpDelete";
import PopUpLogout from "./components/PopUpLogOut";
import "./css/ProfilePagePassword.css"
import Navbar from "./components/Navbar";

const ProfilePagePassword = () => {
  const [activePage, setActivePage] = useState("password");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmationError, setConfirmationError] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmationPassword, setShowConfirmationPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(Profile);  // Using a static profile image
  const [showDeletePopUp, setShowDeletePopUp] = useState(false);
  const [showLogoutPopUp, setShowLogoutPopUp] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false); // Control the display of pop-up after submit
  const [showAnimation, setShowAnimation] = useState(false);


  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setNewPassword(value);

    const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (value === "") {
      setPasswordError("");
    } else if (!passwordFormat.test(value)) {
      setPasswordError(
        "Password harus mengandung minimal 8 karakter, dengan huruf besar, huruf kecil, dan angka."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmationChange = (e) => {
    const value = e.target.value;
    setPasswordConfirmation(value);

    if (value === "") {
      setConfirmationError("");
    } else if (value !== newPassword) {
      setConfirmationError("Password tidak cocok.");
    } else {
      setConfirmationError("");
    }
  };

  const isFormValid =
    newPassword &&
    passwordConfirmation &&
    !passwordError &&
    !confirmationError;

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopUp(true); // Show pop-up after submit
  };

  const resetFormFields = () => {
    setNewPassword("");
    setPasswordConfirmation("");
    setPasswordError("");
    setConfirmationError("");
  };


  return (
    <div>
      <Navbar/>
    <div className="profile-page h-screen pt-10 mx-4 sm:mx-10 md:mx-20 lg:mx-32">
      <div className={`container ${showAnimation ? "animate-slide-up" : ""}`}
      style={{
        transition: "transform 0.8s ease-out",
      }}>
        <div className="content-box px-4 sm:px-8 md:px-16">
          <div className="header flex flex-col lg:flex-row justify-between lg:py-10 py-6">
            <div className="text-header flex flex-col">
              <span className="page-title font-semibold text-[24px] sm:text-[32px]">
                Password
              </span>
              <span className="description text-regular text-[16px] sm:text-[18px]">
                You can update your password here.
              </span>
            </div>
            <span className="title font-semibold text-[24px] sm:text-[32px] lg:text-[32px]">
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
              <div className="edit-password flex flex-col w-full lg:w-10/12 gap-4 lg:mb-0">
                <form onSubmit={handleSubmit}>
                  <div className="form lg:flex lg:items-center gap-4 lg:w-11/12 pl-0 lg:pl-12 lg:mb-12">
                    <div className="form-label flex flex-col gap-6 lg:gap-20 w-full lg:w-4/12">
                      <label
                        htmlFor="new-password"
                        className="font-semibold text-[16px] lg:text-[20px] hidden sm:block"
                      >
                        Password Baru
                      </label>
                      <label
                        htmlFor="password-confimation"
                        className="font-semibold text-[16px] lg:text-[20px] hidden sm:block"
                      >
                        Konfirmasi Password
                      </label>
                    </div>
                    <div className="form-input flex flex-col gap-4 sm:gap-20 w-full sm:w-8/12 lg:w-10/12">
                    <div className="w-full flex flex-col relative">
                        <div className="flex flex-col sm:flex-col sm:items-start sm:gap-2">
                        <label htmlFor="phone" className="sm:block lg:hidden font-semibold text-[16px]">Password Baru</label>
                        <div className="flex py-2 w-full">
                          <input
                            type={showNewPassword ? "text" : "password"}
                            id="newpassword"
                            value={newPassword}
                            onChange={handlePasswordChange}
                            placeholder="Masukkan Password Anda..."
                            className="p-3 border border-customBlue rounded-lg flex hover:shadow-lg transition duration-300 px-4 py-2 w-full focus:ring focus:ring-blue-200 focus:outline-none"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setShowNewPassword((prevState) => !prevState)
                            }
                            className="absolute right-3 py-2 text-gray-500 hover:text-gray-700"
                          >
                            {showNewPassword ? (
                              <i className="ri-eye-line text-2xl"></i>
                            ) : (
                              <i className="ri-eye-close-line text-2xl"></i>
                            )}
                          </button>
                          </div>
                        </div>
                        {passwordError && (
                          <div className="error-popup absolute left-0 top-full mt-2 p-3 w-full rounded-lg border-2 border-red-500 bg-red-100 text-red-500 text-sm shadow-lg z-10">
                            {passwordError}
                          </div>
                        )}
                      </div>
                      <div className="w-full flex flex-col relative">
                        <div className="flex flex-col sm:flex-col sm:items-start sm:gap-2">
                        <label htmlFor="phone" className="sm:block lg:hidden font-semibold text-[16px]">Konfirmasi Password</label>
                        <div className="flex py-2 w-full">
                          <input
                            type={showConfirmationPassword ? "text" : "password"}
                            id="passwordconfirmation"
                            value={passwordConfirmation}
                            onChange={handleConfirmationChange}
                            placeholder="Konfirmasi Password Anda..."
                            className="p-3 border border-customBlue rounded-lg flex hover:shadow-lg transition duration-300 px-4 py-2 w-full focus:ring focus:ring-blue-200 focus:outline-none"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setShowConfirmationPassword(
                                (prevState) => !prevState
                              )
                            }
                            className="absolute right-3 py-2 text-gray-500 hover:text-gray-700"
                          >
                            {showConfirmationPassword ? (
                              <i className="ri-eye-line text-2xl"></i>
                            ) : (
                              <i className="ri-eye-close-line text-2xl"></i>
                            )}
                          </button>
                          </div>
                        </div>
                        {confirmationError && (
                          <div className="error-popup absolute left-0 top-full mt-2 p-3 w-full rounded-lg border-2 border-red-500 bg-red-100 text-red-500 text-sm shadow-lg z-10">
                            {confirmationError}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="save-button flex flex-col lg:flex-row gap-4 items-center justify-center py-6 w-full">
                    <button
                      type="button"
                      className="bg-transparent border-2 border-customBlue font-medium w-full sm:w-1/3 h-11 my-2 rounded-lg text-medium text-black text-[16px] hover:shadow-lg transition duration-30"
                    >
                      Kembali
                    </button>
                    <button
                      type="submit"
                      className={`${
                        isFormValid
                          ? "bg-[#027FFF] border-2 border-white font-medium w-full sm:w-1/3 h-11 my-2 rounded-lg text-medium text-white text-[16px] hover:shadow-lg transition duration-30"
                          : "bg-[#A2A2A2] cursor-not-allowed border-2 border-white font-medium w-full sm:w-1/3 h-11 my-2 rounded-lg text-medium text-white text-[16px] transition duration-30"
                      }`}
                      disabled={!isFormValid}
                    >
                      Simpan
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="action-list flex flex-col lg:text-right text-center gap-6 lg:gap-11">
              <ul className="flex flex-col gap-4 lg:gap-11">
                <li>
                  <Link to="/profile"
                    className={`font-regular text-lg sm:text-base md:text-lg ${
                      activePage === "info-personal"
                        ? "font-semibold underline"
                        : ""
                    } hover:underline`}
                    onClick={() => handlePageChange("info-personal")}>
                    Info Personal
                  </Link>
                </li>
                <li>
                  <Link to="/profile-password"
                    className={`font-regular text-lg sm:text-base md:text-lg ${
                      activePage === "password" ? "font-semibold underline" : ""
                    } hover:underline`}
                    onClick={() => handlePageChange("password")}>
                    Password
                  </Link>
                </li>
                <li>
                  <button
                  className={`font-regular text-lg ${activePage === "delete-account" ? "font-semibold underline" : ""} hover:underline`}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowDeletePopUp(true);
                  }}>
                  Hapus Akun
                </button>
                </li>
                <li>
                <button
                  className={`font-regular text-lg ${activePage === "delete-account" ? "font-semibold underline" : ""} hover:underline`}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowLogoutPopUp(true);
                  }}>
                  Log Out
                </button>
              </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 -z-10">
        <img src={Ellipse} alt="Background" className="w-[200px] sm:w-[250px] md:w-[300px]" />
      </div>
      {showDeletePopUp && <PopUpDelete setShowPopUp={setShowDeletePopUp} />}
      {showLogoutPopUp && <PopUpLogout setShowPopUp={setShowLogoutPopUp} />}
      {showPopUp && <PopUpUpdate setShowPopUp={setShowPopUp} />}
    </div>
    </div>
  );
};

export default ProfilePagePassword;

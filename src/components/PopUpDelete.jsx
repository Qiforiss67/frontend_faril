import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PopUpDelete = ({ setShowPopUp }) => {
  const bookingRef = useRef(null);
  const [isExiting, setIsExiting] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (bookingRef.current && !bookingRef.current.contains(event.target)) {
        triggerClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const triggerClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setShowPopUp(false);
    }, 600);
  };

  const handleDeleteAccount = async () => {
    setIsProcessing(true);
    try {
      const response = await fetch("https://backend-api.com/account/delete", {
        method: "DELETE", 
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        localStorage.removeItem("authToken");
        sessionStorage.removeItem("userData");

        navigate("/login");
      } else {
        console.error("Akun gagal dihapus:", await response.text());
      }
    } catch (error) {
      console.error("Error saat menghapus akun:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${isExiting ? "animate-overlay-fade-out" : "animate-overlay-fade-in"}`}
    >
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-600 ${isExiting ? "opacity-0" : "opacity-50"}`}
      ></div>

      <div
        ref={bookingRef}
        className={`relative booking w-[428px] h-[453px] px-6 py-6 mx-8 bg-white shadow-lg rounded-2xl flex flex-col justify-center gap-4 ${isExiting ? "animate-popup-fade-out" : "animate-popup-fade-in"}`}
      >
        <div className="confirmation-message flex flex-col items-center">
          <span className="font-medium text-[32px] text-center px-12 py-2">
            Apakah kamu yakin?
          </span>
          <p className="font-regular text-[20px] text-center px-10 py-2">
            Kamu akan menghapus akun ini, klik kembali jika tidak ingin menghapus akun.
          </p>
        </div>
        <div className="myevent-button flex flex-col py-2">
          <button
            onClick={triggerClose}
            className="bg-[#027FFF] font-regular w-full h-11 my-2 rounded-lg font-medium text-white text-[20px] shadow-md hover:shadow-lg transition duration-300"
          >
            Kembali
          </button>
          <button
            onClick={handleDeleteAccount}
            disabled={isProcessing}
            className={`bg-transparent border-2 ${isProcessing ? "border-gray-400 text-gray-400" : "border-[#027FFF] text-black"} font-medium w-full h-11 my-2 rounded-lg text-[20px] hover:bg-red-300 hover:border-red-500`}
          >
            {isProcessing ? "Memproses..." : "Hapus Akun"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpDelete;

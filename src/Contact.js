import { faMeta } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export const Contact = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
    console.log("clicked");
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="">
      <div className="m-20 h-1/2 w-1/2 mx-auto">
        <h1 className="text-2xl w-1/2 font-brother text-gray-700 p-0 font-bold mx-auto">
          Contact Me
        </h1>
        <div className="shadow shadow-2xl w-1/2 mx-auto p-3 rounded bg-purple-200">
          <p className="font-aladin font-bold">
          Feel free to reach out for project inquiries, compliments, critiques, or just to say hello 😊 – you`re much welcome!
          </p>
          <div className="ml-20">
            <button className="bg-blue-700 rounded text-white p-1 hover:bg-transparent hover:text-gray" onClick={openPopup}>
              Contact
            </button>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-md">
            <div className="flex flex-wrap flex-col">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
             <a  target='_blank' rel="noreferrer" href="https://www.facebook.com/profile.php?id=100091953343560" className='p-2'><FontAwesomeIcon icon={faMeta}/> &nbsp; Meta</a>
             <a href="mailto:edupablo72@gmail.com" className='p-2'><FontAwesomeIcon icon={faEnvelope}/> &nbsp; Email</a>
            </div>
          
          <button onClick={closePopup} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            Close
          </button>
        </div>
      </div>
      )}
    </div>
  );
};

import React, { useState } from "react";

export const ContactPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md">
           
            <button
              onClick={closePopup}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Okay, understood
            </button>
          </div>
        </div>
      )}

      {/* Your link to trigger the pop-up */}
      <a className="mt-10" href="#" onClick={openPopup}>
        Click me to show the pop-up
      </a>
    </>
  );
};

import React, {useState} from "react";

export const PopUp = () => {
    const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };
   

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md">
            <p>This site is actively under development – all for the sake of fun.✨<br/> Feel free to share your ideas on how it can be improved. Also, come back to witness future developments.<br/> Cheers! 👍</p>
            <button onClick={closePopup} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              Okay, understood
            </button>
          </div>
        </div>
      )}
    </>
  );

}
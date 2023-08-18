import React from "react";
import { ReactComponent as Mysvg } from "../src/images/carpenter-svgrepo-com.svg";
import { ReactComponent as Msvg } from "../src/images/brick-wall-wall-svgrepo-com.svg";
import { ReactComponent as Psvg } from "../src/images/plumbing-drink-svgrepo-com.svg";
import { ReactComponent as Asvg } from "../src/images/archicad-svgrepo-com.svg";
export const Services = () => {

    return(
        
        <div className="flex flex-wrap w-auto mx-auto">

            <div className="flex flex-wrap m-5 lg:pl-40 md:pl-40 sm:pl-20">
           <h1 className="text-8xl font-brother text-gray-700 p-0  w-1/2 mb-10 mt-20 font-bold">Services</h1>
           <h1 className="lg:text-xl md:text-xl sm:text-l font-bold">Empowering myself with a range of skills and offering top-notch <br/>&nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;services to pave the way for your success.</h1>
            
            </div>
           
            <div className="flex flex-wrap mt-10 lg:space-x-16 lg:space-x-8 sm:space-x-2 m-5 p-5 h-1/8 ">
            
             {/* Carpentry */}
            <div className="mr-1 shadow shadow-2xl lg:w-1/4 md:w-1/8 p-0 rounded-2xl h-1/8 bg-blue-200">
            <span>
                    <p className="lg:text-4xl md:text-4xl sm:text-2xl font-bold font-brother ml-20">Carpentry</p>
                </span>
            <span>
                <Mysvg className="w-1/2 h-auto"/>
                </span>
                
            </div>
           
              {/* Masonry */}  
            <div className="m-1 bg-green-200 lg:w-1/4 md:w-1/8 p-0 shadow shadow-2xl rounded-2xl">
            <span>
                    <p className="text-4xl font-bold font-brother">Masonry</p>
                </span>
            <span>
                <Msvg className="w-1/2 h-auto"/>
                </span>
                
            </div>
            {/* plumbing */}    
            <div className="m-1 p-1 bg-purple-100 lg:w-1/4 md:w-1/8 p-0 flex justify-center items-center shadow shadow-2xl rounded-2xl">
            <span>
                    <p className="text-4xl font-bold font-brother">Plumbing</p>
                </span>
            <span>
                <Psvg className="w-1/2 h-auto"/>
                </span>
                
            </div>
             {/* CAD */}    
             <div className="mt-2 ml-10 p-1 bg-purple-100 w-1/8 p-0 flex justify-center items-center shadow shadow-2xl rounded-2xl">
            <span>
                    <p className="text-4xl font-bold font-brother">CAD</p>
                </span>
            <span>
                <Asvg className="w-1/2 h-auto"/>
                </span>
                
            </div>
                
            </div>
            
        </div>
    )
}
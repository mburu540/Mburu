import React from "react";
import { ReactComponent as Musvg } from "../src/images/music-controllers-svgrepo-com.svg";
import { ReactComponent as Gsvg } from "../src/images/guitar-svgrepo-com.svg";
import { ReactComponent as Isvg } from "../src/images/accumulationinvestment-svgrepo-com.svg";
import { ReactComponent as Csvg } from "../src/images/coding-html-svgrepo-com.svg";
export const About =()=> {
    return(
        <div>
            <div className="mt-20 m-5 p-5">
              <div className="flex flex-wrap m-5 lg:pl-40 md:pl-40 sm:pl-20"> <p><span className="text-8xl font-brother text-gray-700 font-bold">Hi there,<br/> </span>
            <span className="text-gray-700 font-bold text-5xl font-acorn">I'm Edward Mburu. <br/>A building technology student.</span></p>
            </div>
           <p className="flex flex-wrap m-5 lg:text-2xl font-bold lg:pl-40 md:pl-40 sm:pl-20">Also passionate about:</p> 
                <div className="flex flex-wrap mt-10 lg:space-x-16 lg:space-x-8 sm:space-x-2 m-5 p-5 h-1/8 ">
                    <div className="p-2 mt-10 mr-1 shadow shadow-2xl lg:w-1/4 md:w-1/8 p-0 rounded-2xl h-1/8 bg-yellow-200">
                        <span><Musvg className=" w-1/2 h-auto"/></span>
                        <span className="text-4xl font-bold font-brother">Music production</span>
                    </div>
                    <div className="mt-5 mr-1 shadow shadow-2xl lg:w-1/4 md:w-1/8 p-0 rounded-2xl h-1/8 bg-red-200">
                        <span>
                            <Isvg className="w-1/2 h-auto"/>
                            </span>
                            <span className="text-4xl font-bold font-brother">Investing</span>
                    </div>
                    <div className="mt-1 mr-1 shadow shadow-2xl lg:w-1/4 md:w-1/8 p-0 rounded-2xl h-1/8 bg-purple-300">
                        <span>
                            <Csvg className="w-1/2 h-auto"/>
                            </span>
                            <span className="text-4xl font-bold font-brother">Coding

                            </span>
                    </div>
                    <div className="mt-5 ml-10 p-1  w-1/8 p-0 flex justify-center items-center shadow shadow-2xl rounded-2xl bg-teal-100">
                        <span >
                            <Gsvg className="w-1/2 h-auto"/>
                            </span>
                            <span className="text-4xl font-bold font-brother">
                                Playing the Guitar
                            </span>
                    </div>
                    </div> 
            </div>
            <div className="mx-auto shadow shadow-xl bg-green-200 p-2 m-10 w-1/2">
            <h6>
                <p className="font-brother font-bold">Over the years, I've found deep satisfaction in acquiring new skills: starting with music production in 2020, then delving into personal finance, and more recently, mastering React and Tailwind CSS. Despite school demands, my determination led me to conquer challenges. I've also nurtured my musical talent by learning guitar. This journey fuels my
                     enthusiasm and belief in endless learning.<p>During my free time i like taking nature walks and
                        listening to music</p></p>
            </h6>
            </div>
        </div>
    )
}
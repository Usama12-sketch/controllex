"use client"
import { useEffect } from 'react';
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
export default  function Main (props) {
const [move, setMove] = useState("mt-1")


// <Main
// banner_Logo="/React-icon.svg.png"

// />


    useEffect(() => {
      
  
      function checkboxes () {
        const box = document.getElementById("move")
        const boxTop = box.getBoundingClientRect().top;
        const triggerbottom = (window.innerHeight / 5) * 4;
        
          if (boxTop < triggerbottom) {
      setMove("-ml-10");
          }
        
      };
  
      window.addEventListener('scroll', checkboxes);
      checkboxes();
  
      return () => {
        window.removeEventListener('scroll', checkboxes);
      };
    }, []);
  

    return (<>
        
        <section className="header relative pt-16 items-center flex bg-green-300 hover:bg-green-500 transition-all duration-500 h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4 ">
            <div className="pt-32 sm:pt-0">
              <h2 className="boxes ml-4 font-semibold text-4xl text-blueGray-600">
                Next JS and React.JS coder and Designer  .
              </h2>

              <div className="mt-12 flex">
                 <div  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"> 
                <Link
                  href="/"
                  target="_blank" >
                  Get started
                </Link>
                  </div>

                <div  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg">
                <Link
                  href="/"
                  target="_blank">
                  Github
                </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
          <div id='move' className={`transition-all duration-1000 ml-10 ${move}`}>
        <Image  src={props.banner_Logo} layout='intrinsic' width={400} height={400}></Image>

          </div>
        
      </section>

      
        </>
        
    )
}
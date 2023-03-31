"use client"
import { useEffect } from 'react';

import Image from "next/image";

{/* <Flexbox1

// flex box with 1mage and 1 logo
flex_logo="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png"

flex_banner="https://s3.ap-south-1.amazonaws.com/s3.studytonight.com/curious/uploads/pictures/1569233295-68451.png"

/> */}

export default function Flexbox1 (props) {

    useEffect(() => {
        const boxes = document.querySelectorAll('.boxes2');
    
        const checkboxes = () => {
          const triggerbottom = (window.innerHeight / 5) * 4;
    
          boxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerbottom) {
              box.classList.add('show');
            } else {
              box.classList.remove('show');
            }
          });
        };
    
        window.addEventListener('scroll', checkboxes);
        checkboxes();
    
        return () => {
          window.removeEventListener('scroll', checkboxes);
        };
      }, []);
    
  
    return (<>
<div className=" container mx-auto   overflow-hidden pb-20">
          <div className=" bg-yellow-300 boxes2 flex flex-wrap items-center">
            <div className=" w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className=" text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap text-xl"></i>
                <img src={props.flex_logo} alt="" />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                CSS Components
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                We use React for reuseable components and hence we can offer it at good price .
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Buttons
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Inputs
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Labels
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Menus
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Navbars
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Pagination
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Progressbars
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Typography
                </span>
              </div>
             
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src={props.flex_banner}
                  className="w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3"
                  />
               
            
              </div>
            </div>
            </div>
            </div>
        

                  </>

    )
}
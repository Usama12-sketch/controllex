"use client"
import { useEffect } from 'react';

import Image from "next/image";

{/* <Flex2
// flex box having muti images and logo

flex_image1="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
flex_image2="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
flex_image3="https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png"

flex_logo1="/images.png"
/> */}



export default function Flex2 (props) {

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
  <section className="mt-48 md:mt-40 pb-40 relative bg-gray-500 transition-all duration-700 hover:bg-blue-400">
          <div className="  flex flex-wrap items-center pt-32">
            <div className=" w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className=" justify-center flex flex-wrap relative">
                <div className="boxes2 flex flex-col gap-8 -mt-4 my-4 w-full lg:w-6/12 px-4">

              
                
                    <div className=" -mt-4 bg-blue-500 bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 ">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={props.flex_image1}
                        />
                      <p className="text-lg text-white mt-4 font-semibold">
                        ReactJS
                      </p>
                    </div>
                  
             
                    <div className=" -mt-4 bg-slate-500 bg-blueGray-700 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={props.flex_image2}
                        
                        />
                      <p className="text-lg text-white mt-4 font-semibold">
                        NextJS
                      </p>
                    </div>
                
                <div className=" my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                 
                    <div className=" boxes2 -mt-4 bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={props.flex_image3}
                        
                        />
                      <p className="text-lg text-white mt-4 font-semibold">
                        JavaScript
                      </p>
                    </div>
                        </div>
              
                 
                  
                </div>
              </div>
            </div>

            <div className="boxes2 bg-green-300 w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                      <Image  src={props.flex_logo1} layout='intrinsic' width={400} height={400}></Image>
                <i className="fas fa-drafting-compass text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Javascript Components
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
               here are the components useful we offer .
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                We created a set of Components that are dynamic and come to help
                you.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Alerts
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Dropdowns
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Menus
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Modals
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Navbars
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Popovers
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Tabs
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Tooltips
                </span>
              </div>
             
            </div>
          </div>
      
           </section>
 
                  </>

    )
}
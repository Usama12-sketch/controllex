"use client"
import { useEffect } from 'react';

{/*

<Details

//  details imges and multi logo numbering col
details_Src1="/React-icon.svg.png"
details_Src2="/React-banner.jpg"

logo1="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/800px-Tailwind_CSS_Logo.svg.png"
logo2="https://reactjs.org/logo-og.png"
logo3="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
logo4="https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png"
/> 

*/}


import Image from "next/image";
export default function Details (props){

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
    
  
    return (
        <>
        <div className='relative my-40'>

       
        <div className="container mx-auto">
          <div className="boxes2  flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative  flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <Image
                  alt="..." width={400} height={400}
                  src={props.details_Src1}
                  className="w-full align-middle rounded-t-lg"
                />
            
        <Image  src={props.details_Src2} layout='intrinsic' width={400} height={240}></Image>
             
              </div>
            </div>

            <div className="boxes2 w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <img src={props.logo1} alt=""  />
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Responsive CSS 
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                     Building website with vanila CSS and  <span className='text-blue-500'>Tailwind CSS</span> 
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <img src={props.logo2} alt="" />
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        React components
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        We also feature many dynamic components for React,
                        NextJS.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <img src={props.logo3} alt="" />
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Single page Applications</h6>
                      <p className="mb-4 text-blueGray-500">
                        we povide multiple pages with single page Application Through React Js components embeded in NextJS.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                        <img src={props.logo4} alt="" />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Documentation
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                       We can provide for you Souce code on demand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
              </div>
           
        </>
    )
}
import { useState } from 'react'

export default function Register() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')

    let data = {
        name,
        email,
        message
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
            console.log('Response succeeded!')
            setSubmitted(true) 
            setName('')
            setEmail('')
            setMessage('')
        }
    })
  }

  return (
    <div className={`container`}>
      < form className={`main`} >

        < formGroup className={`inputGroup`} >
          < label htmlFor='name'>Name</label>
          < input type='text' onChange={(e)=>{setName(e.target.value)}} name='name' className={`inputField`} />
        </formGroup>

        < formGroup className={`inputGroup`} >
          < label htmlFor='email'>Email</label>
          < input type='email' onChange={(e)=>{setEmail(e.target.value)}} name='email' className={`inputField`} />
        </formGroup>

        < formGroup className={`inputGroup`} >
          < label htmlFor='message'>Message</label>
          < input type='text' onChange={(e)=>{setMessage(e.target.value)}} name='message' className={`inputField`} />
        </formGroup>

        < input type='submit' onClick={(e)=>{handleSubmit(e)}}/>
      </form >
    </div>
  )
}

// import React from 'react'

// const index = () => {
//   return (
//     <>
//       <div
//   class="overflow-hidden bg-[rgba(230,_243,_255,_0.75)] relative flex flex-col w-full items-start pt-48 pb-56 px-12"
//   id="LoginPageRoot"
// >
//   <div>
//   <img
//     src="https://file.rendit.io/n/0cVjXuoU07WeNtyaCJVE.svg"
//     class="w-[526px] h-[661px] absolute top-[143px] left-6"
//     />
//   <img
//     src="https://file.rendit.io/n/dRPwENbiQp64t0TGookq.svg"
//     class="w-[530px] h-[607px] absolute top-20 left-24"
//   />
//   <img
//     src="https://file.rendit.io/n/kWR9MGXFx9Ozcf3X40OT.svg"
//     class="w-[550px] h-[469px] absolute top-[488px] left-0"
//   />
//   <img
//     src="https://file.rendit.io/n/hBBcNk7ScCt9JFgSxU8u.png"
//     class="relative"
//     id="MainImage"
//     />
//     </div>
//   <div class="w-3/5 h-[1024px] bg-[#fcfeff] absolute top-0 left-[595px] flex flex-col justify-end gap-4 items-center px-32 py-10 rounded-tl-[25px] rounded-bl-[25px]">
//     <div class="text-2xl font-['Poppins'] font-semibold mb-10" id="Title">
//       Create your Free Account
//     </div>
//     <div class="self-stretch flex flex-col items-start mb-6 ml-px">
//       <label htmlFor="">

//     Full Name
//       </label>
//       <input class="text-xl font-['Poppins'] font-medium text-[#7c838a] ml-px" />
        
//       <div class="self-stretch relative flex flex-col">
//         <div class="text-xl font-['Poppins'] text-black/50 absolute top-4 left-10 h-8 w-64">
//           Enter your Fulll Name here
//         </div>
//         <div
//           class="bg-[rgba(176,_186,_195,_0.4)] relative h-16 shrink-0 rounded-[20px]"
//           id="Input2"
//         />
//       </div>
//     </div>
//     <div class="self-stretch flex flex-col items-start mb-6 ml-px">
//       <div class="text-xl font-['Poppins'] font-medium text-[#7c838a] ml-px">
//         Email
//       </div>
//       <div class="self-stretch relative flex flex-col">
//         <div class="text-xl font-['Poppins'] text-black/50 absolute top-4 left-10 h-8 w-[210px]">
//           Enter your Email here
//         </div>
//         <div
//           class="bg-[rgba(176,_186,_195,_0.4)] relative h-16 shrink-0 rounded-[20px]"
//           id="Input1"
//         />
//       </div>
//     </div>
//     <div class="self-stretch flex flex-col items-start mb-6 ml-px">
//       <div class="text-xl font-['Poppins'] font-medium text-[#7c838a] ml-px">
//         Password
//       </div>
//       <div class="self-stretch relative flex flex-col">
//         <div class="text-xl font-['Poppins'] text-black/50 absolute top-4 left-10 h-8 w-64">
//           Enter your Password here
//         </div>
//         <div
//           class="bg-[rgba(176,_186,_195,_0.4)] relative h-16 shrink-0 rounded-[20px]"
//           id="Input"
//         />
//       </div>
//     </div>
//     <button class="flex flex-col w-3/5" id="ButtonCreateAcc">
//       <button class="bg-[#f9ed32] flex flex-col justify-center pl-16 h-16 shrink-0 items-start rounded-lg">
//         <div class="text-2xl font-['Poppins'] font-medium ml-2" id="BuyAccount">
//           Create Account
//         </div>
//       </button>
//     </button>
//     <div class="text-lg font-['Poppins'] text-[#7c838a] self-start mb-6 ml-1">
//       Already have a account?<div class="contents"> </div>
//       <div class="text-[#f9ed32] contents">Log in</div>
//     </div>
//     <div class="text-2xl font-['Poppins'] font-medium text-[#b0bac3]">
//       - OR -
//     </div>
//     <div class="flex flex-row mb-16 gap-20 w-5/6 items-start">
//       <div class="relative flex flex-col pb-1 w-2/5">
//         <button
//           class="w-56 h-12 absolute top-0 left-0 flex flex-col items-start pt-1 pb-px px-2"
//           id="ButtonGoogle"
//         >
//           <img
//             src="https://file.rendit.io/n/qepqCJfPPoCtoJNM9qAE.png"
//             class="w-12"
//             id="Google"
//           />
//         </button>
//         <div class="text-sm font-['Poppins'] font-medium text-[#7c838a] absolute top-4 left-16 h-10 w-2/3">
//           Sing up with Google
//         </div>
//         <button class="border-solid border-[#12ff7f] relative h-12 shrink-0 border rounded-lg" />
//       </div>
//       <div class="relative flex flex-col pb-1 w-2/5">
//         <button
//           class="w-56 h-12 absolute top-0 left-0 flex flex-col items-start pt-1 pb-px px-2"
//           id="ButtonGitHub"
//         >
//           <img
//             src="https://file.rendit.io/n/gdjXvbtcLiol1b2RsgD5.png"
//             class="w-12"
//             id="GitHub"
//           />
//         </button>
//         <div class="text-sm font-['Poppins'] font-medium text-[#7c838a] absolute top-4 left-16 h-10 w-3/5">
//           Sing up with GitHub
//         </div>
//         <button class="border-solid border-[#12ff7f] relative h-12 shrink-0 border rounded-lg" />
//       </div>
//     </div>
//     <div class="text-xl font-sans text-[#7c838a]">
//       Reserved directs to Leo Barreto
//     </div>
//   </div>
// </div>

//     </>
//   )
// }

// export default index


// import React from 'react';

// const Index = () => {
//   return (
//     <div className="overflow-hidden bg-[rgba(230,_243,_255,_0.75)] relative flex flex-col w-full items-start pt-48 pb-56 px-12" id="LoginPageRoot">
//       <div id="Fixed Design Images">
//         {/* Images go here */}
//         <img
//     src="https://file.rendit.io/n/0cVjXuoU07WeNtyaCJVE.svg"
//     class="w-[526px] h-[661px] absolute top-[143px] left-6"
//     />
//   <img
//     src="https://file.rendit.io/n/dRPwENbiQp64t0TGookq.svg"
//     class="w-[530px] h-[607px] absolute top-20 left-24"
//   />
//   <img
//     src="https://file.rendit.io/n/kWR9MGXFx9Ozcf3X40OT.svg"
//     class="w-[550px] h-[469px] absolute top-[488px] left-0"
//   />
//   <img
//     src="https://file.rendit.io/n/hBBcNk7ScCt9JFgSxU8u.png"
//     class="relative"
//     id="MainImage"
//     />
 
//       </div>
//       <div className="w-3/5 h-[1024px] bg-[#fcfeff] absolute top-0 left-[595px] flex flex-col justify-end gap-4 items-center px-32 py-10 rounded-tl-[25px] rounded-bl-[25px]">
//         <div className="text-2xl font-['Poppins'] font-semibold mb-10" id="Title">
//           Create your Free Account
//         </div>
//         {/* Input fields go here */}
//         <button className="flex flex-col w-3/5" id="ButtonCreateAcc">
//           <button className="bg-[#f9ed32] flex flex-col justify-center pl-16 h-16 shrink-0 items-start rounded-lg">
//             <div className="text-2xl font-['Poppins'] font-medium ml-2" id="BuyAccount">
//               Create Account
//             </div>
//           </button>
//         </button>
//         <div class="text-lg font-['Poppins'] text-[#7c838a] self-start mb-6 ml-1">
//       Already have a account?<div class="contents"> </div>
//       <div class="text-[#f9ed32] contents">Log in</div>
//     </div>
//     <div class="text-2xl font-['Poppins'] font-medium text-[#b0bac3]">
//       - OR -
//     </div>
//     <div class="flex flex-row mb-16 gap-20 w-5/6 items-start">
//       <div class="relative flex flex-col pb-1 w-2/5">
//         <button
//           class="w-56 h-12 absolute top-0 left-0 flex flex-col items-start pt-1 pb-px px-2"
//           id="ButtonGoogle"
//         >
//           <img
//             src="https://file.rendit.io/n/qepqCJfPPoCtoJNM9qAE.png"
//             class="w-12"
//             id="Google"
//           />
//         </button>
//         <div class="text-sm font-['Poppins'] font-medium text-[#7c838a] absolute top-4 left-16 h-10 w-2/3">
//           Sing up with Google
//         </div>
//         <button class="border-solid border-[#12ff7f] relative h-12 shrink-0 border rounded-lg" />
//       </div>
//       <div class="relative flex flex-col pb-1 w-2/5">
//         <button
//           class="w-56 h-12 absolute top-0 left-0 flex flex-col items-start pt-1 pb-px px-2"
//           id="ButtonGitHub"
//         >
//           <img
//             src="https://file.rendit.io/n/gdjXvbtcLiol1b2RsgD5.png"
//             class="w-12"
//             id="GitHub"
//           />
//         </button>
//         <div class="text-sm font-['Poppins'] font-medium text-[#7c838a] absolute top-4 left-16 h-10 w-3/5">
//           Sing up with GitHub
//         </div>
//         <button class="border-solid border-[#12ff7f] relative h-12 shrink-0 border rounded-lg" />
//       </div>
//     </div>
//     <div class="text-xl font-sans text-[#7c838a]">
//       Reserved directs to Leo Barreto
//     </div>
  
//         {/* Other elements go here */}
//       </div>
//     </div>
//   );
// };

// export default Index;


// const LoginPage = () => {
//   return (
//     <div className="flex lg-flex-row md-flex-row flex-col ">
//       <div
//         className="overflow-hidden bg-[rgba(230,_243,_255,_0.75)] relative flex flex-col w-full items-start pt-48 pb-56 px-12"
//         id="LoginPageRoot"
//       >
//         <BackgroundImages />

//         <div className="w-3/5 h-[1024px] bg-[#fcfeff] absolute top-0 left-[595px] flex flex-col justify-end gap-4 items-center px-32 py-10 rounded-tl-[25px] rounded-bl-[25px]">
//           {/* Other components */}
//           <FormInput label="Full Name" placeholder="Enter your Full Name here" />
//           <FormInput label="Email" placeholder="Enter your Email here" />
//           <FormInput label="Password" placeholder="Enter your Password here" />

//           <Button text="Create Account" backgroundColor="#f9ed32" />

//           {/* ... */}
//           {/* Other components */}
//           <SocialButton
//             iconSrc="https://file.rendit.io/n/qepqCJfPPoCtoJNM9qAE.png"
//             text="Sign up with Google"
//           />
//           <SocialButton
//             iconSrc="https://file.rendit.io/n/gdjXvbtcLiol1b2RsgD5.png"
//             text="Sign up with GitHub"
//           />

//           {/* ... */}
//           {/* Other components */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

// const SocialButton = ({ iconSrc, text }) => {
//   return (
//     <div className="relative flex flex-col pb-1 w-2/5">
//       <button
//         className="w-56 h-12 absolute top-0 left-0 flex flex-col items-start pt-1 pb-px px-2"
//       >
//         <img src={iconSrc} className="w-12" alt={text} />
//       </button>
//       <div className="text-sm font-['Poppins'] font-medium text-[#7c838a] absolute top-4 left-16 h-10 w-2/3">
//         {text}
//       </div>
//       <button className="border-solid border-[#12ff7f] relative h-12 shrink-0 border rounded-lg" />
//     </div>
//   );
// };

// const Button = ({ text, backgroundColor }) => {
//   return (
//     <button
//       className={`bg-${backgroundColor} flex flex-col justify-center pl-16 h-16 shrink-0 items-start rounded-lg`}
//     >
//       <div className="text-2xl font-['Poppins'] font-medium ml-2" id="BuyAccount">
//         {text}
//       </div>
//     </button>
//   );
// };


// const FormInput = ({ label, placeholder }) => {
//   return (
//     <div className="self-stretch flex flex-col items-start mb-6 ml-px">
//       <div className="text-xl font-['Poppins'] font-medium text-[#7c838a] ml-px">
//         {label}
//       </div>
//       <div className="self-stretch relative flex flex-col">
//         <input className="text-xl font-['Poppins'] text-black/50 absolute top-4 left-10 h-8 w-64"  placeholder={placeholder} />
         
        
//         <div className="bg-[rgba(176,_186,_195,_0.4)] relative h-16 shrink-0 rounded-[20px]" />
//       </div>
//     </div>
//   );
// };


// export const BackgroundImages = () => {
//   return (
//     <div id="Fixed Design Images">
//       <img
//     src="https://file.rendit.io/n/0cVjXuoU07WeNtyaCJVE.svg"
//     class="w-[526px] h-[661px] absolute top-[143px] left-6"
//     />
//   <img
//     src="https://file.rendit.io/n/dRPwENbiQp64t0TGookq.svg"
//     class="w-[530px] h-[607px] absolute top-20 left-24"
//   />
//   <img
//     src="https://file.rendit.io/n/kWR9MGXFx9Ozcf3X40OT.svg"
//     class="w-[550px] h-[469px] absolute top-[488px] left-0"
//   />
//   <img
//     src="https://file.rendit.io/n/hBBcNk7ScCt9JFgSxU8u.png"
//     class="relative"
//     id="MainImage"
//     />
//       {/* Add the image elements here */}
//     </div>
//   );
// };




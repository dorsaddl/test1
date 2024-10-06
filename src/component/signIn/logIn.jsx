import React, {useState} from 'react'
const LogIn = () => {
    return (
        <div className="bg-[#F3F4F6]  w-screen h-screen flex">
    <div className="border border-black-500 h-[500px] hover:text-black-1000 w-[1136px] m-auto flex bg-white  rounded-lg

 ">

<div className="border border-purple-500 h-[500px] w-[1136px] rounded-lg  "></div>


<div className=" h-[500px] w-[1136px] rounded-lg pl-[20%] flex-colum gap-4 pt-[60px]">

    
<div className=" h-[55px] w-[327px] ">

<div className=" border border-pink-500 w-[89px] h-[50px]  float-right"></div>
<div className="  w-[214px] h-[55px]  float-right mr-[10px]">
    <h3 className="text-xl font-bold text-black-800 text-right w-auto   rounded-lg"> آکادمی سپهر</h3>
</div>


</div>
<div className=" h-[40px] w-[327px]">
    <h3 className="text-xl font-bold text-black-800 text-right w-auto "> ثبت نام</h3>
</div>


<div className=" h-[27px] w-[327px]">
    <h2 className="text-xs font-bold text-black-800 text-right   "> حساب کاربری دارید؟ </h2>

    <div className="ml-[55%] mt-[-5%] text-xs">
            <a href="#" className=" text-blue-500 hover:text-blue-800 underline" target="-blank" 
            rel="noopener noreferrer "> 
وارد شوید 
            </a> </div>
</div>


<div className="border border-purple-500 h-[160px] w-[327px]"></div>

<div className=" h-[53px] w-[327px] text-center rounded-lg ">
    <h3 className='text-xl h-[53px] font-sans text-white bg-[#436E8E] rounded-lg '> ادامه</h3>
</div>
<div className="  h-[19px] w-[327px]">

<div className="text-xs">
            <a href="#" className=" text-#8D8D8D-500 hover:text-#8D8D8D-800 underline" target="-blank" 
            rel="noopener noreferrer "> 
قوانین و شرایط
            </a> </div>

</div>



</div>

    </div>
    </div>
    )
  }
  
  export default LogIn
import React,{useState} from 'react';
import Log from './Log'
const LogIn = () => {

    return (



        <div className="bg-[#F3F4F6]  w-screen h-screen flex">




            
    <div className="border border-black-500 h-[580px] hover:text-black-1000 w-[1136px] m-auto flex bg-white  rounded-lg

">


<div className=" h-[550px] w-[1136px] rounded-lg  ">
<img src="./Image.png" alt=""  className='w-[100%] h-[100%]'/>




</div>


<div className=" h-[500px] w-[1136px] rounded-lg pl-[20%] flex-colum gap-4 pt-[60px]">
    
<div className=" h-[55px] w-[327px] ">

<div className="  w-[85px] h-[50px]  float-right">
    <img src="./Logo.png" alt="" className='h-[100%] w-[100%]' />
</div>
<div className="  w-[214px] h-[55px]  float-right mr-[10px]">
    <h3 className="text-xl font-bold text-black-800 text-right w-auto   rounded-lg"> آکادمی سپهر</h3>
</div>
</div>



<div className=" h-[40px] w-[327px]">
    <h3 className="text-xl font-bold text-black-800 text-right w-auto "> ثبت نام</h3>
</div>


<div className=" h-[27px] w-[327px]">
    <h2 className="text-sm font-semibold text-black-800 text-right  "> حساب کاربری دارید؟ </h2>

    <div className="ml-[48%] mt-[-5%] text-xs">
            <a href="#" className=" text-blue-500 hover:text-blue-800 underline" target="-blank" 
            rel="noopener noreferrer "> 
وارد شوید 
            </a> </div>
</div>



<div className=" h-[290px] w-[362px]">
<Log />
</div>





{/* <div className=" h-[53px] w-[327px] text-center rounded-lg ">
    <h3 className='text-xl h-[53px] font-sans text-white bg-[#436E8E] rounded-lg '> ادامه</h3>
</div> */}
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
export default LogIn;
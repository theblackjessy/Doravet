import React from 'react'
import { useState } from 'react';
import Link from 'next/link'
import Finger from '../../../public/dashboard/icons/Finger';
import Button from "../form/Button"
import Ellipse from '../../../public/assets/icon/Ellipse';
import Profile from '../../../public/dashboard/icons/Profile';



const WalletVote = ({handleVoteSubmit}) => {
    const [selectedOption, setSelectedOption] = useState('option1'); 
    const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (selectedOption === '') {
        alert('Please select an option.');
      } else {
        // Handle form submission or other actions
        console.log('Selected option:', selectedOption);
      }
    }

   
  return (
    <section className={`h-screen  w-full bg-[#fafafa]`}>
 <nav className='flex justify-between text-[#000000] bg-[#fff] p-8' >
      <div className='flex gap-2 justify-center items-center'>
          <Finger />
        <h3 className='text-[23.25px] text-[#095494] font-bold'>Doravet</h3>
      </div>
      <div className='flex justify-center items-center gap-5 text-[#000]'>
      <h3 className='text-[16px] text-[#095494]'>View Results</h3>
      <h3 className='text-[16px]'>Support</h3>
      <aside className='flex justify-between items-center gap-3 p-[12px] rounded-lg bg-[#F5F2F6]'>
          <p>Oxbaaf...75cec7</p>
          <Ellipse />
      </aside>
      <Profile/>
       </div>
    </nav>
      <main className="flex flex-col gap-3 py-24">
        <h3 className='text-[24px]  flex justify-center align-center font-[750] text-[#262626] py-2 '> 
       Employee of the year poll</h3>
       <aside className='border-2 inline-flex flex-col justify-center align-center m-auto w-[450px] bg-[#fff]'>
       <div className='p-6'>
      
       <h3 className='text-[24px]  flex  align-center font-[750] text-[#262626] pb-2 py-2 '> 
       Employee of the year </h3>
       <div>
       <hr />
       <label class="inline-flex items-center py-4">
       <input type="radio" 
       className="form-radio text-indigo-600 w-5 h-5" 
       name="radio"
        value="option1" 
        checked={selectedOption === 'option1'}
        onChange={handleOptionChange}
        required/>
       <span className="ml-2 text-[16px">Idan Highdan</span>      
</label>
<hr/>
</div>
<div> 
       <label class="inline-flex items-center py-4">
       <input type="radio"
        className="form-radio text-indigo-600 w-5 h-5"
         name="radio"
          value="option2"
          checked={selectedOption === 'option2'}
        onChange={handleOptionChange}
           required />
       <span className="ml-2">Emmanuel Oshiputu</span>      
</label>
</div>
<div> 
  <hr/>
       <label class="inline-flex items-center py-4">
       <input type="radio"
        className="form-radio text-indigo-600 w-5 h-5"
         name="radio"
          value="option3"
          checked={selectedOption === 'option3'}
        onChange={handleOptionChange}
          required/>
       <span className="ml-2">Emmanuel Oshiputu</span>      
</label>
</div>

<Link href={`/wallet/[id].js`} >
<Button text={"Submit"} handleClick={handleSubmit} />
 </Link>

</div>

       </aside>

      </main>
   </section> 
  )
}

export default WalletVote
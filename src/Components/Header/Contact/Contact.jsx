import React from 'react';
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
const Contact = () => {
    const notify = () => toast('Successful your contact!');
    return (
        <div className='my-10 md:my-16'>
            <section className='gap-5  md:flex justify-around p-5 mx-auto md:max-w-4/5'>
                <div className='p-2 mb-10'>
                    <h1 className='text-xl font-bold'>Get In Touch</h1>
                    <h1 className='text-4xl font-bold '>Contact Us</h1>
                    <p className='text-md text-neutral-600 font-medium '>Give Us a Call & Start Your Journey Towards Growth.</p>
                    <p className='text-md text-neutral-600 font-medium my-10'>Prime Website Design is committed to excellence and make your design experience memorable and remarkable. Let us help you in standing out and reaching the maximum of your potential.</p>

                    <h1 className= ' text-2xl flex text-center items-center gap-2 font-medium text-gray-950 my-5'><BsFillTelephoneInboundFill /><span>(777)-330-562</span></h1>
                    <h1 className='flex text-center items-center gap-2 font-medium text-gray-950 text-2xl'><BsFillEnvelopeAtFill /><span>roydip891@gmail.com</span></h1>
                </div>
                <div className="rounded-2xl p-4 flex-1/2 bg-[url('https://i.ibb.co.com/XfzCjNDK/pexels-padrinan-255379.jpg')] bg-repeat bg-center">
                    <h1 className='font-extrabold text-3xl my-5 '>Schedule Your Call Now!</h1>
                    <div className='flex  gap-2 my-2 '>
                        <div className=' w-1/2 '>
                            <h1 className='text-xl font-medium'>Your Name</h1>
                            <input type="text" placeholder="Your Name" className="input w-full justify-start" />
                        </div>
                        <div className='w-1/2'>
                            <h1 className='text-xl font-medium'>Your Email</h1>
                            <input type="email" placeholder="Your Email" className="input w-full " />
                        </div>
                    </div>

                    <div className='flex  gap-2 my-2'> 
                        <div className='w-1/2'>
                            <h1 className='text-xl font-medium'>Your Phone</h1>
                            <input type="number" placeholder="Phone Number" className="input w-full" />
                        </div>
                        <div className='w-1/2'>
                            <h1 className='text-xl font-medium'>Date</h1>
                            <input type="text" placeholder="Data" className="input w-full" />
                        </div>
                    </div>
                    <h1 className='text-xl font-medium my-2'>Time</h1>
                    <input type="text" placeholder="Time" className="input w-full" />


                    <fieldset className="fieldset mb-10">
  <legend className="fieldset-legend text-xl font-medium">Message</legend>
  <textarea className="textarea h-24 w-full" placeholder="Message"></textarea>
  
</fieldset>
 <div>
 <button  onClick={notify} className='btn w-full bg-gradient-to-r from-pink-400 to-amber-400 hover:from-amber-500 hover:to-pink-500 transition-all duration-300 font-bold text-2xl py-7 rounded-xl mb-5'>sent</button>
 <ToastContainer />

 </div>
                </div>
            </section>
 
        </div>
    );
};

export default Contact;
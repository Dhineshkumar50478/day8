import React from 'react'
import logo from './coffeeshop1.jpg'
import coffee1 from './coffee1.jpg'
import coffee2 from './coffee.2.jpg'
import coffee3 from './coffee3.jpg'
import coffee4 from './coffee4.jpg'
import coffee5 from './coffee5.jpg'
import insta from './insta.jpg'
import fb from './fb.png'
import wa from './wa.png'
import twitter from './twitter.png'
import mess from './messanger.png'
import play from './play1.png'
import apple from './apple1.jpg'

function Webpage() {
  return (
    <div className='h-3000'>
      <div className='flex justify-between'>
        <div className='flex'>
            <p className='text-black mx-9'>IMAGI <span className='text-yellow-700'>Coffee</span></p>
         </div>
         <div className='flex flex-row gap-5 mt-3'>
          <p className=''>Home</p>
          <p className=''>Story</p>
          <p className=''>Menu</p>
          <p className=''>Space</p>
          <p className=''>Community</p>
          <p className=''>News</p>
          <button className='bg-yellow-700 p-1'>Order</button>
          <button className='mr-12 border-slate-500'>Sign in</button>
         </div>
      </div>

      <div img-block className=' bg-orange-50'>
        <h1 className='mt-20 text-5xl'>Our News</h1>
        <p className='mt-5'>Get the last updates and deeper coffee experience from IMAJI Coffee</p>
        <img src={logo} alt='img' className=' ml-10 mt-5 my-3 w-11/12 h-76'/>
        <div className='flex justify-start'>
        <p className='ml-8'>Collabration to Develop Coffee and Beverage Indhustry Expertise in Indonesia </p>
        </div> 
        <div className='flex justify-start'>
        <p className='text-stone-600  text-xs ml-8 '>4min</p>  
          <p className='text-stone-600 text-xs ml-2 mb-4 '>August 19 2022</p>
          </div>  
      </div>

      <div block className='p-4'>
        <div block1 className='flex w-196 shadow-lg h-44 '>
          <div block1-left className=' shadow-lg h-44 '>
            <img src={coffee1} alt='img' className=' h-40 w-60 ml-4 mt-2 mb-4'/>
          </div>
          <div block1-right className=''>
             <p className='mt-8 text-2xl ml-4'>Visited Doesoen Sirap Coffee,The</p>
             <p className=' text-2xl ml-8'>Producer of Robusta in Central Java</p> 
             <div className='flex'>
              <p className='text-stone-600  text-xs ml-8'>4min .</p>
              <p className='text-stone-600  text-xs ml-2'>August 19 2022</p>
             </div>
          </div>
        </div>

        <div block1 className='flex w-196 shadow-lg h-44 '>
          <div block1-left className=' shadow-lg h-44 '>
            <img src={coffee2} alt='img' className=' h-40 w-60 ml-4 mt-2 mb-4'/>
          </div>
          <div block1-right className=''>
             <p className='mt-8 text-2xl ml-8'>Cold Brew,How to Drink Cold</p>
             <p className=' text-2xl ml-8'>Coffee is More Enjoyable one</p> 
             <div className='flex'>
              <p className='text-stone-600  text-xs ml-8'>4min .</p>
              <p className='text-stone-600  text-xs ml-2'>August 19 2022</p>
             </div>
          </div>
        </div>

        <div block1 className='flex w-196 shadow-lg h-44 '>
          <div block1-left className=' shadow-lg h-44 '>
            <img src={coffee3} alt='img' className=' h-40 w-60 ml-4 mt-2 mb-4'/>
          </div>
          <div block1-right className=''>
             <p className='mt-8 text-2xl ml-8'>Meet Coffee Tonic,the Sensation of</p>
             <p className=' text-2xl ml-8'>Drinking Coffee and Flavored Soda</p> 
             <div className='flex'>
              <p className='text-stone-600  text-xs ml-8'>4min .</p>
              <p className='text-stone-600  text-xs ml-2'>August 19 2022</p>
             </div>
          </div>
        </div>
        
        <div block1 className='flex w-196 shadow-lg h-44 '>
          <div block1-left className=' shadow-lg h-44 '>
            <img src={coffee4} alt='img' className=' h-40 w-60 ml-4 mt-2 mb-4'/>
          </div>
          <div block1-right className=''>
             <p className='mt-8 text-2xl '>Work Shop Coffee Sharing Session and prepare</p>
             <p className=' text-2xl ml-8'>Happily with my self and other also ion the session</p> 
             <div className='flex'>
              <p className='text-stone-600  text-xs ml-8'>4min .</p>
              <p className='text-stone-600  text-xs ml-2'>August 19 2022</p>
             </div>
          </div>
        </div>

        <div block1 className='flex w-196 shadow-lg h-44 '>
          <div block1-left className=' shadow-lg h-44 '>
            <img src={coffee5} alt='img' className=' h-40 w-60 ml-4 mt-2 mb-4'/>
          </div>
          <div block1-right className=''>
             <p className='mt-8 text-2xl ml-4'>Workshop Coffee Brewing and Hottest</p>
             <p className=' text-2xl ml-8'>Its give some life Quotes in the sesssion</p> 
             <div className='flex'>
              <p className='text-stone-600  text-xs ml-8'>4min .</p>
              <p className='text-stone-600  text-xs ml-2'>August 19 2022</p>
             </div>
          </div>
        </div>
        
        
        
      </div>

      <div className='flex justify-center'>
        <button className='mt-12 mb-20'>Load more</button>
      </div>

      <div className='bg-slate-950 h-80 '>
       <p className='text-white text-5xl p-12'>Our Location</p>
       <p className='text-white text-xs'>2 Los Angles CA</p>
       <p className='text-white text-xs'>41 Prospect Rd, Oakland Park, FL 33334, United States</p>
       <p className='text-white text-xs'>Service options: Dine-in · Takeaway · Delivery</p>
       <p className='text-white text-xs mb-5'>Hours:Open 6am to Closes 9 pm</p>
       <hr
   style={{
   background: "white",
   height: "2px",
   border: "none",
   }}
/>
       <div className='flex justify-between mt-4'>
       <div className='flex gap-2'>
          <img src={insta} alt='img' className='h-5 w-5 rounded ml-8'/>
          <img src={fb} alt='img' className='h-5 w-5 rounded'/>
          <img src={wa} alt='img' className='h-5 w-5 rounded'/>
          <img src={twitter} alt='img' className='h-5 w-5 rounded'/>
          <img src={mess} alt='img' className='h-5 w-5 rounded'/>
      </div>
      <div className='flex gap-5'>
      <img src={play} alt='img' className='h-5 w-5 '/>
          <img src={apple} alt='img' className='h-5 w-5 mr-24'/>
      </div>
       </div>

       <div className='flex justify-between'>
        <p className='text-yellow-200 text-xs ml-8 mt-10'>TermsFeed is the world's leading generator of legal agreements for websites</p>
        <p className='text-yellow-200 text-xs ml-4 mt-10 mr-8'>apps With TermsFeed, you can generate:</p>
       </div>
       
      </div>
    
     
      
      
    </div>
  )
}   

export default Webpage
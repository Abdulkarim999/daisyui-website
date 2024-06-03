// src/App.jsx
import React from 'react';


const App = () => {
  return (
  <div>
    <div className="navbar bg--500">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">MAKIX LTD</a>
  </div>
  <div className="flex-none text-white text-xl">
    <ul className="menu menu-horizontal px-1 ">
      <li><a>Home</a></li>
      <li><a>Services</a></li>
      <li><a>About Us</a></li>
      <li><a>Contact Us</a></li>
      <li><a>Sign Up</a></li>
      <li><a>Sign in</a></li>

     
     
    </ul>
  </div>
</div>

<div className="grid grid-flow-col gap-5 align-center justify-center mt-2 text-center auto-cols-max">

  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":44}}></span>
    </span>
    sec
  </div>
</div>
<div  className='align-center justify-center text-center mt-3 text-3xl text-white '>
<h1>Coming soon</h1>
</div>


<div className="hero min-h-screen  ">
  <div className="hero-content text-white flex-col gap-40 lg:flex-row">
    <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg   shadow-2xl"  />
    <div>
      <h1 className="text-5xl text-white font-bold">Discover Beutiful Wonders</h1>
      <p className="py-6">Tourism is the activity of traveling to and exploring different places for leisure, adventure, cultural experiences, or business purposes. It encompasses a wide range of activities, including sightseeing, visiting historical sites, experiencing local cultures and cuisines, enjoying natural landscapes, and participating in recreational activities. Tourism contributes significantly to the global economy by creating jobs, fostering international connections, and promoting cultural exchange. It also encourages the preservation of natural and cultural heritage sites. With the rise of sustainable tourism, there's a growing focus on minimizing the environmental impact and supporting local communities.</p>
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>

<div className="min-h-screen bg-blue-200 p-6">
      <div className="flex flex-wrap justify-center mt-4 py-2 px-3 gap-4">
      <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
     <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
       </div>
      </div>
     </div>
     <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
     <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
       </div>
      </div>
     </div>
     <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
     <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
       </div>
      </div>
     </div>
     <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
     <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
       </div>
      </div>
     </div>
     <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
     <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
       </div>
      </div>
     </div>

     <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
     <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
       </div>
      </div>
     </div>
      </div>
    </div>

    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-white">Login now!</h1>
      <p className="py-6 text-white">A login is a process that allows users to access a computer system, application, or website by providing authentication credentials, typically a username and password. It serves as a security measure to verify the identity of users before granting them access to restricted areas or personalized content. The login process usually involves entering the required credentials into a designated form or interface, which are then verified against stored records in a database. Upon successful authentication, the user gains access to their account and can proceed to perform various actions or access specific features based on their permissions. Login systems are widely used across digital platforms, including social media, online banking, e-commerce websites, and more, to ensure the security and privacy of user data.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>


    <div className="overflow-x-auto bg-blue-200 text-black">
  <table className="table text-black">
    {/* head */}
    <thead>
      <tr className='text-black'>
        
        <th>Name</th>
        <th>Job</th>
        <th>Languages</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Ayubu Joseph</div>
              <div className="text-sm opacity-50">Tanzania</div>
            </div>
          </div>
        </td>
        <td>
          Html, Javascript and React
          <br/>
          <span className="badge badge-ghost badge-sm">Software Engineer</span>
        </td>
        
        
      </tr>
      {/* row 2 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Munira </div>
              <div className="text-sm opacity-50">Tanzania</div>
            </div>
          </div>
        </td>
        <td>
          Carroll Group
          <br/>
          <span className="badge badge-ghost badge-sm">Tax Accountant</span>
        </td>
       
      </tr>
      {/* row 3 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://img.daisyui.com/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Sada Civil </div>
              <div className="text-sm opacity-50">Tanzania</div>
            </div>
          </div>
        </td>
        <td>
          Html,Javascript,Python and php
          <br/>
          <span className="badge badge-ghost badge-sm">Office Assistant I</span>
        </td>
        
      </tr>
     
    </tbody>
    
  </table>
</div>



<footer className="footer p-10 bg-base-300 text-base-content">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Social</h6> 
    <div className="grid grid-flow-col gap-4">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </nav>
</footer>

<footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <aside>
    <p>Copyright © 2024 - All right reserved by Makix Laravel Developer</p>
  </aside>
</footer>
  </div>

  
  );
};

export default App;

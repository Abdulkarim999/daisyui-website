import React from 'react'

const Login = () => {
  return (
    <div>
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
    </div>
  )
}

export default Login
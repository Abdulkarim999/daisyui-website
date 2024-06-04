import React from 'react'

const Table = () => {
  return (
    <div>
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

    </div>
  )
}

export default Table
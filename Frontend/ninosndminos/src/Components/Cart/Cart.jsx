import React from 'react'
import Nav1 from '../Navbar/Nav1.jsx'
import { Link  } from 'react-router-dom'

const Cart = () => {
  return (
    <div><Nav1/>
    <div>
      <div className="cart">
        <center>
          <div className="news">YOUR CART IS EMPTY</div>

          <div class="flex items-center justify-center ppe">
            <div className="relative">
            
            <button type="submit" class="bg-black text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"><Link to='/'>Continue Shopping</Link></button>
              
            </div>
          </div>
        </center>
      </div>
    </div>
    </div>
  )
}

export default Cart
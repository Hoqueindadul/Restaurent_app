import React from 'react'

const Menu = () => {
  return (
    <>
        
      <article className='menu'>
        <h1>CookPal</h1>
        <div class="signup-form">
        <h2>Sign Up</h2>
        <form id="signupForm">
            <div>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required></input>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required></input>
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required></input>
            </div>
            <button type="submit">Sign Up</button>
        </form>
    </div>


          
      </article>
    </>
  )
}

export default Menu

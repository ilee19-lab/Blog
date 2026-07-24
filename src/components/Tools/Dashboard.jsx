import React from 'react'
import { useAuth } from '../../contexts/AuthContext'

function Dashboard() {
    const {

        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn

    } = useAuth()

    const login = (e)=>{

        
        setIsLoggedIn(true)

        setAuthUser({
            name: 'Imani Lee'
        })
    }
     const logout = (e)=>{

        
        setIsLoggedIn(false)

        setAuthUser(null)
    }



  return (
    <div>
        <span>User is Currently: {isLoggedIn ? 'Logged-In' : 'Logged Out'}</span>
        {isLoggedIn ? (<span> UserName: {authUser.name}</span>) : null}
        <br/>
        {isLoggedIn ?
        <button onClick={(e)=>{logout(e)}}>Log Out</button>
        :
        <button onClick={(e)=>{login(e)}}>Log In</button>

}
        

    </div>
  )
}

export default Dashboard;
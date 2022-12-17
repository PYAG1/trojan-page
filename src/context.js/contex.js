import React, { useContext } from "react";
import { createContext } from "react";

const auth= createContext()

export function useAuth(){
    return useContext(auth)
}


export const AuthProvider=({children})=>{

    /*const [user,setUser]=React.useState(null)
    const [password,setpassword]=React.useState(null)
    
    function getuser(user){
        setUser(user)
        console.log(user)

    }

    function getpass(password){
        setUser(password)


    }*/

    const [profile,setprofile]=React.useState(null)

    const [contacts,setContact]= React.useState([])

    const loginuser = pro =>{
        setprofile(pro)

    }

    const logout = ()=>{
        setprofile(null)
    }



    function users(username,password){
        
        console.log(contacts)

        setContact((prev) => {
           return [ ...prev ,
            {id: Math.floor(Math.random()*100),
            name: username,
            password: password

           } ]

        })


        
    }


    







return <auth.Provider value={{users,contacts,loginuser,logout,profile}}>{children}</auth.Provider>
}



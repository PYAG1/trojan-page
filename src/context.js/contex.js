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

    const [contacts,setContact]= React.useState([])


    function users({user,password}){
        setContact((prev) => {
           return [ ...prev ,
            {id: Math.floor(Math.random()*100),
            name:user,
            password:password

           } ]
        })

        
    }


    







return <auth.Provider value={{users}}>{children}</auth.Provider>
}



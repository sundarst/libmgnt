import React, { createContext, useState } from 'react'

const AuthuData = createContext({});
export const  AuthuProvider=({child})=>
{  const [Auth ,setAuth] = useState({});

return(
<AuthuData.Provider value={{Auth,setAuth}}>
    {child}
</AuthuData.Provider>
)

 
}

export default AuthuData
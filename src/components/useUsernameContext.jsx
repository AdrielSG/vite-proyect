import { createContext, useState } from "react"; 
import PropTypes from 'prop-types'; 
//export const Context = createContext() 
export const Context = createContext(); 
 
export const UserProvider = ({ children }) => { 
  const [user, setUser] = useState(''); // Estado para guardar el usuario 
 
  return ( 
    <Context.Provider value={{ user, setUser }}> 
      {children} 
    </Context.Provider> 
  ); 
}; 
 
UserProvider.propTypes = { 
    children: PropTypes.node.isRequired, 
}
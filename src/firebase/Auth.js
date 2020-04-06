import React, {useEffect,useState} from 'react';
import firebase from 'firebase/app' 

// tool that lets you propogate data throughout react
 const AuthContext = React.createContext();

// store auth status
  const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            setCurrentUser(user)
            this.setPending(false)
        }
        
      });
    }, []);
  


  

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export {AuthProvider,AuthContext as default}
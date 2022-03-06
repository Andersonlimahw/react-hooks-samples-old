import logo from './logo.svg'
import './App.css'
import { UseStateSample } from './hooks/useStateSample/index';
import { UseEffectSample } from './hooks/useEffectSample';
import { UseContextSample } from './hooks/useContextSample';
import { useState, useEffect } from 'react';
import { UserProvider } from './contexts/UserContext';
import { UseReducerSample } from './hooks/useReducerSample';

const defaultUserData =  {
  name: 'Anderson Lima',
  email: 'sample@sample.com', 
}


function App() {
  const [userData, setUserData] = useState<any>(defaultUserData);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
      <main className='app_main'>
        <UseStateSample /> 
        <UseEffectSample />       

        <UserProvider value={{
          userData,
          setUserData
        }}>
          <UseContextSample />
        </UserProvider>

        <UseReducerSample />
      </main>
    </div>
  )
}

export default App

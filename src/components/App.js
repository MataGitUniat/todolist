
import React from 'react';
import Footer from '../shared/layout/Footer';
import Content from '../shared/layout/Content';
/*import Todo from './Todo/Todo';*/
//import Timer from './pomodoro/Timer';
//import Intercambio from './Criptocosas/Intercambio';
//import Crypto from './Criptocosas/Crypto';
import Charthome from './Chart/Charthome';


function App() {
  return (
    <div className="App">
      <Content >
        <Charthome/>
      </Content>
      <Footer />
    </div>
  );
}

export default App;

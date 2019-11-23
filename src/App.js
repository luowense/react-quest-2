import React from 'react';
import Contact from './Components/Contact';
import { resolveComponents } from 'uri-js';

function App() {
  return (
    <div className="App">
     <Contact
        nameavatar="https://randomuser.me/api/portraits/thumb/men/75.jpg"
        name="Brad Gibson"
        online={true}
      />
      <Contact
        nameavatar="https://randomuser.me/api/portraits/thumb/women/47.jpg"
        name="Melissa Weidemann"
        online={false}
      />
      <Contact
        nameavatar="https://randomuser.me/api/portraits/thumb/men/53.jpg"
        name="Clifton Simpson"
        online={true}
      />
    </div>
  );
}

export default App;

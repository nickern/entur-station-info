import React from 'react';
import Entur from './entur';
import Clock from './clock';

function App() {

  return (
    <div className="content container-fluid">
      <div className="row">
        <div className="col">
          <Entur />
        </div>
        {/* <div className="col">
          <div className='clock'><Clock /></div>
          <div className='section yr'>YR</div>
          <div className='section other'>OTHER</div>
        </div> */}
      </div>
    </div>
  );
}

export default App;

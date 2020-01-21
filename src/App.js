import React from 'react';
import AutoGrid from './Skill';
import Hook from './Manager';
import SimpleTable from './Records';

class App extends React.Component {
  render () {
   
    
    return (
      <div>
         <Hook/>
         <AutoGrid/>
         <SimpleTable/>
      </div>
    );
  }
}
export default App;
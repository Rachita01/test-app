import React from 'react';


class SelectEmployee extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Employee: []
      };
    }

componentDidMount() {
    this.setState({
        Employee: [
            {id: 'singhalr', name: 'Rachita Singhal'},
            {id: 'hassanig', name: 'Gulshan Hassani'},
            {id: 'draje', name: 'Dinshaw'}
          ]
        });
      }

      render () {
       
        const { Employee } = this.state;
        let employeeList = Employee.length > 0
            && Employee.map((item, i) => {
          return (
            <option key={i} value={item.id}>{item.name}</option>
          )
        }, this);
  
        return(
            <div>
             <select>
               {employeeList}
             </select>
         </div>
        )
      };
  }
  
  export default SelectEmployee;

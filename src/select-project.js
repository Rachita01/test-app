import React from 'react';


class SelectProject extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        project: [],
      };
    }
  
    componentDidMount() {
      this.setState({
        project: [
          {id: 'S+N', name: 'Smith+Nephew'},
          {id: 'EJ', name: 'EasyJet'},
          {id: 'AB', name: 'Airbus'}
        ]
      });
    }

    
  
    render () {
       
      const { project } = this.state;
      let projectList = project.length > 0
          && project.map((item, i) => {
        return (
          <option key={i} value={item.id}>{item.name}</option>
        )
      }, this);

      return(
          <div>
           <select>
             {projectList}
           </select>
       </div>
      )
    };
}

export default SelectProject;

      
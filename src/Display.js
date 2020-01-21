import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import SelectProject from './select-project';
import SelectEmployee from './Employee';
var filterData = [
  { name: 'A', bender:  , nation: 'Smith&Nephew'},
  { name: 'B', bender: 'Gulshan Kumar', nation: 'Easyjet'},
  { name: 'C', bender: 'Dhruv Sharma', nation: 'Airbus'},
  { name: 'Rachita Singhal', bender: 'Rachita Singhal', nation: 'Easyjet'}
];
var FilterForm = React.createClass({
  getInitialState: function() {
    return {
      data: this.props.data,
      bender: '',
      nation: '',
      multiple: false
    }
  },
  checked: function(e) {
    this.setState({multiple: e.target.value});
  },
  filterItems: function(val, type) {
     switch (type) {
      case 'bender':
        this.setState({bender: val});
        break;
      case 'nation':
        this.setState({nation: val});
        break;
      default:
        break;
    }
  },
  render: function() {
    var filteredItems = this.props.data;
    var state = this.state;
    var filterProperties = ["bender", "nation"];
    filterProperties.forEach(function(filterBy) {
      var filterValue = state[filterBy];
      if (filterValue) {
        filteredItems = filteredItems.filter(function(item) {
          return item[filterBy] === filterValue;
        });
      }
    });
    var benderArray = this.props.data.map(function(item) { return item.bender });
    var nationArray = this.props.data.map(function(item) { return item.nation });
    
    
    benderArray.unshift("");
    nationArray.unshift("");
   
    
    return (
      <div className="container">
        <FilterOptions 
            data={this.state.data} 
            benderOptions={benderArray} 
            nationOptions={nationArray}
            
            
            changeOption={this.filterItems} />
        <div className="filter-form">
          <FilterItems data={filteredItems} />
        </div>
      </div>
    )
  }
});
var FilterOptions = React.createClass({
  changeOption: function(type, e) {
    var val = e.target.value;
    this.props.changeOption(val, type);
  },
  render: function() {
    return (
      <div className="filter-options">
        <div className="filter-option">
          <label>Bender</label>
          <select id="bender" value={this.props.bender} onChange={this.changeOption.bind(this, 'bender')}>
          {this.props.benderOptions.map(function(option) {
            return ( <option key={option} value={option}>{option}</option> )
          })}
          </select>
          <label>Nation</label>
          <select id="nation" value={this.props.nation} onChange={this.changeOption.bind(this, 'nation')}>
          {this.props.nationOptions.map(function(option) {
            return ( <option key={option} value={option}>{option}</option> )
          })}
          </select>
          
          
        </div>
      </div>
    );
  }
});
var FilterItems = React.createClass({
  render: function() {
    return (
      <div className="filter-items">
      {this.props.data.map(function(item){
        return (
          <div className="filter-item">{item.name}</div>
        );
      })}
      </div>
    );
  }
});
React.render(
  <FilterForm data={filterData} />,
  document.getElementById('filter')
);

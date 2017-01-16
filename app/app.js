

var React = require('react');
var ReactDOM = require('react-dom');
var Axios = require('axios');


var LeaderBoard = React.createClass({
  getInitialState: function() {
    return {
      allTimeUsers: [],
      thirtyDaysUsers: [],
      currentList: []
    }
  
  },
  componentDidMount: function() {
    var th = this;

    function getLast30() {
      return Axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
    }

    function getAllTime() {
      return Axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
    }

    Axios.all([getLast30(), getAllTime()])
      .then(Axios.spread(function (last30, all) {
        th.setState({
          thirtyDaysUsers: last30.data,
          allTimeUsers: all.data,
          currentList: last30.data
        });
      }));
    
    

   
  },

  handleLatest: function() {
    this.setState({
      currentList: this.state.thirtyDaysUsers
    });
  },

  handleAll: function() {
    this.setState({
      currentList: this.state.allTimeUsers
    });
  },
  
  render: function() {
    
    
    return (
      <table>
        <thead>
          <tr>
            <th width="300">Username</th>
            <th><a href="#" onClick={this.handleLatest}>Points past 30 days </a></th>
            <th><a href="#" onClick={this.handleAll}>All time points</a></th>
            
          </tr>
        </thead>
        <tbody>

          {this.state.currentList.map(function(user, index) {
            
            return (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.recent}</td>
                  <td>{user.alltime}</td>
                  
                </tr>

              );
            

          })}
          
          
        </tbody>
</table>
    );
  }
      
  
});


ReactDOM.render(
  <LeaderBoard />,
  document.getElementById('app')
);
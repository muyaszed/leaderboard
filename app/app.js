

var React = require('react');
var ReactDOM = require('react-dom');
var Axios = require('axios');


var LeaderBoard = React.createClass({
  getInitialState: function() {
    return {
      allTimeUsers: [],
      thirtyDaysUsers: []
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
          allTimeUsers: all.data
        });
      }));
    
    

   
  },
  
  render: function() {
    
    return (
      <table>
        <thead>
          <tr>
            <th width="300">Username</th>
            <th>Points past 30 days</th>
            <th>All time points</th>
            
          </tr>
        </thead>
        <tbody>

          {this.state.thirtyDaysUsers.map(function(user, index) {
            
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
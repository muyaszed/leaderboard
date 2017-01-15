

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
    
    Axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(function (response) {
        th.setState({
          thirtyDaysUsers: response.data
        });
        console.log(th.state.thirtyDaysUsers[0].username);
      })
      .catch(function (error) {
        console.log(error);
      });

   
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
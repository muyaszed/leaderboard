var React = require('react');
var ReactDOM = require('react-dom');

var LeaderBoard = React.createClass({
  getInitialState: function() {
    return {
      allTimeUsers: [],
      thirtyDaysUsers: []
    }
  
  },
  componentDidAmount: function() {
    var th = this;
    function getAllTimeUsers() {
       return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
    }
    
    function getLast30Users() {
      return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
    }
    console.log('hi');
    axios.all([getAllTimeUsers(), getLast30Users()])
  .then(axios.spread(function (all, last) {
      
    th.setState({
      allTimeUsers: all,
      thirtyDaysUsers: last
      
    });
       
  }));
   
   
  },
  
  render: function() {
      
    return (

      <div>
        
<table>
  <thead>
    <tr>
      <th width="200">Table Header</th>
      <th>Table Header</th>
      <th width="150">Table Header</th>
      <th width="150">Table Header</th>
    </tr>
  </thead>
  <tbody>
    {this.state.allTimeUsers.map(function(user) {
          return (
            <tr>
              <td>{user.username}</td>
              <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
              <td>Content Goes Here</td>
              <td>Content Goes Here</td>
            </tr>
          );
        })}
    
    
  </tbody>
</table>
      </div>
    );
  }
});

ReactDOM.render(
  <LeaderBoard />,
  document.getElementById('app')
);
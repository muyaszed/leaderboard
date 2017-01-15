

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
            <th width="200">Table Header</th>
            <th>Table Header</th>
            <th width="150">Table Header</th>
            <th width="150">Table Header</th>
          </tr>
        </thead>
        <tbody>
          {}
          <tr>
            <td>Content Goes Here</td>
            <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
            <td>Content Goes Here</td>
            <td>Content Goes Here</td>
          </tr>
          
        </tbody>
</table>
    );
  }
      
  
});

ReactDOM.render(
  <LeaderBoard />,
  document.getElementById('app')
);
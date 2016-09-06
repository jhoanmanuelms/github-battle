let React = require('react');
let ReactDOM = require('react-dom');

let FriendsContainer = React.createClass({
  render: () => {
    var name = 'Jhoan Munoz'
    var friends = ['Andres Bulla', 'Ramon Mesa', 'Carlos Clavijo']
    return (
      <div>
        <h3> Name: {name} </h3>
        <ShowList names={friends} />
      </div>
    )
  }
});

let ShowList = React.createClass({
  render: () => {
    var listItems = this.props.names.map(function(friend){
      return <li> {friend} </li>;
    });
    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

ReactDOM.render(
  <FriendsContainer />,
  document.getElementById('app')
);

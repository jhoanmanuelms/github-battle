let React = require('react');
let ReactDOM = require('react-dom');

let FriendsContainer = React.createClass({
  render: function(){
    return (
      <div>
        <h3> Name: {this.props.name} </h3>
        <ShowList names={this.props.friends} />
      </div>
    )
  }
});

let ShowList = React.createClass({
  render: function(){
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
  <FriendsContainer name="Jhoan Munoz" friends={['Andres Bulla', 'Ramon Mesa', 'Carlos Clavijo']} />,
  document.getElementById('app')
);

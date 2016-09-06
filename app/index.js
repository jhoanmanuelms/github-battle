let React = require('react');
let ReactDOM = require('react-dom');

const USER_DATA = {
  name: 'Jhoan Munoz',
  username: 'jhoanmanuelms',
  image: 'http://goo.gl/IvD9ha'
}

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

let ProfilePic = React.createClass({
  render: function() {
    return <img src={this.props.image} style={{width: 100, height:100}} />
  }
});

let Link = React.createClass({
  changeURL: function() {
    window.location.replace(this.props.href)
  },
  render: function() {
    return (
      <span
        style = {{color: 'blue', cursor: 'pointer'}}
        onClick = {this.changeURL}>
          {this.props.children}
      </span>
    )
  }
});

let ProfileLink = React.createClass({
  render: function() {
    return(
      <div>
        <Link href={'http://www.github.com/' + this.props.username}>
            {this.props.username}
        </Link>
      </div>
    )
  }
});

let ProfileName = React.createClass({
  render: function() {
    return (
      <div>{this.props.name}</div>
    )
  }
});

let Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfilePic image={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
})

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('avatar')
);

ReactDOM.render(
  <FriendsContainer name="Jhoan Munoz" friends={['Andres Bulla', 'Ramon Mesa', 'Carlos Clavijo']} />,
  document.getElementById('friends')
);

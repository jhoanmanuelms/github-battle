var React = require('react');
var PropTypes = React.PropTypes;

var UserDetailsWrapper = function(props)
{
  return (
    <div className = 'col-sm-6'>
      <p className = 'lead'>Player {props.playerNumber}</p>
        {props.children}
    </div>
  )
}

module.exports = UserDetailsWrapper;

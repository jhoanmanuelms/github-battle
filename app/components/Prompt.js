var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

function Prompt(props)
{
    return (
      <div className = "jumbotron col-sm-6 col-sm-offset-3 text-center" style = {transparentBg}>
        <h1>{props.header}</h1>
        <form onSubmit = {props.onSubmitUser}>
          <div className = "form-group">
            <input
              className = "form-control"
              placeholder = "Github Username"
              onChange = {props.onUpdateUser}
              value = {props.username}
              type = "text" />
          </div>
          <div className = "form-group col-sm-4 col-sm-offset-4">
            <button
              className = "btn btn-block btn-success"
              type = "submint">
              Continue
            </button>
          </div>
        </form>
      </div>
    )
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
}

module.exports = Prompt;

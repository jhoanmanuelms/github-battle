var React = require('react');
var styles = require('../styles');
var Link = require('react-router').Link;
var Loading = require('./Loading');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('../containers/MainContainer');

var PropTypes = React.PropTypes;

function puke(object) {
  return <pre>{JSON.stringify(object, 2, '')}</pre>
}

//TODO extract this out and reuse in confirm battle component
function StartOver() {
  return (
    <MainContainer>
      <Link to='/playerOne'>
        <button type = 'button' className = 'btn btn-lg btn-danger'>
          Start Over
        </button>
      </Link>
    </MainContainer>
  )
}

var Results = function(props)
{
  if (props.isLoading === true)
  {
    return (
      <Loading text='Fighting' />
    )
  }

  if (props.scores[0] === props.scores[1])
  {
    return (
      <MainContainer>
        <h1>It's a tie</h1>
        <StartOver />
      </MainContainer>
    )
  }

  var winnerIdx = props.scores[0] > props.scores[1] ? 0 : 1;
  var loserIdx = winnerIdx === 0 ? 1 : 0;

  return (
    <MainContainer>
      <h1>Results</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header = 'Winner'>
          <UserDetails score={props.scores[winnerIdx]} info = {props.playersInfo[winnerIdx]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header = 'Loser'>
          <UserDetails score={props.scores[loserIdx]} info = {props.playersInfo[loserIdx]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;

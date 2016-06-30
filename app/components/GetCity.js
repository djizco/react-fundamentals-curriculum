var React = require('react');
var PropTypes = React.PropTypes;

function getStyles(props){
  return {
    container: {
      display: 'flex',
      flexDirection: props.direction || 'column',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: 300,
      alignSelf: 'right'
    },
    button: {
      margin: 10
    }
  };
}

function InputField(props){
  return (
    <input
      className='form-control'
      onChange={props.onUpdateCity}
      placeholder='Austin, Texas'
      type='text'
      value={props.city} />
  );
}

function Button(props){
  return (
    <button type='button'
      style={getStyles(props).button}
      className='btn btn-success'
      onClick={props.onSubmitCity}>
      {props.children}
    </button>
  );
}

function GetCity(props){
  return (
    <div style={getStyles(props).container}>
      <InputField city={props.city} onUpdateCity={props.onUpdateCity}/>
      <Button onSubmitCity={props.onSubmitCity}>Get Weather</Button>
    </div>
  );
}

GetCity.propTypes = {
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired
}

module.exports = GetCity;

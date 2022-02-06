import React from "react";
import PropTypes from "prop-types";

const profiles = [
  {name: "taro", age: 10},
  {name: "komori", age: 3},
  {name: "noname", age: 5}
];

const App = () => {
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>

  );
};

const User = (props) => {
  return <div>Hi! I am {props.name} {props.age} years old! </div>
};

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
export default App;














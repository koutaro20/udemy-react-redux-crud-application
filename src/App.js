import React from "react";

const profiles = [
  {name: "taro", age: 10},
  {name: "komori", age: 5},
  {name: "noname"}
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

User.defaultProps = {
  age: 1
}
export default App;














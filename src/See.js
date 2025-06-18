import React, { Component } from "react"; 
import "./App.css"; // Import CSS for styling 
 
class User extends Component { 
 render() { 
   return ( 
     <div className="user-card"> 
       <h3>{this.props.name}</h3> 
       <p>Age: {this.props.age}</p> 
       <p>Loca on: {this.props.location}</p> 
     </div> 
   ); 
 } 
} 
 
class UserList extends Component { 
 constructor(props) { 
   super(props); 
   this.state = { 
     users: [ 
       { id: 1, name: "Alice", age: 25, location: "New York" }, 
       { id: 2, name: "Bob", age: 30, location: "London" }, 
       { id: 3, name: "Charlie", age: 28, location: "Sydney" } 
     ], 
   }; 
 } 
 
 render() { 
   return ( 
     <div className="container"> 
       <h2>User List</h2> 
       <div className="user-list"> 
         {this.state.users.map((user) => ( 
           <User key={user.id} name={user.name} age={user.age} loca on={user.location} /> 
         ))} 
       </div> 
     </div> 
   ); 
 } 
} 
export default UserList;
import React, { useState, useEffect } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

function Users() {
  // Setting our component's initial state
  const [users, setUsers] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadUsers()
  }, [])

  // Loads all books and sets them to books
  function loadUsers() {
    API.getUsers()
      .then(res => 
        setUsers(res.data[0])
      )
      .catch(err => console.log(err));
  };

  return (
      <div>
          <h4> Hello There! {users.userName} </h4>
      </div>
  )

}

export default Users;
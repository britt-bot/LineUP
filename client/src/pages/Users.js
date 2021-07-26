import React, { useState, useEffect } from "react";
import API from "../utils/API";
// import SearchResultsCard from "../components/SearchResultsCard";

function Users() {
  // Setting our component's initial state
  const [users, setUsers] = useState([]);

  // Load all books and store them with setBooks
  useEffect(() => {
    loadUsers();
  }, []);

  // Loads all books and sets them to books
  function loadUsers() {
    API.getUsers()
      .then((res) => setUsers(res.data[0]))
      .catch((err) => console.log(err));
  }

  return <div>{/* <SearchResultsCard /> */}</div>;
}

export default Users;

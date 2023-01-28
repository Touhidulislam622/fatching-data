import React, { useState, useEffect } from "react";
import useFetch from './useFetch';

const DataFeaching = () => {
    const {data , isLoading , error} = useFetch("https://jsonplaceholder.typicode.com/todos");

  const loadingMessage = <p> todo is loading</p>;
  const errorMessage = <p>{error}</p>;

  const todosElement =
    data &&
    data.map((todo) => {
      return <p key={todo.id}>{todo.title} , {todo.id} , {todo.userId} </p>
    });

  return (
    <div>
      <h1>Todos</h1>
      {error && { errorMessage }}
      {isLoading && loadingMessage}
      {todosElement}
    </div>
  );
};

export default DataFeaching;

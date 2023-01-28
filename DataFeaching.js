import React , {useState , useEffect} from 'react'

const DataFeaching = () => {

    const [todos , setTodos] = useState(null)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) =>{
            return res.json();
        })
        .then((data) => {
            setTodos(data);
        })
    }, [] );

  return (
    <div>
        <h1>Todos</h1>
       {todos && todos.map((todo) => {
        return <div>
            <p>{todo.id}</p>
            <h3>{todo.title}</h3>

        </div>
        
       })}
    </div>
  );
};

export default DataFeaching
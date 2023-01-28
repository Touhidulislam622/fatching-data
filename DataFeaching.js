import React , {useState , useEffect} from 'react'


const loadingMassage = <p> todo is loading</p>

const DataFeaching = () => {

    const [todos , setTodos] = useState(null);
    const [isLoading , setIsloading] = useState(true);
    const [error , setError] = useState(null);



    useEffect(()=>{
        //  setTimeout remove kora jabe //
       setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) =>{
            if( !res.ok){
                throw Error("facthing is not succesful");
            }
            else {
                return res.json();
            }
        })
        .then((data) => {
            setTodos(data);
            setIsloading(false);
            setError(null);
        })
        .catch((error) => {
            setError(error.massage);
            setIsloading(false);
        });
       }, 2000)
    }, [] );

    const todosElement = [
        todos && todos.map((todo) => {
            return <div>
                <p>{todo.id}</p>
                <h3>{todo.title}</h3>
    
            </div>
            
           })
    ];

    const styleError={color:"red"};

  return (
    <div>
        <h1>Todos</h1>
        {error && <h2>{error}</h2> }
        <b style={styleError}> {isLoading && loadingMassage } </b>
        {todosElement}
    </div>
  );
};

export default DataFeaching
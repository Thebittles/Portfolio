import './App.css'
import { useState, useEffect } from 'react';
import Input from './components/input/Input';
import List from './components/List/List';

//BaseUrl for API
let baseURL = `http://localhost:3001/bucket`

function App() {
  //State for inputting a new item
  const [newItem, setItem] = useState("");

  // State for bucketList
  const [itemList, setList] = useState([]);


  //Handle change for input item - How do we capture value for the input and store in state
  const handleChange = (e) => {
    setItem(e.target.value)
  }

   // Create - Adding a new item
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newItem)

    let item = {
      description: newItem
    }

    fetch(baseURL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    })
    .then(res => res.json())
    .then(data => {
      //Take old state plus new item and update state
      let newList = [...itemList, data]
       setList(newList)
       setItem("");
    })
    .catch(err => {
      console.log(err)
    })

  }

  //Toggle Complete
  const ToggleComplete = (e) => {
    let id = e.target.id 
    console.log("Firing")
    let endpoint = `${baseURL}/${id}`
    fetch(endpoint, {
      method: "PUT",
    })
    .then(res => { return res.json() })
    .then(() => { 
      let listState = [...itemList];

      let updateItem = listState.find(item => {
        return item._id === id
      })
      updateItem.isComplete = !updateItem.isComplete;

      setList(listState);

    })
  }


  //Delete handler
   const deleteItem = (id) => {
    let endpoint = `${baseURL}/${id}`
      fetch(endpoint, {
        method: "DELETE",
      })
      .then(res => {
        return res.json()
      })
      .then(() => {
        let filteredItems = itemList.filter(item => item._id !== id);
        setList(filteredItems);
      })
      .catch(e => {
        console.log("Error Deleting Item: ", e)
      })


   }



  useEffect(() => {
    fetch(baseURL)
      .then(res => res.json())
      .then(items => {
        setList(items)
      })
      .catch(err => {
        console.error(err)
      })
  }, [itemList]);


  return (
    <div className="App">
      <div id="container">
        <h1>Bucket List</h1>
        <form onSubmit={handleSubmit}>
         <Input
           newItem={newItem}
           handleChange={handleChange}
         />
        </form>
        <ul>
          <List
            itemList={itemList}
            ToggleComplete={ToggleComplete}
            deleteItem={deleteItem}
          />
        </ul>
        <div className="bottom"></div>
      </div>
    </div>
  );
}

export default App;

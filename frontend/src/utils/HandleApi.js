import axios from 'axios'

const baseUrl = "https://infotrixs-todo-list.onrender.com";

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data ---> ', data);
            setToDo(data)
        })
}

const addToDo = (text, setText, setToDo) => {

    axios
        .post(`${baseUrl}/save`, { text })
        .then((data) => {
            console.log(data);
            setText("")
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {

    axios
        .put(`${baseUrl}/update`, { _id: toDoId, text })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const deleteToDo = (toDoId, setToDo) => {
    axios
      .delete(`${baseUrl}/delete/${toDoId}`) // Update the URL to include the toDoId as a URL parameter
      .then((response) => {
        console.log(response);
        getAllToDo(setToDo);
      })
      .catch((err) => console.log(err));
  };
  


export { getAllToDo, addToDo, updateToDo, deleteToDo }

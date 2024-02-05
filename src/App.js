import './App.css';
import Input from './components/todo-list/Input';
import ToDoList from './components/todo-list/ToDoList';
import Button from './components/todo-list/Button';




function App() {
  return (
    <div className="App">
      <Input />
      <Button />
      <ToDoList />
    </div>
  );
}

export default App;

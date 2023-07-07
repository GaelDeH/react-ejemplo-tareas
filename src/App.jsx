import TaskList from "./components/TaskList";
import TaskForm from "./components/TasksForm";

function App() {
  return (
    <main className="bg-black h-screen">
      <div className="container mx-auto">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;

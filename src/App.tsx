import { MySelectList } from "./components/my-select-list";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-400">
      <h1 className="text-3xl font-bold underline text-white">
        React Select Example
      </h1>
      <MySelectList />
    </div>
  );
}

export default App;

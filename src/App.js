import Table from "./components/Table";

function App() {
  return (
    <div className="w-full md:flex items-start justify-between px-8 gap-4">
      <main className="w-full overflow-x-scroll  md:w-4/6 lg:w-9/12">
        <Table/>
      </main>
      <aside className="w-full md:w-2/6 lg:w-3/12 bg-red-600">
sdada
      </aside>
    </div>
  );
}

export default App;

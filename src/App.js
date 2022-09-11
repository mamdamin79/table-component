import Table from "./components/Table";

function App() {
  return (
    <div className="w-full md:flex items-start justify-between px-8 gap-4">
      <main className="w-full md:w-4/6 bg-slate-600">
        <Table/>
      </main>
      <aside className="w-full md:w-2/6 bg-red-600">
sdada
      </aside>
    </div>
  );
}

export default App;

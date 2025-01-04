function App() {
  return (
    <>
      <header className="h-14 border-b flex items-center px-4">
        <h1 className="font-semibold">Marten de Bruijn</h1>
      </header>
      <main className="px-4 py-8 space-y-8">
        <article>
          <div className="w-full h-80 inline-block bg-blue-300 rounded-md overflow-clip">
            <img
              src="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=3615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="macbook pro on black wooden table"
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="font-semibold text-lg">Types</h2>
          <p>A types library</p>
        </article>
        <article>
          <div className="w-full h-80 inline-block bg-blue-300 rounded-md overflow-clip">
            <img
              src="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=3615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="macbook pro on black wooden table"
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="font-semibold text-lg">Dotfiles</h2>
          <p>My personal dotfiles</p>
        </article>
      </main>
      <footer className="border-t">
        <p className="text-center py-4">© 2025 Marten de Bruijn</p>
      </footer>
    </>
  );
}

export default App;

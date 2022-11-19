function layout({children}) {
  return (
    <div>
      <head></head>
      <body>
        <header>
            <nav className="bg-slate-800 h-52">A</nav>
        </header>
        <main>{children}</main>
        <footer className="bg-slate-800 h-52">A</footer>
      </body>
    </div>
  );
}

export default layout;

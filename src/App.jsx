import "./App.css";
  
function App() {
  return (
    <>
      <div className="card">
        <h1>UrDbBackup</h1>
        <button
          onClick={() =>
            navigator.clipboard.writeText(
              "docker run -d -p 1560:1560 palanioffcl/urdbbackup"
            )
          }
        >
          docker run -d -p 1560:1560 palanioffcl/urdbbackup
        </button>
        <p>
          A Universal Database backup manager which takes your database backup.
        </p>
        <a href="https://github.com/palanioffcl/urdbbackup"><button>Fork me on Github</button></a>
      </div>
    </>
  );
}

export default App;

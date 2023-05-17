import "./App.css";
import Nav from "./Nav";
import Main from "./Main";

const App = () => {
  return (
    <div id="container">
      <header id="top">
        <h1>QR Code Menu</h1>
        <Nav />
      </header>
      <Main />
      <footer>
        <a href="#top">Go to top</a>
      </footer>
    </div>
  );
};

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

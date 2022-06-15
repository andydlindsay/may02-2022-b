import './App.css';
import Header from './components/Header';
// import VisitorCounter from './components/VisitorCounter';
import Pizza from './components/Pizza';

const App = () => {
  return (
    <div className="App">
      <Header message="Pat's Pizza Place" moreStuff="goodbye"/> {/* Header({message: 'hello world'}) */}
      {/* <VisitorCounter /> */}
      <Pizza />
    </div>
  );
};

export default App;

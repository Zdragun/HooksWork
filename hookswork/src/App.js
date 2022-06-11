import './App.css';
import { UseEfferctHook } from './components/UseEfferctHook';
import UseReducerHook from './components/UseReducerHook';
import { UseRefHook } from './components/UseRefHook';
function App() {
  return (
    <div className="App">
      <h1>Title</h1>
   {/*  <UseReducerHook/> */}
{/*     <UseEfferctHook/> */}
    <UseRefHook/>
    </div>
  );
}

export default App;

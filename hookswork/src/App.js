import './App.css';
import ContextHooks from './components/ContextHooks';
import { UseEfferctHook } from './components/UseEfferctHook';
import UseReducerHook from './components/UseReducerHook';
import { UseRefHook } from './components/UseRefHook';
function App() {
  return (
    <div className="App">
      <h1>Title</h1>
   {/*  <UseReducerHook/> */}
{/*     <UseEfferctHook/> */}
{/*     <UseRefHook/> */}
    <ContextHooks/>
    </div>
  );
}

export default App;

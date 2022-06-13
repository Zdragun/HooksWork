import './App.css';
import ContextHooks from './components/ContextHooks';
import { UseEfferctHook } from './components/UseEfferctHook';
import UseReducerHook from './components/UseReducerHook';
import { UseRefHook } from './components/UseRefHook';
import MemoTutorial from './components/UseMemoHook';
function App() {
  return (
    <div className="App">
      <h1>Title</h1>
   {/*  <UseReducerHook/> */}
{/*     <UseEfferctHook/> */}
{/*     <UseRefHook/> */}
    <ContextHooks/>
<MemoTutorial/>   
</div>
  );
}

export default App;

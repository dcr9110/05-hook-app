import React from 'react';
import ReactDOM from 'react-dom';
//import HookApp from './HookApp';
//import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
//import CounterApp from './components/01-useState/CounterApp';
//import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
//import { SimpleForm } from './components/02-useEffect/SimpleForm';
//import { MultipleCustemHooks } from './components/03-examples/MultipleCustemHooks';
//import { FocusScreen } from './components/04-useRef/FocusScreen';
//import { RealExampleRef } from './components/04-useRef/RealExampleRef';
//import { Layout } from './components/05-useLayoutEffect/Layout';
import { Memorize } from './components/06-memos/Memorize';

ReactDOM.render(
    <Memorize/>,
  document.getElementById('root')
);
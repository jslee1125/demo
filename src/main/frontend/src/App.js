import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Modal from './components/Modals/Modal';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';

function App() {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  const GlobalStyle = createGlobalStyle`
    body {
      background: #e9ecef;
    }
  `;


  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <button onClick={openModal}>투두리스트</button>

      <Modal open={modalOpen} close={closeModal} header="Modal heading">
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
      </Modal>
    </React.Fragment>
  );
}

export default App;

//import { createGlobalStyle } from 'styled-components';
//import TodoTemplate from './components/TodoTemplate';
//import TodoHead from './components/TodoHead';
//import TodoList from './components/TodoList';
//import TodoCreate from './components/TodoCreate';
//import { TodoProvider } from './TodoContext';
//
//const GlobalStyle = createGlobalStyle`
//  body {
//    background: #e9ecef;
//  }
//`;
//
//function App() {
//  return (
//    <TodoProvider>
//      <GlobalStyle />
//      <TodoTemplate>
//        <TodoHead />
//        <TodoList />
//        <TodoCreate />
//      </TodoTemplate>
//    </TodoProvider>
//  );
//}
//
//export default App;


//function App() {
//   const [hello, setHello] = useState('')
//
//    useEffect(() => {
//        axios.get('/api/hello')
//        .then(response => setHello(response.data))
//        .catch(error => console.log(error))
//    }, []);
//
//    return (
//        <div>
//            백엔드에서 가져온 데이터입니다 : {hello}
//        </div>
//    );
//}
//
//export default App;
    import React from 'react';
    import './App.css';

    const Task = (value) => {
      return (
        <li key={value}>{value}</li>
      );
    }

    const tarefas = ['Extrair o café', 'Colocar leite', 'Adoçar, se necessário', 'Apreciar o café'];

    class App extends React.Component {
      render() {
        return (
          <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
        );
      }
    }

    export default App;


// OUUU import React from 'react';
// import './App.css';

// const tarefas = ['Extrair o café', 'Colocar leite', 'Adoçar, se necessário', 'Apreciar o café'];


// class App extends React.Component {
//   render() {
//     return (
//       <ul>{ tarefas.map(tarefa => <li key={tarefa}>{tarefa}</li>) }</ul>
//   );
//   }
// }

// export default App;

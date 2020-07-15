import React, {useState} from 'react';

function App() {
  const [listTech, setListTech] = useState([])
  const [newTech, setNewTech] = useState('')

  const handleSubmit = event => {
    setListTech([...listTech, newTech])
    setNewTech('')

    event.preventDefault()
  }

  return (
    <div className="App">
      <ul data-testid='list-tech'>
        {listTech.map(tech => <li key={tech}>{tech}</li>)}
      </ul>
      <form onSubmit={handleSubmit} data-testid='form-tech' >
        <label htmlFor="newTech">New Tech</label>
        <input id='newTech' value={newTech} onChange={e => setNewTech(e.target.value)} type="text"/>
      </form>
    </div>
  );
}

export default App;

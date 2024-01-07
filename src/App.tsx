import { useState } from "react";
import "./App.css"

const App = () => {
  const [notes, setNotes] = useState([
  {
    id: 1,
    title: "note title 1",
    content: "content 1",
  },
  {
    id: 2,
    title: "note title 2",
    content: "content 2",
  },
  {
    id: 3,
    title: "note title 3",
    content: "content 3",
  },
  {
    id: 4,
    title: "note title 4",
    content: "content 4",
  }
]);
 



  return(
<div className="notes-container">
  <form className="notes-form">
    <input
    placeholder="Heading" required>
    </input>
    <textarea
    placeholder="description"
    rows={10}
    required>
    </textarea>
    <button type="submit" >
      Add Note
    </button>
  </form>
  <div className="notes-grid">
    {notes.map((note)=> (
      <div className="notes-item">
      <div className="notes-header">
        <button>x</button>
      </div>
      <h2>Note heading</h2>
      <p>Note Content</p>
    </div>
    ))}
    
  </div>
</div>
  );
};

export default App;
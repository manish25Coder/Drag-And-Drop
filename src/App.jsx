import { useState } from 'react'

import './App.css'
import Notes from './components/Notes'

function App() {
  const [notes,setNotes] = useState([ 
    {
    id :1,
    text:"We have to first print JSON data on to the Screen "
  },
  {
    id :2,
    text:"Than we have to see all things work properly or NOT "
  }
])


  return (
      <Notes notes={notes} setNotes={setNotes}/>
  )
}

export default App

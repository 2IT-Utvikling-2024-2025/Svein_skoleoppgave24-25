import Content from "./Content/Content"
import Sidebar from "./Sidebar/Sidebar"
import "./css/App.css"
import documentation from "./docs.json"

function App() {

  return (
    <div className="App">
      <Sidebar docs={documentation} />
      <Content docs={documentation} />
    </div>
  )
}

export default App

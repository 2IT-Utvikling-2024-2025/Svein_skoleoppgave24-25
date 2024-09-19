import './App.css'
import Complaints from './Complaints'
import DOB from './DOB'
import Dropdown from './DropDown'
import FavColor from './FavColor'
import Mail from './Mail'
import Phone from './Phone'
import RadioButtons from './RadioButtons'
import Range from './Range'
import TextInput from './TextInput'

function App() {

  return (
<div>
  <TextInput />
  <RadioButtons />
  <Dropdown />
  <Range />
  <FavColor />
  <DOB />
  <Phone />
  <Mail />
  <Complaints />
</div>
  )
}

export default App

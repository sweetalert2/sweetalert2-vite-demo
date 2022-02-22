import { useState } from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import withReactContent from 'sweetalert2-react-content'
import './styles.scss'

const ReactSwal = withReactContent(Swal)

const ReactSwalWithInput = ReactSwal.mixin({
  input: 'text',
  confirmButtonText: <i>OK</i>,
})

function App() {
  const [count, setCount] = useState(0)

  const showSwal = async () => {
    await ReactSwal.fire(<i>Hi from webpack! 🙂</i>, `SweetAlert2 version: ${Swal.version}`)

    const { value: name } = await ReactSwalWithInput.fire({
      text: 'What is your name?',
    })

    const { value: location } = await ReactSwalWithInput.fire({
      text: 'Where are you from?',
    })

    await Swal.fire(`Hi ${name} from ${location}!`, '', 'success')
  }

  return (
    <div className="App">
      <button onClick={showSwal}>sss</button>
    </div>
  )
}

export default App

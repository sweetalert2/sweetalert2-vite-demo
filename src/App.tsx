import { useEffect } from 'react'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'
import withReactContent from 'sweetalert2-react-content'

const ReactSwal = withReactContent(Swal)

const ReactSwalWithInput = ReactSwal.mixin({
  input: 'text',
  confirmButtonText: <i>OK</i>,
})

function App() {
  useEffect(() => {
    showSwal()
  }, [])

  const showSwal = async () => {
    await ReactSwal.fire(<i>Hi from Vite! 🙂</i>, `SweetAlert2 version: ${Swal.version}`)

    const { value: name } = await ReactSwalWithInput.fire({
      text: 'What is your name?',
    })

    const { value: location } = await ReactSwalWithInput.fire({
      text: 'Where are you from?',
    })

    await Swal.fire(`Hi ${name} from ${location}!`, '', 'success')
  }

  return (
    <div />
  )
}

export default App

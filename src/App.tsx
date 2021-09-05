import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global"
import Modal from "react-modal"

Modal.setAppElement("#root")

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  )
}

export default App

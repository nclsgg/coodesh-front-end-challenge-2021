import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { PatientsProvider, usePatients } from './hooks/usePatients';

Modal.setAppElement('#root');

function App() {
  return (
    <PatientsProvider>
      <Header />
      <Dashboard/>
      <GlobalStyle />
    </PatientsProvider>
  );
}

export default App;

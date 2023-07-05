import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from "./pages/Home"
import Error from "./pages/Error"
import Documentation from "./pages/Documentation"
import Navbar from './components/Navbar';
import Installation from './pages/Installation';
import Configuration from './pages/Configuration';

import Context from './context/Context';

import Button from './pages/Button/Button';
import ButtonUsage from './pages/Button/ButtonUsage';
import ButtonProps from './pages/Button/ButtonProps';
import Alert from './pages/Alert/Alert';
import Input from './pages/Input/Input';
import InputUsage from './pages/Input/InputUsage';
import InputProps from './pages/Input/InputProps';
import AlertUsage from './pages/Alert/AlertUsage';
import AlertProps from './pages/Alert/AlertProps';
import Spinner from './pages/Spinner/Spinner';
import SpinnerUsage from './pages/Spinner/SpinnerUsage';
import SpinnerProps from './pages/Spinner/SpinnerProps';
import Header from './pages/Header/Header';
import HeaderUsage from './pages/Header/HeaderUsage';
import HeaderProps from './pages/Header/HeaderProps';
import Container from './pages/Container/Container';
import ContainerUsage from './pages/Container/ContainerUsage';
import ContainerProps from './pages/Container/ContainerProps';
import Icons from './pages/Icons/Icons';
import IconsProps from './pages/Icons/IconsProps';
import IconsUsage from './pages/Icons/IconsUsage';

const App = () => {
  return (
    <div className='relative'>
      <Context>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/documentation' element={<Documentation />}>
              <Route path='installation' element={<Installation />} />
              <Route path='configuration' element={<Configuration />} />

              {/* Ui components */}

              <Route path='input' element={<Input />} >
                <Route path='/documentation/input' element={<InputUsage />} />
                <Route path='props' element={<InputProps />} />
              </Route>

              <Route path='alert' element={<Alert />}>
                <Route path='/documentation/alert' element={<AlertUsage />} />
                <Route path='props' element={<AlertProps />} />
              </Route>

              <Route path='button' element={<Button />}>
                <Route path='/documentation/button' element={<ButtonUsage />} />
                <Route path='props' element={<ButtonProps />} />
              </Route>

              <Route path='container' element={<Container />}>
                <Route path='/documentation/container' element={<ContainerUsage />} />
                <Route path='props' element={<ContainerProps />} />
              </Route>

              <Route path='header' element={<Header />} >
                <Route path='/documentation/header' element={<HeaderUsage />} />
                <Route path='props' element={<HeaderProps />} />
              </Route>

              <Route path='spinner' element={<Spinner />} >
                <Route path='/documentation/spinner' element={<SpinnerUsage />} />
                <Route path='props' element={<SpinnerProps />} />
              </Route>

              <Route path='icons' element={<Icons />} >
                <Route path='/documentation/icons' element={<IconsUsage />} />
                <Route path='props' element={<IconsProps />} />


              </Route>

            </Route>
            <Route path='*' element={<Error />} />
          </Routes>
        </Router>
      </Context>
    </div>
  )
}
export default App
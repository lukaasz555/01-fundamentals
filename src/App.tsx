import { FunctionComponent, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Secured from './views/Secured';
import Modal from './components/Modal/Modal';
import { ModalContext } from './context/ModalContext';
import Table from './views/Table';
import './App.css';

interface IAppProps {}

const App: FunctionComponent<IAppProps> = () => {
	const [isModalOpen, setModalOpen] = useState(false);

	// 1. ta struktura wydaje mi się dziwna, nie do końca jestem pewien co do Context>Routes;
	// chcialem stworzyc to pierwotnie jako createrBrowserRouter + RouterProvider, ale były jakieś problemy - dlatego zrobiłem w ten sposób.

	// 2. czy secure-link w ten spsób ma sens? chodzi o to, ze dopiero w komponencie jest sprawdzenie;

	return (
		<BrowserRouter>
			<ModalContext.Provider value={{ isModalOpen, setModalOpen }}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/secure-link' element={<Secured />} />
					<Route path='/table' element={<Table />} />
				</Routes>
				<Modal isOpen={isModalOpen} setModalOpen={setModalOpen} />
			</ModalContext.Provider>
		</BrowserRouter>
	);
};

export default App;

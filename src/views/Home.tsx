import { FunctionComponent } from 'react';
import { useModalContext } from '../context/ModalContext';

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
	const { isModalOpen, setModalOpen } = useModalContext();

	function showModal(): void {
		if (!isModalOpen) setModalOpen(true);
	}

	return (
		<div>
			<h1>home</h1>
			<button onClick={showModal}>show modal</button>
		</div>
	);
};

export default Home;

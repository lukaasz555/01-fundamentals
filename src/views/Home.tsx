import { useModalContext } from '../context/ModalContext';

interface HomeProps {}

export const Home = ({}: HomeProps) => {
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

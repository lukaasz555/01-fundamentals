import './ModalHeader.css';

interface ModalHeaderProps {
	title: string;
	toggleModal: () => void;
}

export const ModalHeader = ({ title, toggleModal }: ModalHeaderProps) => {
	return (
		<header>
			<h3>{title}</h3>
			<button onClick={toggleModal}>CLOSE</button>
		</header>
	);
};

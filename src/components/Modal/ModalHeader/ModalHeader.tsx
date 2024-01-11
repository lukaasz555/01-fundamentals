import { FunctionComponent } from 'react';
import './ModalHeader.css';

interface ModalHeaderProps {
	title: string;
	toggleModal: () => void;
}

const ModalHeader: FunctionComponent<ModalHeaderProps> = ({
	title,
	toggleModal,
}: ModalHeaderProps) => {
	return (
		<header>
			<h3>{title}</h3>
			<button onClick={toggleModal}>CLOSE</button>
		</header>
	);
};

export default ModalHeader;

import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import ModalHeader from './ModalHeader/ModalHeader';
import ModalContent from './ModalContent/ModalContent';
import './modal.css';
import ModalFooter from './ModalFooter/ModalFooter';

interface ModalProps {
	isOpen: boolean;
	setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal: FunctionComponent<ModalProps> = ({
	isOpen,
	setModalOpen,
}: ModalProps) => {
	function toggle() {
		setModalOpen(!isOpen);
	}

	function closeOnClickOutside(e: React.MouseEvent<HTMLElement>): void {
		const target = e.target as HTMLElement;
		if (target.classList.contains('modal__overlay')) {
			toggle();
		}
	}

	// if (!isOpen) return;

	return (
		!!isOpen && (
			<div className='modal__overlay' onClick={(e) => closeOnClickOutside(e)}>
				<div className='modal__wrapper'>
					<ModalHeader title='modal text test' toggleModal={toggle} />
					<ModalContent>
						<div className='first-modal'>
							<h4>content - subtitle</h4>
							{[1, 2, 3].map((x) => (
								<div key={x}>content {x}</div>
							))}
						</div>
					</ModalContent>
					<ModalFooter callToActionLabel={'Udało się'} toggleModal={toggle} />
				</div>
			</div>
		)
	);
};

export default Modal;

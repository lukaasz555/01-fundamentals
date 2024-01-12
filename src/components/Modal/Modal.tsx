import { Dispatch, SetStateAction } from 'react';
import { ModalHeader } from './ModalHeader/ModalHeader';
import { ModalContent } from './ModalContent/ModalContent';
import { ModalFooter } from './ModalFooter/ModalFooter';
import './modal.css';

interface ModalProps {
	isOpen: boolean;
	setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ isOpen, setModalOpen }: ModalProps) => {
	function toggle() {
		setModalOpen(!isOpen);
	}

	function onClickOutside(e: React.MouseEvent<HTMLElement>): void {
		const target = e.target as HTMLElement;
		if (target.classList.contains('modal__overlay')) {
			toggle();
		}
	}

	return (
		!!isOpen && (
			<div className='modal__overlay' onClick={onClickOutside}>
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

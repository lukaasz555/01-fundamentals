import './ModalFooter.css';

interface ModalFooterProps {
	callToActionLabel: string;
	toggleModal: () => void;
}

export const ModalFooter = ({
	callToActionLabel,
	toggleModal,
}: ModalFooterProps) => {
	function handleCtaClick(): void {
		alert('OK');
		toggleModal();
	}

	return (
		<footer>
			<div>
				<button onClick={handleCtaClick}>{callToActionLabel}</button>
				<button onClick={toggleModal}>Cancel</button>
			</div>
		</footer>
	);
};

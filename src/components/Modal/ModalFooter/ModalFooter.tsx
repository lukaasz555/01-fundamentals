import './ModalFooter.css';

interface ModalFooterProps {
	callToActionLabel: string;
	toggleModal: () => void;
}

// dwa przyciski po prawej stronie, z ktorego jeden to cancel a drugi to {callToActionLabel}
// oba przyciski mają zamykać modal,
// podczas kliknięcia w przycisk z tekstem callToActionLabel, dodatkowo ma wyskakiwać alert z tekstem "OK"

const ModalFooter = ({ callToActionLabel, toggleModal }: ModalFooterProps) => {
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

export default ModalFooter;

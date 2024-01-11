import { FunctionComponent } from 'react';
import './PaginationButton.css';

interface PaginationButtonProps {
	pageNumber: number;
	buttonText: string;
	setPage: (() => void) | ((n: number) => void);
	isActive?: boolean;
	isDisabled?: boolean;
}

const PaginationButton: FunctionComponent<PaginationButtonProps> = ({
	pageNumber,
	buttonText,
	setPage,
	isActive = false,
	isDisabled = false,
}) => {
	function setPageNumber(n: number): void {
		setPage(n);
	}

	return (
		<button
			className={isActive ? 'active' : ''}
			disabled={isDisabled}
			onClick={() => setPageNumber(pageNumber)}>
			<span>{buttonText}</span>
		</button>
	);
};

export default PaginationButton;

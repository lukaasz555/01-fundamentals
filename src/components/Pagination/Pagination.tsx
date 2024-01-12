import PaginationButton from './PaginationButton/PaginationButton';
import './Pagination.css';

export interface PaginationProps {
	actualPageIdx: number;
	lastPageIdx: number;
	goToPage: (n: number) => void;
	goToFirstPage: () => void;
	goToPrevPage: () => void;
	goToNextPage: () => void;
	goToLastPage: (n: number) => void;
}

export const Pagination = ({
	actualPageIdx,
	lastPageIdx,
	goToPage,
	goToFirstPage,
	goToPrevPage,
	goToNextPage,
	goToLastPage,
}: PaginationProps) => {
	const buttonsWithNumbers: JSX.Element[] = [];
	for (let i = 0; i <= lastPageIdx; i++) {
		buttonsWithNumbers.push(
			<PaginationButton
				buttonText={String(i + 1)}
				pageNumber={i + 1}
				key={i}
				isActive={actualPageIdx == i}
				setPage={goToPage}
			/>
		);
	}

	return (
		<div className='pagination__container'>
			<PaginationButton
				buttonText='first'
				isActive={false}
				pageNumber={1}
				isDisabled={actualPageIdx == 0}
				setPage={goToFirstPage}
			/>
			{actualPageIdx < 1 ? null : (
				<PaginationButton
					buttonText='<<'
					isActive={false}
					pageNumber={actualPageIdx - 1}
					isDisabled={actualPageIdx < 1}
					setPage={goToPrevPage}
				/>
			)}
			{buttonsWithNumbers}
			{actualPageIdx == lastPageIdx ? null : (
				<PaginationButton
					buttonText='>>'
					isActive={false}
					pageNumber={actualPageIdx + 1}
					setPage={goToNextPage}
				/>
			)}
			<PaginationButton
				buttonText='last'
				isActive={false}
				pageNumber={1}
				isDisabled={actualPageIdx == lastPageIdx}
				setPage={() => goToLastPage(lastPageIdx + 1)}
			/>
		</div>
	);
};

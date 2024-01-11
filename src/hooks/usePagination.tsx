import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

type PaginationReturnType<T> = [
	{
		actualPageIdx: number;
		lastPageIdx: number;
		entriesOnSelectedPage: T[];
		isBusy: boolean;
	},
	{
		goToPage: (n: number) => void;
		goToFirstPage: () => void;
		goToPrevPage: () => void;
		goToNextPage: () => void;
		goToLastPage: () => void;
	}
];

export function usePagination<T>(
	items: Array<T>,
	elementsOnPage = 10
): PaginationReturnType<T> {
	const [entriesOnSelectedPage, setEntriesOnSelectedPage] = useState<T[]>([]);
	const [lastPageIdx, setLastPageIdx] = useState(0);
	const [isBusy, setIsBusy] = useState(false);

	const [searchParams, setSearchParams] = useSearchParams();
	const queryPage = Number(searchParams.get('page')) - 1;
	const queryLimit = Number(searchParams.get('limit'));

	const actualPageIdx = queryPage > -1 ? queryPage : 0;
	const limit = queryLimit > 0 ? queryLimit : elementsOnPage;
	const totalPagesNumber = Math.ceil(items.length / limit);

	function handlePageChange(pageNumber: number): void {
		setIsBusy(true);
		setSearchParams((prev) => {
			prev.set('page', String(pageNumber));
			prev.set('limit', limit > 0 ? String(limit) : String(10));
			return prev;
		});
		setTimeout(() => {
			setIsBusy(false);
		}, 333);
	}

	const goToPage = (pageNumber: number) => handlePageChange(pageNumber);
	const goToFirstPage = () => handlePageChange(1);
	const goToLastPage = () => handlePageChange(lastPageIdx + 1);
	const goToPrevPage = () =>
		actualPageIdx > 0 && handlePageChange(actualPageIdx);
	const goToNextPage = () =>
		actualPageIdx < lastPageIdx && handlePageChange(actualPageIdx + 2);

	useEffect(() => {
		setLastPageIdx(totalPagesNumber - 1);
		const offset = actualPageIdx * limit;
		const currentRecords = items.slice(offset, offset + limit);
		setEntriesOnSelectedPage(currentRecords);
	}, [actualPageIdx, items, elementsOnPage]);

	return [
		{
			actualPageIdx,
			lastPageIdx,
			entriesOnSelectedPage,
			isBusy,
		},
		{
			goToPage,
			goToFirstPage,
			goToLastPage,
			goToNextPage: goToNextPage,
			goToPrevPage,
		},
	];
}

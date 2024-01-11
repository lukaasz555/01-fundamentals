import { FunctionComponent } from 'react';
import PaginatedTable from '../components/PaginatedTable/PaginatedTable';
import { persons as mockData } from '../data/mockPersons';
import { personHeaders } from '../data/persons.headers';
import { usePagination } from '../hooks/usePagination';
import Pagination from '../components/Pagination/Pagination';

interface TableProps {}

const Table: FunctionComponent<TableProps> = () => {
	const [
		{ actualPageIdx, lastPageIdx, entriesOnSelectedPage, isBusy },
		{ goToFirstPage, goToPrevPage, goToPage, goToNextPage, goToLastPage },
	] = usePagination(mockData);

	// 1. Nie jestem przekonany co do uzycia tutaj {children}, ale chcialem customowe dane w tabeli - dlatego tego uzylem.

	if (isBusy) return <p>Loading...</p>;

	return (
		<div>
			<PaginatedTable tableHeaders={personHeaders}>
				{entriesOnSelectedPage.map((item) => (
					<tr key={item.id}>
						<td>{item.id}</td>
						<td>
							{item.name} {item.lastname}
						</td>
						<td>{item.email}</td>
						<td>X</td>
					</tr>
				))}
			</PaginatedTable>
			<Pagination
				actualPageIdx={actualPageIdx}
				lastPageIdx={lastPageIdx}
				goToFirstPage={goToFirstPage}
				goToPrevPage={goToPrevPage}
				goToPage={goToPage}
				goToLastPage={goToLastPage}
				goToNextPage={goToNextPage}
			/>
		</div>
	);
};

export default Table;

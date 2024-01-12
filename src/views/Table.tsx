import PaginatedTable from '../components/PaginatedTable/PaginatedTable';
import { persons as mockData } from '../data/mockPersons';
import { personHeaders } from '../data/persons.headers';
import { usePagination } from '../hooks/usePagination';
import { Pagination } from '../components/Pagination/Pagination';
import { FunctionComponent } from 'react';

interface TableProps {}

export const Table: FunctionComponent<TableProps> = () => {
	const [
		{ actualPageIdx, lastPageIdx, entriesOnSelectedPage, isBusy },
		actions,
	] = usePagination(mockData);

	if (isBusy) return <p>Loading...</p>;

	return (
		<div>
			<PaginatedTable tableHeaders={personHeaders}>
				{entriesOnSelectedPage.map(({ id, name, lastname, email }) => (
					<tr key={id}>
						<td>{id}</td>
						<td>
							{name} {lastname}
						</td>
						<td>{email}</td>
						<td>X</td>
					</tr>
				))}
			</PaginatedTable>
			<Pagination
				{...actions}
				actualPageIdx={actualPageIdx}
				lastPageIdx={lastPageIdx}
			/>
		</div>
	);
};

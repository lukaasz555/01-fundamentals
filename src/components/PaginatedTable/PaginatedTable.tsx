import { TableHeader } from '../../data/persons.headers';
import './PaginatedTable.css';

interface PaginatedTableProps<T> {
	tableHeaders: TableHeader<T>[];
	children: React.ReactNode;
}

// Na początku zrobilem to jako zwykla funkcje, potem sprawdzałem arrow func. Nie uzywalem wcześniej notacji <T,> : D

const PaginatedTable = <T,>({
	tableHeaders,
	children,
}: PaginatedTableProps<T>) => {
	return (
		<div className='table__wrapper'>
			<table>
				<thead className='table__header'>
					<tr>
						{tableHeaders.map((h, i) => (
							<th
								key={i}
								style={{
									width: h.width,
									textAlign: h.align,
									padding: '0.25em 0.5em',
								}}>
								{h.text}
							</th>
						))}
					</tr>
				</thead>
				<tbody>{children}</tbody>
			</table>
		</div>
	);
};

// function PaginatedTable<T>({ tableHeaders, children }: PaginatedTableProps<T>) {
// 	return (
// 		<div className='table__wrapper'>
// 			<table>
// 				<thead className='table__header'>
// 					<tr>
// 						{tableHeaders.map((h, i) => (
// 							<th
// 								key={i}
// 								style={{
// 									width: h.width,
// 									textAlign: h.align,
// 									padding: '0.25em 0.5em',
// 								}}>
// 								{h.text}
// 							</th>
// 						))}
// 					</tr>
// 				</thead>
// 				<tbody>{children}</tbody>
// 			</table>
// 		</div>
// 	);
// }

export default PaginatedTable;

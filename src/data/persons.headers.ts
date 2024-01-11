import { IPerson } from './IPerson';

export interface TableHeader<T> {
	value: keyof T | 'action';
	text: string;
	width?: number;
	align: 'left' | 'center' | 'right';
}

export const personHeaders: TableHeader<IPerson>[] = [
	{
		value: 'id',
		text: 'ID',
		width: 50,
		align: 'center',
	},
	{
		value: 'name',
		text: 'Name and lastname',
		align: 'center',
		width: 200,
	},
	{
		value: 'email',
		text: 'E-mail address',
		align: 'center',
		width: 300,
	},
	{
		value: 'action',
		text: 'Action',
		align: 'center',
		width: 50,
	},
];

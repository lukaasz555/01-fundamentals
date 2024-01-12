import { CharItem } from '../components/PasswordInput/PasswordInput';

export const getRandomIndexes = (
	charsNumber: number,
	lastIndex: number
): number[] => {
	const res: number[] = [];

	while (res.length < charsNumber) {
		const index = Math.floor(Math.random() * lastIndex);
		if (!res.includes(index)) {
			res.push(index);
		}
	}
	return res;
};

export const getChars = (password: string) => {
	const minLength = 2;
	const maxLength = Math.floor(password.length / 2);

	const range = maxLength - minLength + 1;
	const charsNumber = Math.floor(Math.random() * range) + minLength;
	const indexes = getRandomIndexes(charsNumber, password.length - 1);

	const arr = Array.from(password);
	const res = arr.map((x, i) => {
		const isDisabled = indexes.includes(i) ? false : true;
		const newChar = new CharItem(x, isDisabled);
		return newChar;
	});

	return res;
};

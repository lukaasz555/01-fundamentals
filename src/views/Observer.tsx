import { ObserverItem } from '../components/ObserverItem/ObserverItem';

const items = [
	{
		bgCol: '#8DE969',
	},
	{
		bgCol: '#FF6B35',
	},
	{
		bgCol: '#84A07C',
	},
	{
		bgCol: '#6CCFF6',
	},
];

export const Observer = () => {
	return (
		<main
			className='observer__wrapper'
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '3em',
				background: 'inherit',
			}}>
			{items.map(({ bgCol }, index) => (
				<ObserverItem key={index} bgCol={bgCol} index={index} />
			))}
		</main>
	);
};

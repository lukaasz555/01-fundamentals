import { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './ObserverItem.css';

interface ObserverItemProps {
	bgCol: string;
	index: number;
}

export const ObserverItem = ({ bgCol, index }: ObserverItemProps) => {
	const [isVisible, setVisible] = useState(false);

	const itemRef = useIntersectionObserver((entries) => {
		const [entry] = entries;
		setVisible(entry.isIntersecting);
	});

	return (
		<div
			ref={itemRef}
			className={`item__container ${!!isVisible && 'active'}`}
			style={{ background: bgCol }}>
			Item #{index + 1}
		</div>
	);
};

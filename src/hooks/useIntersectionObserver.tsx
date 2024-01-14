import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (
	cb: (entries: IntersectionObserverEntry[]) => void
) => {
	const [element, setElement] = useState<HTMLElement | null>(null);
	const observer = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		if (element) {
			observer.current = new IntersectionObserver(cb, {
				root: null,
				rootMargin: '0px',
				threshold: 0.1,
			});

			observer.current.observe(element);
			return () => {
				if (observer.current) {
					observer.current.unobserve(element);
				}
			};
		}
	}, [element, cb]);

	return setElement;
};

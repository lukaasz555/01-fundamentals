import { SetStateAction, createContext, useContext } from 'react';

export type ModalContextType = {
	isModalOpen: boolean;
	setModalOpen: React.Dispatch<SetStateAction<boolean>>;
};

export const ModalContext = createContext<ModalContextType>({
	isModalOpen: false,
	setModalOpen: () => {},
});

export const useModalContext = () => useContext(ModalContext);

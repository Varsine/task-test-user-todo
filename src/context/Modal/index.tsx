import {createContext} from 'react';

import {useModal} from '~/hooks';
import {Modal} from '~/components';

import {IModalContext} from './types';

export const ModalContext = createContext<IModalContext>({
  modal: false,
  modalContent: null,
  openModal: () => {},
  closeModal: () => {},
});

export const ModalContextProvider: React.FC = ({children}) => {
  const useModalReturn = useModal();

  return (
    <ModalContext.Provider value={useModalReturn}>
      <div className="modal-back-content">
        <Modal />
        {children}
      </div>

      <div id="modal-root" />
    </ModalContext.Provider>
  );
};

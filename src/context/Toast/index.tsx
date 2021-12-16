import {createContext} from 'react';
import {ToastContainer, toast} from 'react-toastify';

import {IToastContext} from './types';

export const ToastContext = createContext<IToastContext | null>(null);

export const ToastContextProvider: React.FC = ({children}) => (
  <ToastContext.Provider
    value={{
      toast,
    }}>
    {children}
    <ToastContainer />
  </ToastContext.Provider>
);

import {createContext, useContext, useState} from 'react';

import Toast from '../components/Toast';

const ToastContext = createContext();

let toastCount = 0;

/**
 * ToastProvider toast provider
 * @component
 * @return {function}
 */
export default function ToastProvider({children}) {
  const [toasts, setToasts] = useState([]);

  const toast = (content) => {
    const id = toastCount++;
    const toast = {content, id};
    setToasts([...toasts, toast]);
    remove(id, false);
  };
  const remove = (id, instantly = true) => {
    const timeout = instantly ? 0 : 3000;
    const newToasts = toasts.filter((t) => t.id !== id);
    setTimeout(function() {
      setToasts(newToasts);
    }, timeout);
  };
  // avoid creating a new fn on every render
  const onDismiss = (id) => () => remove(id);

  return (
    <ToastContext.Provider value={{toast, remove}}>
      {children}
      <div style={{position: 'fixed', right: 10, top: 70}}>
        {toasts.map(({content, id, ...rest}) => (
          <Toast key={id} Toast={Toast} onDismiss={onDismiss(id)} {...rest}>
            {content}
          </Toast>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

// Consumer
// ==============================

export const useToasts = () => useContext(ToastContext);

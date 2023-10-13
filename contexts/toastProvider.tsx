import {createContext, useCallback, useContext, useMemo, useState} from 'react';

import Toast from '@/components/toast';

type IToast = {
  content?: string;
  id: number;
  type?: string;
}

const ToastContext = createContext({
  toast: (content: string) => {},
  remove: (id: number, instantly?: boolean) => {},
});

let toastCount = 0;

/**
 * ToastProvider toast provider
 * @component
 * @return {function}
 */
export default function ToastProvider({children}: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<IToast[]>([]);

  const remove = useCallback((id: number, instantly: boolean = true) => {
    const timeout = instantly ? 0 : 3000;
    const newToasts = toasts.filter((t) => t.id !== id);
    setTimeout(function() {
      setToasts(newToasts);
    }, timeout);
  }, [toasts]);

  const toast = useCallback((content: string) => {
    const id = toastCount++;
    const toast = {content, id};
    setToasts([...toasts, toast]);
    remove(id, false);
  }, [remove, toasts]);

  // avoid creating a new fn on every render
  const onDismiss = useCallback((id: number) => {
    remove(id);
  }, [remove]);

  const value = useMemo(() => ({
    toast,
    remove,
  }), [remove, toast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div style={{position: 'fixed', right: 10, top: 70}}>
        {toasts.map(({content, id, ...rest}) => (
          <Toast key={id} onDismiss={() => onDismiss(id)} {...rest}>
            {content}
          </Toast>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

// Consumer
export const useToast = () => useContext(ToastContext);
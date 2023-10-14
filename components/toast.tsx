/**
 * Custom tailwind toast component
 * @component
 * @return {function}
 */
export default function Toast({children, onDismiss, type}: {children: React.ReactNode, onDismiss: () => void, type?: string}) {
  switch (type) {
    case 'success':
      return (
        <div className="mb-5" onClick={onDismiss}>
          <div
            className="
              flex
              w-full
              max-w-sm
              mx-auto
              overflow-hidden
              bg-white
              rounded-lg
              shadow-md
              dark:bg-gray-800"
          >
            <div className="flex items-center justify-center w-12 bg-green-500">
              <svg
                className="w-6 h-6 text-white fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2
                   10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667
                   20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337
                   20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667
                   13.3333L16.6667 28.3333Z"
                />
              </svg>
            </div>
            <div className="px-4 py-2 -mx-3">
              <div className="mx-3">
                <span className="font-semibold text-green-500 dark:text-green-400"
                >Success</span>
                <p className="text-sm text-gray-600 dark:text-gray-200">
                  {children}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    case 'info':
      break;
    case 'warning':
      break;
    case 'danger':
      break;
    default:
      return (
        <div className="mb-5" onClick={onDismiss}>
          <div
            className="
              flex
              w-full
              max-w-sm
              mx-auto
              overflow-hidden
              bg-white
              rounded-lg
              shadow-md
              dark:bg-gray-800"
          >
            <div className="flex items-center justify-center w-12 bg-green-500">
              <svg
                className="w-6 h-6 text-white fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2
                   10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667
                   20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337
                   20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667
                   13.3333L16.6667 28.3333Z"
                />
              </svg>
            </div>
            <div className="px-4 py-2 -mx-3">
              <div className="mx-3">
                <span className="font-semibold text-green-500 dark:text-green-400"
                >Success</span>
                <p className="text-sm text-gray-600 dark:text-gray-200">
                  {children}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
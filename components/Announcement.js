import {useState} from 'react';
import Link from 'next/link';

/**
 * Announcement component
 * @param {Object} props
 * @return {JSX}
 */
export default function Announcement() {
  const [announcementHidden, setAnnouncementHidden] = useState(false);

  /**
   * Function to hide announcement
   * @param {Event} event
   * @return {void}
   */
  function hideAnnouncement() {
    setAnnouncementHidden(true);
  }

  if (announcementHidden) {
    return null;
  }

  return (
    <section className='p-0'>
      <div className="bg-gray-500">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-primary">
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">Larven Hackathons event this January!</span>
                <span className="hidden md:inline">
                  Big news! We&apos;re excited to conduct our first ever Larven Hackathons event.
                </span>
              </p>
            </div>
            <div className="order-3 mt-0 m-3 flex-shrink-0 w-full sm:order-2 sm:m-0 sm:w-auto">
              <Link href='https://discord.gg/X4YcTCNJFU' passHref>
                <button
                  className="button-primary-light"
                >
                Register on Discord
                </button>
              </Link>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                className="-mr-1 flex p-2 rounded-md hover:bg-primary hover:bg-opacity-60
                focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                onClick={hideAnnouncement}
              >
                <span className="sr-only">Dismiss</span>
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

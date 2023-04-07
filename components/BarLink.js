import Link from 'next/link';

/**
 * Bar Link Component
 * @param {object} props
 * @param {string} props.href
 * @param {JSX} props.icon
 * @param {string} props.text
 * @param {boolean} props.light
 * @return {JSX}
 */
export default function BarLink({href, icon, text, light}) {
  return (
    <Link
      href={href}
      className={`
        flex items-center border border-primary bg-primary mb-4
        ${light ? 'bg-opacity-5' : 'bg-opacity-30'} p-3 rounded-lg
      `}
    >
      {icon}
      <span className="text-white font-normal">{text}</span>
    </Link>
  );
}

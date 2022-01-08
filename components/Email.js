/**
 * component to render larven email
 * @param {object} props
 * @return {JSX}
 */
export default function Email({className}) {
  return (
    <a
      href="mailto:info@larven.co.tz"
      className={className}
      aria-label='email'
      title='email'
    >
      info@larven.co.tz
    </a>
  );
}

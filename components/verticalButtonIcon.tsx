import Image from 'next/image';

/**
 * VerticalButtonIcon Component
 * @param {object} props
 * @param {string} props.alt
 * @param {string} [props.colorClass="bg-primary"]
 * @param {string} props.src
 * @return {JSX}
 */
export default function VerticalButtonIcon({alt, src, colorClass = 'bg-primary'}) {
  return (<div className="text-center relative">
    <div
      className="
        bg-primary
        bg-opacity-5
        h-[100px] w-[100px]
        rounded-full
        absolute top-[0px]
        z-[-1]
      "
      style={{left: 'calc(50% - 110px)'}}
    />
    <div className={`${colorClass} inline-block rounded-full rounded-tl-none py-10 px-6 mt-[50px]`}>
      <Image src={src} width={70} height={55} alt={alt} />
    </div>
  </div>);
}
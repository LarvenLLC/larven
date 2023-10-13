"use client"

import {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {CarouselProvider} from 'pure-react-carousel';
import {XCircleIcon, CheckCircleIcon} from '@heroicons/react/24/solid';

import buttonStyles from '@/styles/button.module.css';
import cardStyles from '@/styles/card.module.css';
import headingStyles from '@/styles/heading.module.css';
import Footer from '@/components/footer';
import Newsletter from '@/components/newsletter';
import Testimonials from '@/components/testimonials';
import VerticalButtonIcon from '@/components/verticalButtonIcon';

/**
 * Index page
 * @param {*} props
 * @return {React.Component}
 */
export default function Home() {
  const cardRef = useRef<HTMLDivElement>(null);

  const [cardHeight, setCardHeight] = useState(0);

  useEffect(() => {
    if (cardRef.current?.clientHeight) {
      setCardHeight(cardRef.current.clientHeight);
    }
  }, [cardRef.current?.clientHeight]);

  return (
    <>
        {/* announcement section */}
        {/* <Announcement /> */}
        {/* landing section */}
        <section className="container-fluid !p-0 !mx-0 max-w-none relative overflow-x-hidden min-h-[600px]">
          <div className="container">
            <div className="row gx-5">
              <div className='col-6 flex flex-col items-start justify-center'>
                <h1 className="mb-0">
                  Unlock Your <span className='text-primary'>Potential</span> with Digital Solutions
                </h1>
                <p className="mb-12">
                  We are here to assist you in transforming your business processes and operations so that you can
                  accomplish more in less time while increasing your profitability.
                </p>
                <button type="button" className={`${buttonStyles.primary} mb-6`}>Hire Your Technicians</button>
              </div>
              <div className='col-6'>
                <Image src="/images/landing-right.png"
                  className='max-w-[670px] mb-0'
                  height={760}
                  width={670}
                  alt="Larven workspace"
                  priority
                />
              </div>
            </div>
          </div>
          <Image src="/images/landing-cover.png"
            className='p-0 m-0 max-w-[800px] max-h-[800px] object-contain object-left-top z-[-1]'
            alt=""
            fill
          />
        </section>
        {/* what we do section */}
        <section className="container overflow-x-hidden">
          <h1 className={headingStyles.title}>WHAT WE DO</h1>
          <h2 className={headingStyles.heading}>
            Discover What We Can Do
            <div className='font-normal'>For You!</div>
          </h2>
          <div className="row row-cols-4 no-prose">
            <div>
              <VerticalButtonIcon src="/images/desktop-tower.svg" alt="Larven Software" />
              <h3>Software Project Implementation</h3>
              <ul className="list-disc pl-4">
                <li className="">Project Basis</li>
                <li className="">Prototypes/MVPs</li>
                <li className="">For Startups Enterprises</li>
              </ul>
            </div>
            <div>
              <VerticalButtonIcon
                colorClass="bg-[#397DF8]"
                src="/images/desktop-tower.svg"
                alt="Larven Software"
              />
              <h3>Staff Augmentation</h3>
              <ul className="list-disc pl-4">
                <li className="">Dedicated Team</li>
                <li className="">Support/Maintenance</li>
                <li className="">For Enterprises/Startups</li>
              </ul>
            </div>
            <div>
              <VerticalButtonIcon
                colorClass="bg-[#05306A]"
                src="/images/desktop-tower.svg"
                alt="Larven Software"
              />
              <h3>Process Digitization</h3>
              <ul className="list-disc pl-4">
                <li className="">Client-Agency Collaboration</li>
                <li className="">Process Improvement/Scaling</li>
                <li className="">For SMEs</li>
              </ul>
            </div>
            <div>
              <VerticalButtonIcon
                colorClass="bg-[#E9AB50]"
                src="/images/desktop-tower.svg"
                alt="Larven Software"
              />
              <h3>Consultation</h3>
              <ul className="list-disc pl-4">
                <li className="">Research &amp; Development</li>
                <li className="">IT Project Management</li>
                <li className="">Training</li>
              </ul>
            </div>
          </div>
        </section>
        {/* how we work section */}
        <section className="container-fluid !px-0 !mx-0 max-w-none relative overflow-x-hidden">
          <Image src="/images/left-stripes-decoration.svg"
            className='p-0 m-0 max-h-[800px] object-contain object-left-top z-[-1]'
            alt=""
            fill
          />
          <div className="container">
            <h1 className={headingStyles.title}>HOW WE WORK</h1>
            <h2 className={headingStyles.heading}>
              Discover The Steps We Take
              <div className='font-normal'>To Ensure Your Success!</div>
            </h2>
            <div
              className="row md:row-cols-4 gx-0"
              style={{marginBottom: cardHeight + 12}}
            >
              <div>
                <div ref={cardRef} className={`${cardStyles.card} h-[332px]`}>
                  <p className={cardStyles.number}>1</p>
                  <h3 className={cardStyles.heading}>Planning</h3>
                  <p className={cardStyles.description}>
                  We define objectives, determine scope and tasks, identify stakeholders, and develop a budget.
                  </p>
                </div>
                <div className="flex items-center w-full mt-3">
                  <div className="h-[30px] w-[30px] rounded-full bg-primary" />
                  <div className="h-1 w-full bg-primary" />
                </div>
              </div>
              <div className="relative" style={{top: cardHeight}}>
                <div className="flex items-center w-full mt-3">
                  <div className="h-[30px] w-[30px] rounded-full bg-primary" />
                  <div className="h-1 w-full bg-primary" />
                </div>
                <div
                  className={`${cardStyles.card} ${cardStyles['top-edge']} h-[332px]`}
                >
                  <p className={cardStyles.number}>2</p>
                  <h3 className={cardStyles.heading}>Build Up</h3>
                  <p className={cardStyles.description}>
                    We assemble the team, plan assignments, create a schedule, and hold a kickoff meeting!
                  </p>
                </div>
              </div>
              <div className="">
                <div className={`${cardStyles.card} h-[332px]`}>
                  <p className={cardStyles.number}>3</p>
                  <h3 className={cardStyles.heading}>Implimentation</h3>
                  <p className={cardStyles.description}>
                    We monitor and control process and budget, report weekly progress in writing, hold weekly team
                    meetings (via video conference)!
                  </p>
                </div>
                <div className="flex items-center w-full mt-3">
                  <div className="h-[30px] w-[30px] rounded-full bg-primary" />
                  <div className="h-1 w-full bg-primary" />
                </div>
              </div>
              <div className="relative" style={{top: cardHeight}}>
                <div className="flex items-center w-full mt-3">
                  <div className="h-[30px] w-[30px] rounded-full bg-primary" />
                </div>
                <div
                  className={`${cardStyles.card} ${cardStyles['top-edge']} h-[332px]`}
                >
                  <p className={cardStyles.number}>4</p>
                  <h3 className={cardStyles.heading}>Closing</h3>
                  <p className={cardStyles.description}>
                    We hand over proper documentation, evaluate project performance, close the project,
                    and conduct a team briefing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Image src="/images/right-stripes-decoration.png"
            className='p-0 m-0 max-h-[800px] bottom-0 object-contain object-right-bottom z-[-1]'
            alt=""
            fill
          />
        </section>
        {/* who we work with section */}
        <section className="container-fluid !px-0 !mx-0 max-w-none relative overflow-x-hidden">
          <div className="container">
            <div className="row">
              <div className="md:col-8 lg:col-7">
                <div className="row md:row-cols-2">
                  {[
                    {image: '/images/early-startup.jpeg', caption: 'Early Stage Startups'},
                    {image: '/images/funded-startup.jpeg', caption: 'Funded Startups'},
                    {image: '/images/established-business.jpeg', caption: 'Established (Traditional) Businesses'},
                    {image: '/images/enterprise.jpeg', caption: 'Enterprises'},
                  ].map(({image, caption}, index) => (<div key={caption}>
                    <div className="relative h-[300px] overflow-hidden rounded-lg">
                      <div
                        className="absolute bottom-2 left-2 capitalize z-10"
                      >
                        <button
                          type="button"
                          className={`
                            ${buttonStyles['outline-primary']}
                            ${buttonStyles.small}
                            ${index >= 2 && buttonStyles['bottom-edge']}
                            capitalize
                          `}
                        >
                          {caption}
                        </button>
                      </div>
                      <Image src={image} className="object-cover object-center rounded-lg" alt={caption} fill />
                    </div>
                  </div>))}
                </div>
              </div>
              <div className="md:col flex flex-col items-start justify-center">
                <h1 className={`${headingStyles.title} text-left !pb-[2rem]`}>WHO WE WORK WITH</h1>
                <h2 className={`${headingStyles.heading} text-left`}>
                  Discover Who We Work With
                  <span className='font-normal'> To Achieve Your Goals!</span>
                </h2>
                <button type="button" className={`${buttonStyles.primary}`}>Hire Your Technicians</button>
              </div>
            </div>
          </div>
          <div
            className="
              absolute w-[80%] max-w-[1187px] h-full right-0 top-0 bg-primary
              bg-opacity-5 rounded-br-none rounded-bl-[250px] z-[-1]
            "
          />
        </section>
        {/* larven vs others section */}
        <section
          className="container-fluid !px-0 !mx-0 max-w-none relative overflow-x-hidden bg-[#F5F5F5]"
        >
          <div className="container">
            <h1 className={headingStyles.title}>LARVEN VS OTHERS</h1>
            <table className="border-collapse table-auto w-full text-xl rounded-t-none rounded-b-[50px] shadow">
              <thead>
                <tr>
                  <th></th>
                  <th>LARVEN</th>
                  <th>OTHERS</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    comparison: 'COST',
                    larven: 'Relative to your needs',
                    others: 'Enterprise costs for everyone',
                  },
                  {
                    comparison: 'PROCESS',
                    larven: 'Clear and documented',
                    others: 'Full of surprises',
                  },
                  {
                    comparison: 'SCALE',
                    larven: 'At your own pace, your own way',
                    others: 'Vetting is necessary but costly in time, money, and efficiency',
                  },
                  {
                    comparison: 'HAND OVER STRATEGY',
                    larven: 'Each client set-up to fly on its own',
                    others: 'Create vendor dependency',
                  },
                  {
                    comparison: 'PRIVACY & SECURITY',
                    larven: 'Secure and dependable for clients',
                    others: 'Exploiting business data and involving third parties',
                  },
                  {
                    comparison: 'TEAM',
                    larven: 'A recommended team based on needs of the project',
                    others: 'Take what you are given without questions',
                  },
                  {
                    comparison: 'PROJECT MANAGEMENT',
                    larven: 'Flexible and based on project needs',
                    others: 'Biased towards own preference',
                  },
                ].map(({comparison, larven, others}, index) => {
                  const isOdd = index % 2;
                  return (<tr key={comparison}>
                    <th className={`px-8 py-8 ${isOdd ? 'bg-primary bg-opacity-5' : ''}`}>{comparison}</th>
                    <td className={`px-8 py-8 text-white bg-primary ${isOdd ? '' : 'bg-opacity-50'}`}>
                      <div className="flex items-center ">
                        <span className="w-[24px] h-[24px] mr-2">
                          <CheckCircleIcon height={24} width={24} className="text-white" />
                        </span> {larven}
                      </div>
                    </td>
                    <td className={`px-8 py-8 ${isOdd ? 'bg-primary bg-opacity-5' : ''}`}>
                      <div className="flex items-center ">
                        <span className="w-[24px] h-[24px] mr-2">
                          <XCircleIcon height={24} width={24} className="text-primary" />
                        </span> {others}
                      </div>
                    </td>
                  </tr>);
                })}
              </tbody>
            </table>
          </div>
        </section>
        {/* testimonials section */}
        <section
          className="container-fluid !px-0 !mx-0 max-w-none relative overflow-x-hidden"
          style={{background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), #FFFFFF'}}
        >
          <div className="container">
            <h1 className={headingStyles.title}>TESTIMONIALS</h1>
            <h2 className={headingStyles.heading}>
              What Our Customers Say
            </h2>
            <CarouselProvider
              isPlaying
              infinite
              naturalSlideWidth={100}
              naturalSlideHeight={50}
              totalSlides={5}
              isIntrinsicHeight
              className="relative no-prose mt-28"
            >
              <Testimonials />
            </CarouselProvider>
          </div>
        </section>
        {/* case studies section */}
        <section className="container-fluid !px-0 !mx-0 max-w-none relative overflow-x-hidden">
          <div className="container">
            <div className="row">
              <div className="md:col flex flex-col items-start justify-center">
                <h1 className={`${headingStyles.title} text-left !pb-[2rem]`}>OUR CASE STUDIES</h1>
                <h2 className={`${headingStyles.heading} text-left`}>
                  Our Most Popular Articles
                </h2>
                <button type="button" className={`${buttonStyles.primary}`}>See All Articles</button>
              </div>
              <div className="md:col-8 lg:col-7">
                <div className="row md:row-cols-2 g-3">
                  {[
                    {image: '/images/early-startup.jpeg', caption: 'Early Stage Startups'},
                    {image: '/images/funded-startup.jpeg', caption: 'Funded Startups'},
                    {image: '/images/established-business.jpeg', caption: 'Established (Traditional) Businesses'},
                    {image: '/images/enterprise.jpeg', caption: 'Enterprises'},
                  ].map(({image, caption}, index) => (<div key={caption}>
                    <div className="relative h-[300px] overflow-hidden rounded-lg">
                      <div
                        className={`
                          absolute bottom-2 min-h-[130px] w-[95%] p-3
                          ${index % 2 ?
                            'right-0 bg-primary bg-opacity-40 text-white rounded-l-xl' : 'left-0 bg-white bg-opacity-80 rounded-r-xl'
                          } z-10
                        `}
                      >
                        <h5 className="text-xl font-semibold">Lorem ipsum dolor sit amet consectetur.</h5>
                        <p
                          className="m-0"
                        >
                          Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.
                        </p>
                      </div>
                      <Image src={image} className="object-cover object-center rounded-lg" alt={caption} fill />
                    </div>
                  </div>))}
                </div>
              </div>
            </div>
          </div>
          <div
            className="
              absolute w-[80%] max-w-[1187px] h-full left-0 top-0 bg-primary bg-opacity-5
              rounded-br-[250px] rounded-bl-none z-[-1]
            "
          />
        </section>
        {/* technologies section */}
        <section className="container-fluid !px-0 !mx-0 max-w-none relative overflow-x-hidden">
          <div className="container">
            <div className="row md:row-cols-2 lg:row-cols-3 gy-3">
              {[
                {
                  title: 'Cloud Computing',
                  caption: 'We monitor and control process and budget, report weekly progress in writing, hold weekly team meetings (via video conference)!',
                  backgroundColor: 'bg-[#000000]',
                  color: 'text-[#000000]',
                  icon: (<svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                    />
                  </svg>
                  ),
                },
                {
                  title: 'Blockchain Technology',
                  caption: 'We monitor and control process and budget, report weekly progress in writing, hold weekly team meetings (via video conference)!',
                  backgroundColor: 'bg-[#AB4400]',
                  color: 'text-[#AB4400]',
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>),
                },
                {
                  title: 'Software Project Implementation',
                  caption: 'We monitor and control process and budget, report weekly progress in writing, hold weekly team meetings (via video conference)!',
                  backgroundColor: 'bg-[#455A64]',
                  color: 'text-[#455A64]',
                  icon: (<svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                    />
                  </svg>
                  ),
                },
                {
                  title: 'Cyber Security',
                  caption: 'We monitor and control process and budget, report weekly progress in writing, hold weekly team meetings (via video conference)!',
                  backgroundColor: 'bg-primary',
                  color: 'text-primary',
                  icon: (<svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                  ),
                },
                {
                  title: 'Data Analytics',
                  caption: 'We monitor and control process and budget, report weekly progress in writing, hold weekly team meetings (via video conference)!',
                  backgroundColor: 'bg-[#FF9F47]',
                  color: 'text-[#FF9F47]',
                  icon: (<svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                  </svg>
                  ),
                },
              ].map(({backgroundColor, color, icon, title, caption}) => (<div key={caption}>
                <div className={`${cardStyles.card}`}>
                  <p
                    className={`${cardStyles.number} ${backgroundColor} ${color} bg-opacity-[0.15]`}
                  >
                    {icon}
                  </p>
                  <h3 className={cardStyles.heading}>{title}</h3>
                  <p className={cardStyles.description}>
                    {caption}
                  </p>
                </div>
              </div>))}
              <div className="flex flex-col items-start justify-center">
                <h1 className={`${headingStyles.title} text-left !pb-[2rem]`}>WHAT WE DO</h1>
                <h2 className={`${headingStyles.heading} text-left`}>
                  Discover What We Can Do
                  <div className='font-normal'>For You!</div>
                </h2>
                <button type="button" className={`${buttonStyles.primary}`}>Explore All</button>
              </div>
            </div>
          </div>
          <div
            className="
              absolute w-[80%] max-w-[1187px] h-full right-0 top-0 bg-primary bg-opacity-5
              rounded-br-[250px] rounded-bl-none z-[-1]
            "
          />
        </section>
        {/* newsletter section */}
        <Newsletter />
        {/* features section */}
        {/* <section className="pt-0 bg-white">
          <div className="mx-auto">
            <div className="lg:text-center">
              <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
                Transactions
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                A better way to send money
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                magnam voluptatum cupiditate veritatis in accusamus quisquam.
              </p>
            </div>
            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <svg
                        className="h-6 w-6"
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
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Competitive exchange rates
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </dd>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <svg
                        className="h-6 w-6"
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
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      No hidden fees
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </dd>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <svg
                        className="h-6 w-6"
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
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Transfers are instant
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </dd>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <svg
                        className="h-6 w-6"
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
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Mobile notifications
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </section> */}
        {/* footer section */}
        <Footer />
    </>
  );
}
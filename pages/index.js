import {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {CarouselProvider} from 'pure-react-carousel';
import {XCircleIcon, CheckCircleIcon} from '@heroicons/react/24/solid';

import Layout from '../components/Layout';
import Newsletter from '../components/Newsletter';
import Partners from '../components/Partners';

import buttonStyles from '../styles/Button.module.css';
import cardStyles from '../styles/Card.module.css';
import headingStyles from '../styles/Heading.module.css';
import VerticalButtonIcon from '../components/VerticalButtonIcon';
import Testimonials from '../components/Testimonials';

/**
 * Index page
 * @param {*} props
 * @return {React.Component}
 */
export default function Home() {
  const cardRef = useRef();

  const [cardHeight, setCardHeight] = useState(0);

  useEffect(() => {
    if (cardRef.current?.clientHeight) {
      setCardHeight(cardRef.current.clientHeight);
    }
  }, [cardRef.current?.clientHeight]);

  return (
    <>
      <Layout title="Home">
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
              className="relative no-prose"
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
                <div className="row md:row-cols-2">
                  {[
                    {image: '/images/early-startup.jpeg', caption: 'Early Stage Startups'},
                    {image: '/images/funded-startup.jpeg', caption: 'Funded Startups'},
                    {image: '/images/established-business.jpeg', caption: 'Established (Traditional) Businesses'},
                    {image: '/images/enterprise.jpeg', caption: 'Enterprises'},
                  ].map(({image, caption}, index) => (<div key={caption}>
                    <div className="relative h-[300px] overflow-hidden rounded-lg">
                      <div
                        className={`
                          absolute bottom-2 h-[130px] w-[95%] p-3
                          ${index % 2 ?
                            'right-0 bg-primary bg-opacity-40 text-white rounded-l-xl' :
                            'left-0 bg-white bg-opacity-80 rounded-r-xl'}
                          z-10
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
              ].map(({backgroundColor, color, icon, caption}) => (<div key={caption}>
                <div className={`${cardStyles.card}`}>
                  <p
                    className={`${cardStyles.number} ${backgroundColor} ${color} bg-opacity-[0.15]`}
                  >
                    {icon}
                  </p>
                  <h3 className={cardStyles.heading}>Implimentation</h3>
                  <p className={cardStyles.description}>
                    We monitor and control process and budget, report weekly progress in writing, hold weekly team
                    meetings (via video conference)!
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
        {/* testimonials section */}
        <section className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-gray-100 relative p-1 rounded-lg">
              <div className="relative overflow-hidden h-96 w-full rounded-lg bottom-4 left-4">
                <img
                  src="/images/ceo.jpg"
                  className="absolute object-cover object-center my-0"
                  // layout="fill"
                  // objectFit="cover"
                  alt=""
                />
              </div>
            </div>
            <div>
              <h1>
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 612 612"
                  style={{enableBackground: 'new 0 0 612 612'}}
                  height={48}
                  width={48}
                >
                  <g>
                    <g>
                      <path
                        style={{fill: '#010002'}}
                        d="M587.826,186.966c-16.116-37.332-37.944-69.768-65.484-97.308s-59.976-49.368-97.308-65.484
			S348.024,0,306,0c-28.152,0-55.284,3.672-81.396,11.016s-50.49,17.646-73.134,30.906s-43.248,29.172-61.812,47.736
			s-34.476,39.168-47.736,61.812c-13.26,22.646-23.562,47.022-30.906,73.134C3.672,250.716,0,277.848,0,306
			s3.672,55.284,11.016,81.396c7.344,26.11,17.646,50.487,30.906,73.134c13.26,22.644,29.172,43.249,47.736,61.812
			c18.564,18.564,39.168,34.478,61.812,47.736c22.644,13.26,47.022,23.561,73.134,30.906C250.716,608.328,277.848,612,306,612
			s55.284-3.672,81.396-11.016c26.111-7.346,50.488-17.646,73.135-30.906c22.644-13.259,43.249-29.172,61.812-47.736
			c18.564-18.563,34.478-39.168,47.736-61.812c13.26-22.646,23.561-47.023,30.906-73.135C608.328,361.284,612,334.152,612,306
			C612,263.976,603.942,224.298,587.826,186.966z M296.82,212.364c-2.04,2.855-4.284,4.284-6.732,4.284
			c-42.024,6.12-63.036,25.5-63.036,58.14h37.332c6.528,0,9.792,3.264,9.792,9.792v140.76c0,6.528-3.264,9.792-9.792,9.792H146.88
			c-6.528,0-9.792-3.264-9.792-9.792V303.552c0-95.88,46.92-146.268,140.76-151.164c2.448-0.408,4.59,0.204,6.426,1.836
			s3.162,3.672,3.978,6.12l9.792,44.676C298.86,207.876,298.452,210.324,296.82,212.364z M477.972,212.364
			c-1.632,2.855-3.876,4.284-6.729,4.284c-41.208,6.12-62.223,25.5-63.036,58.14h37.332c2.854,0,5.304,0.918,7.344,2.754
			s3.063,4.182,3.063,7.038v140.76c0,2.856-1.021,5.202-3.063,7.038s-4.489,2.754-7.344,2.754H328.644
			c-2.854,0-5.304-0.918-7.344-2.754s-3.06-4.182-3.06-7.038V303.552c0-95.88,47.124-146.268,141.372-151.164
			c2.445-0.408,4.59,0.204,6.426,1.836s3.163,3.672,3.978,6.12l9.792,44.676C480.624,207.876,480.012,210.324,477.972,212.364z"
                      />
                    </g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </h1>
              <h3>
                Technology and business are now inseparable. At Larven, we take
                the road less travelled to help businesses bridge the gap
                between business and technology. This way, we not only transform
                businesses, but we transform lives and communities.
              </h3>
              <h6>Adam Beleko</h6>
              <h6>CEO, Larven Technologies</h6>
            </div>
          </div>
        </section>
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
        {/* partners section */}
        <Partners />
        {/* testimonials section */}
        <section></section>
        {/* cta section */}
        <section className="px-10 bg-gray-50">
          <div className="mx-auto lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to transform your processes?</span>
              <span className="block text-primary">Join us now.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link href="/contacts" >
                  <button className="button-primary">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

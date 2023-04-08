import Image from 'next/image';
import Link from 'next/link';
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from '@heroicons/react/24/outline';
import {RiInstagramFill, RiFacebookCircleFill, RiLinkedinFill, RiTwitterFill} from 'react-icons/ri';

import axios from '../pages/api';
import {useToasts} from '../hooks/useToasts';
import headingStyles from '../styles/Heading.module.css';
import BarLink from './BarLink';

/**
 * Newsletter custom newsletter signup component
 * @component
 * @return {function}
 */
export default function Newsletter() {
  const {toast} = useToasts();

  /**
   * Signup function
   * @param {event} e
   * @return {boolean}
   */
  function signup(e) {
    try {
      e.preventDefault();
      const form = {};
      const formData = new FormData(e.target);
      for (const pair of formData.entries()) {
        const key = pair[0];
        let value = pair[1];
        if (typeof value === 'string') {
          value = value.trim();
        }
        form[key] = value;
      }
      window.Tawk_API.setAttributes(form, function(error) { });
      window.Tawk_API.addEvent('requested-free-audit', form, function(error) { });
      axios.post('mailchimp/members', form);
      toast('You have been added to the list.');
      // reset form
      event?.target?.reset();
      return true;
    } catch (error) {
      // show error
      console.error(error);
    }
  }

  return (
    <section className="container-fluid !px-0 !mx-0 max-w-none relative overflow-x-hidden">
      <div className="relative bg-[#0B0B0E] py-16">
        <Image src="/images/left-contact-stripes.svg"
          className='p-0 m-0 max-h-[800px] object-contain object-left-top'
          alt=""
          fill
        />
        <div className="container">
          <div className="row justify-between relative z-10">
            <div className="md:col-5">
              <h1 className={`${headingStyles.title} text-left !text-white pb-3`}>REACH OUT TO US</h1>
              <h2 className={`${headingStyles.heading} text-left text-white mb-3`}>
                Want to Hire Great Technicians today!
              </h2>
              <p className="text-[#D4D4D9]">
                Arcu viverra ut quis gravida luctus. Scelerisque elit massa purus morbi pellentesque tincidunt nulla
              </p>
            </div>
            <div className="md:col-5 xl:col-4">
              <BarLink
                href="/"
                text="+255 74567 8910"
                icon={<PhoneIcon height={24} width={24} className="text-primary mr-2" />}
              />
              <BarLink
                href="/"
                text="info@larven.io"
                icon={<EnvelopeIcon height={20} width={24} className="text-primary mr-2" />}
                light
              />
              <BarLink
                href="/"
                text="Sayansi, Kijitonyama"
                icon={<MapPinIcon height={26} width={20} className="text-primary mr-2" />}
              />
              <div className="flex items-center mt-6">
                <RiInstagramFill color="#FFFFFF59" size={24} className="mr-6" />
                <RiLinkedinFill color="#FFFFFF59" size={24} className="mr-6" />
                <RiFacebookCircleFill color="#FFFFFF59" size={24} className="mr-6" />
                <RiTwitterFill color="#FFFFFF59" size={24} />
              </div>
            </div>
          </div>
          {/* <section
            id="audit"
            className="flex flex-col flex-wrap items-center justify-center py-12"
            style={{backgroundColor: '#f4e0d8'}}>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl hidden">
        Request Free Audit
            </h2>
            <div className="grid grid-flow-col md:grid-cols-5 gap-4 mb-10">
              <div />
              <div className='col-start-2 col-span-3'>
                <br/>
                <h6
                  className="text-2xl font-extrabold tracking-tight sm:text-2xl text-justify"
                  style={{color: '#b23c1c'}}>
          Need to transform your business processes and operations but
          don&apos;t know where to start?
          Join the list for a free audit, to see what can be improved.
                </h6>
                <br/>
                <form onSubmit={signup}>
                  <div>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <br />
                  <button className="button-primary w-full" type="submit">
              Get On The List
                  </button>
                </form>
                <p className='md:text-center'>
            Only a few spots are available,
            terms and conditions apply.
                </p>
              </div>
              <div />
            </div>
          </section> */}
        </div>
        <Image src="/images/right-contact-stripes.svg"
          className='p-0 m-0 max-h-[800px] bottom-0 object-contain object-right-bottom'
          alt=""
          fill
        />
      </div>
    </section>
  );
}

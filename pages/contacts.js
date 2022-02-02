import Layout from '../components/Layout';
import Email from '../components/Email';
import {useToasts} from '../hooks/useToasts';
import {addContact} from '../firebase/firestore/contacts';

/**
 * This is the contacts page
 * @param {Object} props
 * @return {Object}
 */
export default function Contacts() {
  const {toast} = useToasts();

  /**
   * Function to submit the inquiry form
   * @param {Object} e
   * @return {boolean}
   */
  async function submitInquiry(e) {
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
    form.services = formData.getAll('services');
    // const script = document.createElement('script')
    // script.id = 'tawkId'
    // script.async = true
    // script.src = `https://embed.tawk.to/${propertyId}/default`
    // script.charset = 'UTF-8'
    // script.setAttribute('crossorigin', '*')

    const {firstname, lastname, email, company, phone, title, services} = form;
    // set customer attributes
    window.Tawk_API.setAttributes({
      name: `${firstname} ${lastname}`,
      email,
      company,
      phone,
      title,
    }, function(error) {
      // returns string on error only
      if (error) {
        console.error(error);
      }
    });
    // add form filling event with customer input
    window.Tawk_API.addEvent('filled-contact-form', {
      name: `${firstname} ${lastname}`,
      email,
      company,
      phone,
      title,
    }, function(error) {
      // returns string on error only
      if (error) {
        console.error(error);
      }
    });
    // tags to enhance data
    window.Tawk_API.addTags(services, function(error) {
      // returns string on error only
      if (error) {
        console.error(error);
      }
    });

    // submit form to firestore
    await addContact(form);

    toast('Thank you for your inquiry. We will get back to you shortly.');
    // reset form
    e?.target?.reset();
    return true;
  }

  return (
    <Layout title="Contact Us">
      <section>
        <h1>Get In Touch!</h1>
        <p className='mb-0'>
          We&apos;d be delighted to hear from you. Here&apos;s how you can reach us:
        </p>
      </section>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='border-2 p-6'>
          <h3>For Service Inquiry</h3>
          <em>Please fill out the form below</em>
          <form onSubmit={submitInquiry}>
            <div className="grid grid-cols-1 gap-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <label>First Name</label>
                  <input name="firstname" />
                </div>
                <div>
                  <label>Last Name</label>
                  <input name="lastname" />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <label>Job Title</label>
                  <input name="title" />
                </div>
                <div>
                  <label>Company</label>
                  <input name="company" />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <label>Phone Number</label>
                  <input name="phone" type="tel" />
                </div>
                <div>
                  <label>Email</label>
                  <input name="email" type="email" />
                </div>
              </div>
              <div>
                <h4 className="uppercase">
                Which service(s) are you looking for? (Select all that apply)
                </h4>
                <div className="flex flex-row items-center">
                  <input
                    name="services"
                    className="w-8 mr-2"
                    type="checkbox"
                    id="ai"
                    value="Artificial Intelligence"
                    defaultChecked
                  />
                  <label htmlFor="ai">Artificial Intelligence</label>
                </div>

                <div className="flex flex-row items-center">
                  <input
                    name="services"
                    className="w-8 mr-2"
                    type="checkbox"
                    id="application_services"
                    value="Application Services"
                  />
                  <label htmlFor="application_services">Application Services</label>
                </div>
                <div className="flex flex-row items-center">
                  <input
                    name="services"
                    className="w-8 mr-2"
                    type="checkbox"
                    id="automation"
                    value="Automation"
                  />
                  <label htmlFor="automation">Automation</label>
                </div>
                <div className="flex flex-row items-center">
                  <input
                    name="services"
                    className="w-8 mr-2"
                    type="checkbox"
                    id="bct"
                    value="Blockchain Technology"
                  />
                  <label htmlFor="bct">Blockchain Technology</label>
                </div>
                <div className="flex flex-row items-center">
                  <input
                    name="services"
                    className="w-8 mr-2"
                    type="checkbox"
                    id="cc"
                    value="Cloud Computing"
                  />
                  <label htmlFor="cc">Cloud Computing</label>
                </div>
                <div className="flex flex-row items-center">
                  <input
                    name="services"
                    className="w-8 mr-2"
                    type="checkbox"
                    id="ce"
                    value="Customer Experience"
                  />
                  <label htmlFor="ce">Customer Experience</label>
                </div>
                <div className="flex flex-row items-center">
                  <input
                    name="services"
                    className="w-8 mr-2"
                    type="checkbox"
                    id="security"
                    value="Cyber Security"
                  />
                  <label htmlFor="security">Cyber Security</label>
                </div>
                <div className="flex flex-row items-center">
                  <input
                    name="services"
                    className="w-8 mr-2"
                    type="checkbox"
                    id="data"
                    value="Data &amp; Analytics"
                  />
                  <label htmlFor="horns">Data &amp; Analytics</label>
                </div>
                <div className="flex flex-row items-center">
                  <input
                    name="services"
                    className="w-8 mr-2"
                    type="checkbox"
                    id="infrastructure"
                    value="Infrastructure"
                  />
                  <label htmlFor="infrastructure">Infrastructure</label>
                </div>
                <div className="flex flex-row items-center">
                  <input
                    name="services"
                    className="w-8 mr-2"
                    type="checkbox"
                    id="consulting"
                    value="Consulting"
                  />
                  <label htmlFor="consulting">Consulting</label>
                </div>
                <div className="flex flex-row items-center">
                  <input
                    name="services"
                    className="w-8 mr-2"
                    type="checkbox"
                    id="training"
                    value="Training"
                  />
                  <label htmlFor="training">Training</label>
                </div>
              </div>
              {/* <div>*/}
              {/*  <label>Message</label>*/}
              {/*  <textarea*/}
              {/*    name="message"*/}
              {/*    className="border-2 rounded-md w-full p-2 resize-none"*/}
              {/*    rows={5}*/}
              {/*  />*/}
              {/* </div>*/}
            </div>
            <br />
            <button
              type="submit"
              className="w-full rounded text-white h-12 bg-primary focus:outline-none focus:ring-2
            focus:ring-primary focus:ring-opacity-50"
            >
            Submit
            </button>
          </form>
        </div>
        <div className='border-2 p-6 flex flex-col self-start'>
          <h3>For General Inquiries</h3>
          <em />
          <div>
            <h4 className='my-0'>
              Call us: <a
                href="tel:+255(757)590-414"
                className='no-underline'
              >+255 (757) 590-414</a>
            </h4>
          </div>
          <div>
            <h4 className='my-0'>
              Email us: <Email className='no-underline' />
            </h4>
          </div>
          <div>
            <h4>Visit our Office</h4>
            <div>Bagamoyo Road</div>
            <div>Sayansi, Kijitonyama</div>
            <div>Dar es Salaam,</div>
            <div>Tanzania</div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

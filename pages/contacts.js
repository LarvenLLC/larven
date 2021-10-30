import Layout from "../components/Layout";

export default function Contacts({ }) {
  function submitInquiry(e) {
    e.preventDefault();
    let form = {},
      formData = new FormData(e.target);
    for (let pair of formData.entries()) {
      let key = pair[0],
        value = pair[1];
      if (typeof value === "string") {
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

    const { firstname, lastname, email, company, phone, title, services } = form;
    // set customer attributes
    window.Tawk_API.setAttributes({
      name: `${firstname} ${lastname}`,
      email,
      company,
      phone,
      title
    }, function (error) {
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
      title
    }, function (error) {
      // returns string on error only
      if (error) {
        console.error(error);
      }
    });
    // tags to enhance data
    window.Tawk_API.addTags(services, function (error) {
      // returns string on error only
      if (error) {
        console.error(error);
      }
    });
    return true;
  }

  return (
    <Layout title="Contact Us">
      <section>
        <h2>Contact Larven</h2>
        <p>
          We appreciate your interest in Larven. Please select from the options
          below.
        </p>
      </section>
      <section>
        <h3>General Inquiries</h3>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div>
            <h4>255 (757) 590-414</h4>
            From the United Republic of Tanzania
          </div>
          <div>
            <h4>info@larven.co.tz</h4>
            Worldwide
          </div>
          <div>
            <h4>Location</h4>
            <div>Bagamoyo Road</div>
            <div>Sayansi, Kijitonyama</div>
            <div>Dar es Salaam,</div>
            <div>Tanzania</div>
          </div>
        </div>
      </section>
      <section>
        <h3>Get in Touch Below</h3>
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
                <label>Company Name</label>
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
              <h4 className="uppercase">Which service(s) are you interested in? Please select all that apply*</h4>
              <div className="flex-row">
                <input name="services" className="w-9" type="checkbox" id="ai" value="Artificial Intelligence" defaultChecked />
                <label htmlFor="ai">Artificial Intelligence</label>
              </div>

              <div className="flex-row">
                <input name="services" className="w-9" type="checkbox" id="application_services" value="Application Services" />
                <label htmlFor="application_services">Application Services</label>
              </div>
              <div className="flex-row">
                <input name="services" className="w-9" type="checkbox" id="automation" value="Automation" />
                <label htmlFor="automation">Automation</label>
              </div>
              <div className="flex-row">
                <input name="services" className="w-9" type="checkbox" id="bct" value="Blockchain Technology" />
                <label htmlFor="bct">Blockchain Technology</label>
              </div>
              <div className="flex-row">
                <input name="services" className="w-9" type="checkbox" id="cc" value="Cloud Computing" />
                <label htmlFor="cc">Cloud Computing</label>
              </div>
              <div className="flex-row">
                <input name="services" className="w-9" type="checkbox" id="ce" value="Customer Experience" />
                <label htmlFor="ce">Customer Experience</label>
              </div>
              <div className="flex-row">
                <input name="services" className="w-9" type="checkbox" id="security" value="Cyber Security" />
                <label htmlFor="security">Cyber Security</label>
              </div>
              <div className="flex-row">
                <input name="services" className="w-9" type="checkbox" id="data" value="Data &amp; Analytics" />
                <label htmlFor="horns">Data &amp; Analytics</label>
              </div>
              <div className="flex-row">
                <input name="services" className="w-9" type="checkbox" id="infrastructure" value="Infrastructure" />
                <label htmlFor="infrastructure">Infrastructure</label>
              </div>
              <div className="flex-row">
                <input name="services" className="w-9" type="checkbox" id="consulting" value="Consulting" />
                <label htmlFor="consulting">Consulting</label>
              </div>
              <div className="flex-row">
                <input name="services" className="w-9" type="checkbox" id="training" value="Training" />
                <label htmlFor="training">Training</label>
              </div>
            </div>
            {/*<div>*/}
            {/*  <label>Message</label>*/}
            {/*  <textarea*/}
            {/*    name="message"*/}
            {/*    className="border-2 rounded-md w-full p-2 resize-none"*/}
            {/*    rows={5}*/}
            {/*  />*/}
            {/*</div>*/}
          </div>
          <br />
          <button
            type="submit"
            className="w-full rounded text-white h-12 bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      </section>
    </Layout>
  );
}

import Layout from "../components/Layout";

export default function Contacts({}) {
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
    return console.log(form);
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col justify-between	">
              <div>
                <label>Name</label>
                <input name="name" />
              </div>
              <div>
                <label>Phone</label>
                <input name="phone" type="tel" />
              </div>
              <div>
                <label>Email</label>
                <input name="email" type="email" />
              </div>
            </div>
            <div>
              <label>Message</label>
              <textarea
                name="message"
                className="border-2 rounded-md w-full p-2 resize-none"
                rows={5}
              />
            </div>
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

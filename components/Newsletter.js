import axios from '../pages/api';
import {useToasts} from '../hooks/useToasts';

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
    <section
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
    </section>
  );
}

// import Image from "next/image";

export default function Newsletter() {
    function signup(e) {
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
        <section className="flex flex-col flex-wrap items-center justify-center py-12" style={{ backgroundColor: '#f4e0d8' }}>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl hidden">
                Newsletter
            </h2>
            <div className="grid grid-flow-col md:grid-cols-3 gap-4">
                <br />
                <h6 className="text-2xl font-extrabold tracking-tight sm:text-2xl text-center" style={{ color: '#b23c1c' }}>
                    There is more that technology can do for your business.
                    Join the list for a free audit.
                </h6>
                <br />
            </div>
            <br />
            <form onSubmit={signup}>
                <div>
                    <input name="email" type="email" placeholder="Email Address" required />
                </div>
                <br />
                <button className="button-primary w-full" type="submit">
                    Contact Us
                </button>
            </form>
            <p>
                Want to learn more?
                <br />
                We are online - Chat with us.
            </p>
        </section>
    );
}

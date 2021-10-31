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
        window.Tawk_API.setAttributes(form, function (error) { });
        window.Tawk_API.addEvent('requested-free-audit', form, function (error) { });
        return true;
    }

    return (
        <section className="flex flex-col flex-wrap items-center justify-center py-12" style={{ backgroundColor: '#f4e0d8' }}>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl hidden">
                Request Free Audit
            </h2>
            <div className="grid grid-flow-col md:grid-cols-3 gap-4 mb-12">
                <br />
                <h6 className="text-2xl font-extrabold tracking-tight sm:text-2xl text-center" style={{ color: '#b23c1c' }}>
                    Need to transform your business processes and operations but don't'know where to start?
                    Join the list for a free audit, to see what can be improved.
                </h6>
                <br />
            </div>
            <form onSubmit={signup}>
                <div>
                    <input name="email" type="email" placeholder="Email Address" required />
                </div>
                <br />
                <button className="button-primary w-full" type="submit">
                    Get On The List
                </button>
            </form>
            <p>
                Only a few spots are available,
                <br />
                terms and conditions apply.
            </p>
        </section>
    );
}

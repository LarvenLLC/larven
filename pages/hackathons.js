import { useEffect } from "react";

/**
 * Component with function to redirect to discord server https://discord.gg/X4YcTCNJFU
 * @param {Object} props
 * @return {JSX}
 */
export default function Hackathons() {
    useEffect(() => {
        if(typeof window !== "undefined") {
            window.location.href = "https://discord.gg/X4YcTCNJFU";
        }
    }, []);
    return (
        <div className="hackathons">
            <h1>Hackathons</h1>
            <p>
                Hackathons are a great way to learn new skills and gain experience
                while having fun.
            </p>
            <p>
                <a href="https://discord.gg/X4YcTCNJFU">
                <button className="button">Join our Discord</button>
                </a>
            </p>
        </div>
    );
}
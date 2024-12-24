import jobs from '../assets/jobs.json'
import { useRef, useState, useEffect} from "react";

const JobListing = ({color="bg-indigo-500"}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [showInput, setShowInput] = useState(false);
//    const element = document.getElementById("input");
//    const inputElem = document.querySelector<HTMLInputElement>("input");

    useEffect(()=> {
        setShowInput(true);
        inputRef.current?.focus();
    },[showInput]);

    useEffect(() => {
        const newElem = document.createElement("div");
        newElem.classList.add("job-list-item");
        newElem.textContent = "Hello World!";
        document.body.appendChild(newElem);

        // Clean up the DOM element on unmount
        return () => {
            document.body.removeChild(newElem);
        };
    }, []);

    return (
        <>
            {jobs.map((job) => (
                <div key={job.id} className={`${color} grid grid-cols-1`}>
                    <a href={`/job/${job.id}`} target="_blank" rel="noopener noreferrer">
                        <h3>{job.title}</h3>
                    </a>
                </div>
            ))}
            {showInput && (
                <input
                    ref={inputRef}
                    type="text"
                    className="mt-4 block w-full border rounded p-2"
                    placeholder="This will be focused..."
                />
            )}
        </>
    );
};

export default JobListing;
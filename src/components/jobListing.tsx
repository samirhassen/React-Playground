import jobs from '../assets/jobs.json'

const JobListing = ({color="bg-indigo-500"}) => {
    return (
        <>
            {jobs.map((job) => (
                <div key={job.id} className={`${color} grid grid-cols-1`}>
                    <a href={`/job/${job.id}`} target="_blank" rel="noopener noreferrer">
                        <h3>{job.title}</h3>
                    </a>
                </div>
            ))};
        </>
    );
};

export default JobListing;
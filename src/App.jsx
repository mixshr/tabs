import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import JobInfo from "./JobInfo";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])

  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => { fetchJobs() }, []);
  console.log(jobs);

  if (isLoading) {
    return <section className='jobs-center'>
      <div className='loading'>
        <h2>Loading...</h2>
      </div>
    </section>
  }

  return <section className='jobs-center'>
    <JobInfo jobs={jobs}/>
  </section>
}

export default App

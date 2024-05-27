import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])

  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      const newJobs = response.json();
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

  return <h2>tabs project setup</h2>
}

export default App

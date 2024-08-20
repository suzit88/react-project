import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UniversityList from '../components/UniversityList';

const DetailsPage = () => {
  const { country } = useParams();
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    axios.get(`http://universities.hipolabs.com/search?country=${country}`)
      .then(response => setUniversities(response.data));
  }, [country]);

  return (
    <div>
      <h1 className='text-4xl'>Universities in {country}</h1>
      <UniversityList universities={universities} />
    </div>
  );
};

export default DetailsPage;

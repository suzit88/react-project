import React from 'react';
import UniversityItem from './UniversityItem';

const UniversityList = ({ universities }) => {
  return (
    <div>
      {universities.map((university, index) => (
        <UniversityItem key={index} university={university} />
      ))}
    </div>
  );
};

export default UniversityList;

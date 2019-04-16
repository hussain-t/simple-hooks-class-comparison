import React from 'react';
import useResources from './hooks/useResourses';

const ResourceList = ({ resource }) => {
  const resourses = useResources(resource);

  return (
    <div>
      <ul>
        {resourses.map(record => <li key={record.id}>{record.title}</li>)}
      </ul>
    </div>
  )
}

export default ResourceList;

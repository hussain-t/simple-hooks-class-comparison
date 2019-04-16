import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';
import ResourceListClass from './ResourceListClass';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <UserList />
      <button onClick={() => setResource('posts')}>Posts</button>
      <button onClick={() => setResource('todos')}>Todos</button>
      <hr />
      <p>Hooks</p>
      <ResourceList resource={resource} />
      <hr />
      <p>Class</p>
      <ResourceListClass resource={resource} />
    </div>
  )
}

export default App;

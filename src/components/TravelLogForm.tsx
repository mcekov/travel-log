'use client';

import { useState } from 'react';

export default function TravelLogForm() {
  const [title, setTitle] = useState('');

  return (
    <form>
      <label>Title</label>
      <input onChange={(e) => setTitle(e.currentTarget.value)} />
      <button>Create</button>
    </form>
  );
}

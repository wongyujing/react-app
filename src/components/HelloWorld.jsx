import React, { useState } from 'react';

export default function Count() {
  const [ count, setCount ] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <div>您点击了{count}次</div>
    </div>
  )
}

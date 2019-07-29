import React, { useState } from 'react';

function Test() {
  const [clicks, setClicks ] = useState(0);

  const handleClick = () => {
    setClicks(prevClicks => prevClicks + 1);
  };

  return (
    <button
      onClick={ handleClick }
    >Счётчик: {clicks}</button>
  )
}

export default Test;

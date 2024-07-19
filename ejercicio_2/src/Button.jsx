import { useState } from 'react';

function Button() {
  const [isVisible, setVisible] = useState(false)

  const toggleVisibility = () => {
    setVisible(!isVisible);
  };

  return (
    <>
    <button
        onClick={toggleVisibility}
        style={{marginBottom: '10px'}}
    >
        {isVisible ? 'Ocultar texto' : 'Mostrar texto'}
    </button>
    {isVisible && <p>Hidden Button Question</p>}
    </>
  )
}

export default Button;
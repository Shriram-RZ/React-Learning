import React from 'react'

const Expression = () => {
  const number = (a,b)=>a*b;
  const specialClass = 'classname';




  return (
    <>
    <h1>{number(20,20)}</h1>
    <p>{['hi','Luffy','Robin','Nami']}</p>
    <p className={specialClass}>Class</p>
    </>
 

  );
}

export default Expression
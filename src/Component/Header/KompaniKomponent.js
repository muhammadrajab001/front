import React, { useState, useEffect } from 'react';
import img3 from '../img/UserinfoKandidat__icon/Union.svg'; 
const KompaniKomponent = () => {
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [interns, setInterns] = useState(0);
  const [underReview, setUnderReview] = useState(0);

  useEffect(() => {
    
    const randomTotalEmployees = Math.floor(Math.random() * 100) + 10; 
    const randomInterns = Math.floor(Math.random() * 10) + 1; 
    const randomUnderReview = Math.floor(Math.random() * 50) + 5; 

    setTotalEmployees(randomTotalEmployees);
    setInterns(randomInterns);
    setUnderReview(randomUnderReview);
  }, []);

  return (
    <div className='komponi__komponent__1'>
      <span className='komponi__span__1'>
        Компания: <p>Гигачады</p> <img className='komponi__img' src={img3} alt='Компания' />
      </span>

      <span className='komponi__span__2'>
        <i className='komponi_number'>{totalEmployees} <p className='komponi__i'>Всего сотрудников:</p></i>
        <i className='komponi_number'>{interns} <p className='komponi__i'>Стажеров:</p></i>
        <i className='komponi_number'>{underReview} <p className='komponi__i'>На рассмотрении</p></i>
      </span>
    </div>
  );
};

export default KompaniKomponent;

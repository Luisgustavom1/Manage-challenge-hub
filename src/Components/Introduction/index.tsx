import React from 'react';

import charts from '../../Assets/svg/illustration-intro.svg';
import Button from '../Button';

import './styles.scss';
const Introduction = () => {
  return (
    <section className='container-introduction'>
      <aside className='text-introduction'>
        <h1 className='title-lg'>Bring everyone together to build better products.</h1>
        <p className='body-lg'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view</p>
        <Button>Get Started</Button>
      </aside>
      <img 
        src={charts}
        alt='Ilustração de gráficos'
        className='illustration-charts'
      />
    </section>
  );
}

export default Introduction;
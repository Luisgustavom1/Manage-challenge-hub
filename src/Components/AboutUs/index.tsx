import React from 'react';
import Categories from './Categories';

import './styles.scss';
const AboutUs = () => {
  return (
    <div className='container-aboutUs'>
      <section className='introduction-aboutUs'>
        <h1 className='title-md'>What’s different about Manage?</h1>
        <p className='body-md'>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
      </section>
      <aside className='container-categories'>
        <Categories
          number={1}
          title='Track company-wide progress'
        >
          See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.
        </Categories>
        <Categories
          number={2}
          title='Advanced built-in reports'
        >
          Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.
        </Categories>
        <Categories
          number={3}
          title='Everything you need in one place'
        >
          Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.
        </Categories>
      </aside>
    </div>
  );
}

export default AboutUs;
import React from 'react';
import '../scss/Introduction.scss';

function Introduction() {
  return (
    <section className='introduction'>
      <article className='introduction__card'>
        <img src='/img.png' alt='first' />
        <h2>This is a featured title</h2>
        <p className='introduction__web'>
          With a compeling description
          <br />
          like this, who wouldn't be
          <br />
          interested? Double-click to edit
          <br />
          this short blurb of test.
        </p>
        <p className='introduction__moblie'>
          With a compeling description ike this, who wouldn't be
          <br />
          interested? Double-click to edit this short blurb of test.
        </p>
        <button>EDIT THIS BUTTON</button>
      </article>
      <article className='introduction__card'>
        <img src='/img.png' alt='second' />
        <h2>This is a featured title</h2>
        <p className='introduction__web'>
          With a compeling description
          <br />
          like this, who wouldn't be
          <br />
          interested? Double-click to edit
          <br />
          this short blurb of test.
        </p>
        <p className='introduction__moblie'>
          With a compeling description ike this, who wouldn't be
          <br />
          interested? Double-click to edit this short blurb of test.
        </p>
        <button>EDIT THIS BUTTON</button>
      </article>
      <article className='introduction__card'>
        <img src='/img.png' alt='third' />
        <h2>This is a featured title</h2>
        <p className='introduction__web'>
          With a compeling description
          <br />
          like this, who wouldn't be
          <br />
          interested? Double-click to edit
          <br />
          this short blurb of test.
        </p>
        <p className='introduction__moblie'>
          With a compeling description ike this, who wouldn't be
          <br />
          interested? Double-click to edit this short blurb of test.
        </p>
        <button>EDIT THIS BUTTON</button>
      </article>
    </section>
  );
}

export default Introduction;

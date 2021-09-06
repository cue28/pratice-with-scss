import React from 'react';
import '../scss/Detail.scss';

function Detail() {
  return (
    <section className='detail'>
      <div className='detail-container'>
        {/* 2개의 그리드 */}
        <article className='detail-grid'>
          <img src='one.png' alt='one' />
          <div className='detail-featured-text'>
            <h2>
              This is a featured content <br />
              block. Double click on the <br />
              heading to edit this.
            </h2>
            <p>
              With aa compeling description like this, who wouldn't <br />
              be interested in learning more?
              <br />
              <br />
              How about another line of interesting text?
              <br />
              <strong>Double-click</strong> to edit this loger paragraph of
              text.
              <br />
              Go ahead, make it fascinating.
            </p>
            <a href=''>EDIT THIS CALL-TO-ACTION</a>
          </div>
        </article>

        <article className='detail-grid'>
          <div className='detail-featured-text'>
            <text>THIS IS A PILL</text>
            <h2>
              Feel free to double click <br />
              here too! You can also edit <br />
              the pill shown above it.
            </h2>
            <p>
              With a compeling description like this, who wouldn't <br />
              beinterested in learning more?
              <br />
              <br />
              How about another line of interesting text?
              <br />
              <blod>Double-clik</blod>to edit this loger paragraph of text.
              <br />
              Go ahead, make it fascinating.
            </p>
            <a href=''>EDIT THIS CALL-TO-ACTION</a>
          </div>
          <img src='two.png' alt='two' />
        </article>

        <article className='detail-grid'>
          <img src='three.png' alt='three' />
          <div className='detail-featured-text'>
            <h2>
              And, as expected, this <br />
              heading can also be edited <br />
              by double clicking.
            </h2>
            <p>
              One last piece of interesting text for you. And again,
              <br />
              double-click to edit this paragraph of text.
            </p>
            <a href=''>EDIT THIS CALL-TO-ACTION</a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Detail;

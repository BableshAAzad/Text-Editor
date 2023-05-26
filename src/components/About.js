import React from 'react'

export default function About(props) {
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
  }
  return (
    <div className="container">
      <h1 className="my-3" style={{ color: '#23B1CD' }}>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Analyze your text </strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextEditor gives you a way to analyze your text quickly and efficiently. Be it word count, character count, summary to read time.

            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Free to use </strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextEditor is a free character counter tool that provides instant character count & word count statistics for a given text. TextEditor reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser Compatible </strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.

            </div>
          </div>
        </div>
      </div>
      <br /><br />
      <h4 style={{ color: '#23B1CD' }}>Description of functionality</h4>
      <br />
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <dl>
          <dt>1. Convert to Uppercase</dt>
          <dd className='mx-4'>- Click on this button then auto conver all characters in uppercase</dd>
          <dt>2. Convert to Lowercase</dt>
          <dd className='mx-4'>- Click on this button then auto conver all characters in lowercase</dd>
          <dt>3. Clear Text</dt>
          <dd className='mx-4'>- It is clear all text to fill you.</dd>
          <dt>4. Copy Text</dt>
          <dd className='mx-4'>- Without select all text, just click this button then auto copied to all your filled text.</dd>
          <dt>5. Remove Extra spaces</dt>
          <dd className='mx-4'>- In Extra spaces between two words remove in a single space.</dd>
        </dl>
      </div>
    </div>
  )
}
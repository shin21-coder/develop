import React from 'react'
import Layout from '../components/Layout'
const NewsLetter = () => {
  return <Layout>
    <section className="newsletter-page">
      <div className="page-center">
        <h2>Get all the later</h2>
        <h4>お友達になりましょう</h4>
        <form className="contact-form" name="testing-contact" method="post" netlify-honeypot="bot-field" data-netlify="true"
        action="/success"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="testing-contact"  />
          <input type="text" name="name" placeholder="name" className="form-control" />
          <input type="text" name="email" placeholder="email" className="form-control" />
          <button type="submit" className="btn form-control submit-btn">submit</button>
        </form>
      </div>
    </section>
  </Layout>
}

export default NewsLetter
import React from 'react'

function Contact() {
  return (
     <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg border-0">
            <div className="card-body p-4">
              <h2 className="text-center mb-4 text-primary">
                Contact Us
              </h2>

              {/* Contact Info */}
              <div className="mb-4 text-center">
                <p className="mb-1">
                  📞 <strong>Phone:</strong> +91 98765 43210
                </p>
                <p>
                  📧 <strong>Email:</strong> contact@mywebsite.com
                </p>
              </div>

              {/* Contact Form */}
              <form>
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>

                <div className="d-grid">
                  <button className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
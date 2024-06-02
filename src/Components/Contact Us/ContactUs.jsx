import Navbar from "../Navbar/Navbar";
import contactusImg from "../../assets/ContactUs.jpg";
import "./contactus.css";
import { useState } from "react";
function ContactUs() {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  function handleFeedback(e) {
    e.preventDefault();
    alert("Feedback submitted successfully");
    console.log({ rating }, { comment });
    setComment("");
  }

  return (
    <>
      <Navbar />
      <form onSubmit={handleFeedback}>
        <div className="cantact-us-main">
          <img src={contactusImg} alt="contactus" />
          <div className="feedback-content">
            <div className="feedback-title">
              <p>Feedback</p>
            </div>
            <div className="seperator"></div>
            <div className="feedback-context">
              <p>
                Your feedback is highly valuable in helping us better
                understanding your needs and tailoring our services
              </p>
            </div>
            <div className="emoji-feedback">
              <div className="app">
                <div className="container">
                  <div className="item">
                    <label forhtml="0">
                      <input
                        className="radio"
                        type="radio"
                        name="feedback"
                        id="0"
                        value="0"
                        onClick={(e) => setRating(e.target.value)}
                      />
                      <span>🤬</span>
                    </label>
                  </div>

                  <div className="item">
                    <label forhtml="1">
                      <input
                        className="radio"
                        type="radio"
                        name="feedback"
                        id="1"
                        value="1"
                        onClick={(e) => setRating(e.target.value)}
                      />
                      <span>🙁</span>
                    </label>
                  </div>

                  <div className="item">
                    <label forhtml="2">
                      <input
                        className="radio"
                        type="radio"
                        name="feedback"
                        id="2"
                        value="2"
                        onClick={(e) => setRating(e.target.value)}
                      />
                      <span>😶</span>
                    </label>
                  </div>

                  <div className="item">
                    <label forhtml="3">
                      <input
                        className="radio"
                        type="radio"
                        name="feedback"
                        id="3"
                        value="3"
                        onClick={(e) => setRating(e.target.value)}
                      />
                      <span>😁</span>
                    </label>
                  </div>

                  <div className="item">
                    <label forhtml="4">
                      <input
                        className="radio"
                        type="radio"
                        name="feedback"
                        id="4"
                        value="4"
                        onClick={(e) => setRating(e.target.value)}
                      />
                      <span>😍</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="comment-section">
              <textarea
                placeholder="Add a comment"
                name="feedback-comments"
                id="comments"
                cols="30"
                rows="10"
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>
            <button type="submit">Feedback</button>
          </div>
        </div>
      </form>
    </>
  );
}
export default ContactUs;

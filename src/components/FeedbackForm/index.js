import React from "react";

function FeedbackForm() {
  const [score, setScore] = React.useState("10");
  const [feedback, setFeedback] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5) {
      alert("Please provide feedback to improve our service");
      console.log("Feedback submitted");
      setFeedback("");
      setScore("10");
      return;
    }
    console.log("Feedback submitted");
    setFeedback("");
    setScore("10");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h2>Feedback Form</h2>
        <div className="field">
          <label htmlFor="range">Score: {score}&#9733;</label>
          <br />
          <input
            type="range"
            id="range"
            name="range"
            min="0"
            max="10"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="feedback">Feedback</label>
          <br />
          <textarea
            id="feedback"
            name="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}

export default FeedbackForm;

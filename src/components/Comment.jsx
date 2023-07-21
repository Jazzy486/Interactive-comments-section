import PropTypes from "prop-types";

Comment.propTypes = {
  image1: PropTypes.any,
  user: PropTypes.any,
  createdAt: PropTypes.any,
  score: PropTypes.any,
  content: PropTypes.any
};

function Comment(props) {
  return (
    <div className="main">
    <div className="comment">
      <div className="score-div">
        <div className="score-counter">
          <a>+</a>
          <p className="comment-score-count">{props.score}</p>
          <a>-</a>
        </div>
      </div>
      <div className="comment-content">
        <div className="credentials">
          <img className="existing-img" src={props.image1} alt="user" />
          <h4>{props.user}</h4>
          <div className="timestamp">
          <h5>{props.createdAt}</h5>
          </div>
          <a className="reply-cta">
            <img src="/images/icon-reply.svg" alt="report" />
            <p>Reply</p>
          </a>
        </div>
        <p className="comment-text">{props.content}</p>
      </div>
    </div>
    </div>
  );
}

export default Comment;

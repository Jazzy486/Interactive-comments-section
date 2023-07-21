import PropTypes from "prop-types";

Comment.propTypes = {
  image1: PropTypes.any,
};

function Comment() {
  return (
    <div className="main">
    <div className="comment">
      <div className="score-div">
        <div className="score-counter">
          <a>+</a>
          <p className="comment-score-count">1</p>
          <a>-</a>
        </div>
      </div>
      <div className="comment-content">
        <div className="credentials">
          <img className="existing-img" src="/images/avatars/image-amyrobson.webp" alt="user" />
          <h4>amyrobson</h4>
          <div className="timestamp">
          <h5>1 month ago</h5>
          </div>
          <a className="reply-cta">
            <img src="/images/icon-reply.svg" alt="report" />
            <p>Reply</p>
          </a>
        </div>
        <p className="comment-text">Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You&apos;ve nailed the design and the responsiveness at various breakpoints works really well.</p>
      </div>
    </div>
    </div>
  );
}

export default Comment;

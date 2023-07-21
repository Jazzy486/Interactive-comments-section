import PropTypes from 'prop-types';

CreateArea.propTypes = {
  image1: PropTypes.any
};

function CreateArea(props) { 
  
    
  return (
      <div className='main'>
      
      <div className="new-comment">
      <img className='new-comment-img' src={props.image1}></img> 
      <textarea
          name="content"
          placeholder="Add a Comment..."
          rows={8}
          cols={80}
        />
       <button className="send-button">Send</button>
    </div>
    </div>
    )
}

export default CreateArea;



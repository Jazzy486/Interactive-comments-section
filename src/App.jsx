import './App.css'
import userData from "./userData";
import CreateArea from './components/CreateArea';
import Comment from './components/Comment';

function App() { 
   
  const currentUser = userData.currentUser;
  const comments = userData.comments;
   
  return (
    <div>
      <Comment
        key={comments[0].id}
        content={comments[0].content}
        user={comments[0].user.username}
        createdAt={comments[0].createdAt}
        score={comments[0].score}
        image1={comments[0].user.image.webp}
      />
      <CreateArea 
        image1={currentUser.image.webp}
      />
    </div>
      
  )
}

export default App

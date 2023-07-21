import './App.css'
import userData from "./userData";
import CreateArea from './components/CreateArea';
import Comment from './components/Comment';

function App() { 
   
  const currentUser = userData.currentUser;
   
  return (
    <div>
      <Comment/>
      <CreateArea 
        image1={currentUser.image.webp}
      />
    </div>
      
  )
}

export default App

import './App.css';
import { Invite } from './components/Invite/Invite';
import { SideMenu } from './components/SideMenu/SideMenu';
import { Content } from './components/Content/Content';

function App() {
  return (
    
    <div  className='background-img'>
      <div className='window'>
      <div className='watermark'></div>
    </div>
    <div className='content'>
      <SideMenu/>
      <Content/>
      <Invite/>
    </div>
    </div>
  );
}

export default App;

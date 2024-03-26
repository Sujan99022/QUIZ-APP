import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import javaImg from './components/images/java.png'
import pythonImg from './components/images/python.png'
import javascriptImg from './components/images/JavaScript.png'
import reactImg from './components/images/react.png'
import Quiz from './components/Quiz';
import { javaQ , javascriptQ, pythonQ, reactjsQ } from './components/topics/Topics';
import HeaderContext from './components/common/HeaderContext';

function App() {

  const [page , setPage] = useState(0)
  
  const java = javaQ()
  const python = pythonQ()
  const javascript = javascriptQ()
  const reactjs = reactjsQ()
  
  useEffect(() => {
    const storedPage = localStorage.getItem('currentPage');
    if (storedPage) {
      setPage(JSON.parse(storedPage));
      localStorage.removeItem('currentPage');
    }
  }, []);

  return (
    <div className="App">
      <div className='button_center'>
        {page===0 && <>
          <HeaderContext />
        <button onClick={()=>setPage(1)} className='home_btn'><img className='logo' src={javaImg} alt="java" />Java</button>
        <button onClick={()=>setPage(2)} className='home_btn'><img className='logo' src={pythonImg} alt="python" />Python</button>
        <button onClick={()=>setPage(3)} className='home_btn'><img className='logo' src={javascriptImg} alt="javascript" />Java Script</button>
        <button onClick={()=>setPage(4)} className='home_btn'><img className='logo' src={reactImg} alt="react" />React JS</button>
      </>}
      </div>
      {page===1 && <Quiz topic="java" questions={java} img={javaImg} page={page} />}
      {page===2 && <Quiz topic="python" questions={python} img={pythonImg} page={page} />}
      {page===3 && <Quiz topic="javascript" questions={javascript} img={javascriptImg} page={page} />}
      {page===4 && <Quiz topic="reactjs" questions={reactjs} img={reactImg} page={page} />}
    </div>
  );
}

export default App;

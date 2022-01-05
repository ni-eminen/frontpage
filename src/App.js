import styled from 'styled-components'
import './App.css';

const Button = styled.button`
  max-width: 100%;
  border: 0px solid black;
  background-color: RGB(232, 89, 12, .75);
  color: black;
  padding: 14px 28px;
  font-size: 16px;
  color: white;

  &:hover {
    background-color: RGB(232, 89, 12, 1);
    cursor: pointer;
  }
  `
  const openWebsite = (url) => {
    window.open(url, "_blank")
  }


function App() {
  return (
    <div id="wrapper">
      <h1>Projects</h1>
      <div className='projectWrapper'>
        <Button className="linkButton" onClick={() => openWebsite('./speed-test')}>
          1. Typing speed test
        </Button>
        <Button className="gitButton" onClick={() => openWebsite('https://github.com/ni-eminen/TypingSpeedTest')}>
          Git
        </Button>
      </div>
      <Button className="linkButton" onClick={() => openWebsite('./NewQuiz')}>
        2. Commission by JYY
      </Button>
      <Button className="gitButton" onClick={() => openWebsite('https://github.com/ni-eminen/jyy-peli')}>
          Git
        </Button>
      <h1>Git</h1>
      <Button className='linkButton' onClick={() => openWebsite('https://github.com/ni-eminen')}>
        3. GitHub
      </Button>
      <Button className='linkButton' onClick={() => openWebsite('https://gitlab.jyu.fi/matoskni')}>
        4. GitLab - Inactive
      </Button>
    </div>
  )
}

export default App;

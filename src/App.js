import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import SiderBar from './components/SiderBar'
import Footer from './components/Footer'
import Content from './components/Content'
import Story from './components/Story'

function App() {
  return (
    <div className="app">
      <SiderBar />
      <div className="main-content">
        <Header />
        <Content />
        <Story />
        <hr className='line' />
        <Footer />
      </div>


    </div>


  );
}

export default App;

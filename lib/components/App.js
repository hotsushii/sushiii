import React, {Component} from 'react';
import axios from 'axios';
import TopBar from './TopBar';
import JumboTron from './JumboTron';
import ArticleWall from './ArticleWall';

const Footer = (props) => {
  const info = props.ftext;
  return(
    <div>
      <nav className="navbar fixed-bottom navbar-light bg-light">
        <a href="/api/v1" target="__blank" className="badge badge-info">{info.appName}API</a>
      </nav>
    </div>
  );
};

class App extends Component {
  constructor(){
    super();
    this.state = {
      joortiz: {},
      quotes:[],
      qnum: null,
      randomQuote:''
    };
    this.handleQuote = this.handleQuote.bind(this);
  }
  async componentDidMount() {
    console.info('componentDidMount called on App');
    const rawData = await axios.get('/api/v1');
    const data = rawData.data.person;
    const qata = rawData.data.quotes;
    let rada = rawData.data.quotes.length;
    const rand = this.getRandomInt(rada);
    const setQuo = qata[rand];
    this.setState({
      joortiz: data,
      quotes: qata,
      qnum: rand,
      randomQuote: setQuo
    });
  }

  getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
  }
  handleQuote(){
    const qLen = this.state.quotes.length;
    const rand = this.getRandomInt(qLen);
    let randomItem = this.state.quotes[rand];
    this.setState({
      randomQuote: randomItem,
      qnum: rand
    });
  }
  renderQuote(){
    const randItem = this.state.quotes[this.state.qnum];
    if (this.state.randomQuote === '') {
      return <div>{randItem}</div>; }
    else
    {
      return <div>{this.state.randomQuote}</div>;
    }
  }

  render() {
    if (this.state != undefined) {
      return(
        <div>
          <TopBar topInfo={this.state.joortiz} />
          <div className="container-fluid">
            <JumboTron quote={this.state.randomQuote} onHandleQuote={this.handleQuote} info={this.state.joortiz} />
            <ArticleWall info={this.state.joortiz} hobbies={this.state.joortiz.hobbies} skills={this.state.joortiz.skills} />
            <Footer ftext={this.state.joortiz} />
          </div>
        </div>
      );
    } else {
      console.info('state was undefined');
      return <div>loader component here</div>;
    }
  }
}



export default App;

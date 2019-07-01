import React, { Component } from 'react';
import PresCard from './components/PresCard';
import Nav from './components/Nav';
import Title from './components/Title';
import Wrapper from './components/Wrapper';
import presidents from './presidents.json';
import Column from './Column';
import Row from './Row';
import Container from './Container';
import './App.css';

function shufflePresidents(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    presidents,
    currentScore: 0,
    topScore: 0,
    rightWrong: '',
    clicked: []
  };

  //checking for image click outside array of ids to increment point, otherwisd reset
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ''
    });

    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    if (newScore === 12) {
      this.setState({ rightWrong: 'You WON!!!' });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: 'Oopsies... Try Again!',
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledPresidents = shufflePresidents(presidents);
    this.setState({ presidents: shuffledPresidents });
  };

  render() {
    return (
      <Wrapper>
        <Nav
          title={`Scene Click Game`}
          rightWrong={this.state.rightWrong}
          score={this.state.currentScore}
          topScore={this.state.topScore}
        />

        <Title>
          Click on each image only once to earn points! Careful... they don't
          stay put!
        </Title>

        <Container>
          <Row>
            {this.state.presidents.map(pres => (
              <Column size="md-3 sm-6">
                <PresCard
                  key={pres.name}
                  id={pres.id}
                  image={pres.image}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;

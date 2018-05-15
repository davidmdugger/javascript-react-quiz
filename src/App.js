import React, { Component } from 'react';
import Card from './Card/Card';
import NewCardButton from './NewCardButton/NewCardButton';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/database';

// db config
import { DB_CONFIG } from './config/firebase/db_config';

class App extends Component {
  app = firebase.initializeApp(DB_CONFIG);
  database = this.app.database().ref().child('cards');
  state = {
    cards: [],
    currentCard: {

    }
  }

  componentWillMount = () =>{
    const currentCards = [...this.state.cards];

    this.database.on('child_added', snap =>{
      currentCards.push({
        id: snap.key,
        q: snap.val().q,
        a: snap.val().a
      })

      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCards(currentCards)
      })
    });
  }

  getRandomCards = (currentCards) =>{
    let card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return (card);
  }

  updateCard = () =>{
    const currentCards = [...this.state.cards];
    this.setState({
      currentCard: this.getRandomCards(currentCards)
    })
  }

  render() {
    return (
      <div className="App">
        <Card
          question={this.state.currentCard.q}
          answer={this.state.currentCard.a}
        />
        <NewCardButton showNewCard={this.updateCard} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import sortedElements from './data-processing/current-date';
import List from "@material-ui/core/es/List/List";
import Card from "@material-ui/core/es/Card/Card";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import Typography from "@material-ui/core/es/Typography/Typography";

export class TestComponent extends Component {
  render() {
    return (
      <div>
        <p>
          <span>Foo</span>
        </p>
      </div>
    )
  }
}

const info = 'View';

const DateView = ({date, isTheSameYear}) => {
    const display =  isTheSameYear? date.toLocaleString(): 'More than year ago';
    return (
        <Typography color="textSecondary">
            {display}
        </Typography>
    );
};

const MessageView = ({msg, author, isTheSameYear, date}) => {
    return (
        <div style={{maxWidth: 300}}>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant={"headline"} color="textSecondary" component="h2">
                        Author: {author}
                    </Typography>
                    <Typography color="textSecondary">
                        Message: {msg}
                    </Typography>
                    <DateView date={date} isTheSameYear={isTheSameYear} />
                </CardContent>
            </Card>
        </div>
    );
};

const MessagesListView = (messages) => {
    return messages.map(MessageView)
};

class App extends Component {
  render() {
    return (
      <div className="App">
          {MessagesListView(sortedElements)}
      </div>
    )
  }
}

export default App

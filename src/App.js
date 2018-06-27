import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import {
  messagesWithDateInfo
} from './data-processing/current-date.js'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const info = `Random static info!`

const formatDate = date =>
  `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`

const DateView = ({ isYearOK, date }) =>
  isYearOK() ? (<div>{formatDate(date)}</div>) : (<div>Older than year</div>)

const MessageView = ({ date, msg, author, isYearOK }) => (
  <div style={{maxWidth: 300, margin: 16}}>
    <Card>
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          author: {author}
          <DateView date={date} isYearOK={isYearOK} />
        </Typography>
        <Typography component="p">
          {msg}
        </Typography>
      </CardContent>
    </Card>
  </div>
)

const MessagesListView = messages => messages.map(MessageView)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{display: 'flex', flexDirection: 'column'}}>
          { MessagesListView(messagesWithDateInfo) }
        </div>
      </div>
    )
  }
}

export default App

import React from 'react'
import { Container } from 'reactstrap'
import TabMenu from './components/tabMenu'

const App = () => {
  return (
    <div className="App">
      <Container fluid>
        <TabMenu />
        <p>PoC app used to develop an async behavior with latest React/Redux</p>
      </Container>
    </div>
  )
}

export default App

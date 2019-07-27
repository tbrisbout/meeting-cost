import React, { useState } from 'react';
import styled from 'styled-components';

import Cost from './Cost';

const AppShell = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Header = styled.header`
  background: tomato;
`

const AppTitle = styled.h1`
  color: white;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex: 1;
`

const Footer = styled.footer`
  font-size: 1.5em;
  color: tomato;
`;

const Input = styled.input`
  width: 2em;
  font-size: 2em;
`;

const handleEvent = handler => event => handler(event.target.value);

const App = () => {
  const [duration, setDuration] = useState(30);
  const [attendeeCount, setAttendeeCount] = useState(5);

  return (
    <AppShell>
      <Header>
        <AppTitle data-testid="appTitle">Meeting Cost</AppTitle>
      </Header>
      <Main>
        <p>
          <Input type="number" min="0" value={duration} onChange={handleEvent(setDuration)} /> minutes with {' '}
          <Input type="number" min="0" value={attendeeCount} onChange={handleEvent(setAttendeeCount)} /> attendees
        </p>

        <Cost {...{attendeeCount, duration}}/>
      </Main>
      <Footer>
        <p data-testid="appFooter">Do you really need this?</p>
      </Footer>
    </AppShell>
  )
};

export default App;

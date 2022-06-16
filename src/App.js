import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import PlayersDirectory from './routes/players/player.component';
import UstaLeagues from './routes/usta-leagues/usta-leagues.component';
import './App.scss';
import SignIn from './routes/sign-in/sign-in.component';
import Coordinator from './routes/coordinator/coordinator.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='' element={<Home />} />
        <Route path='usta-leagues' element={<UstaLeagues />} />
        <Route path='players' element={<PlayersDirectory />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='coordinator' element={<Coordinator />} />
      </Route>
    </Routes>
  );
};
export default App;

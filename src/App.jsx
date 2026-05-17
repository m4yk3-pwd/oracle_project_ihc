import {Routes, Route} from 'react-router-dom';

import {Home} from './page/home/Home';
import {Journey} from './page/journey/Journey';
// import {Ending} from './page/ending/Ending';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/journey" element={<Journey />} />
      {/* <Route path="/ending" element={<Ending />} /> */}
    </Routes>
  );
}

export default App;

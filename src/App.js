import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '~/routes';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((item, index) => {
            const Component = item.component;
            return <Route key={index} path={item.path} element={<Component />} />;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

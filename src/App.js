import './App.css';
import TruckList from './pages/TruckList';
import DriverList from './pages/DriverList';
import AnyRoute from './components/Routes/AnyRoute';

function App() {
  return (
    <>
      <AnyRoute title="Truck List" exact path="/trucks" component={TruckList} />
      <AnyRoute title="Driver List" exact path="/drivers" component={DriverList} />
    </>
  );
}

export default App;

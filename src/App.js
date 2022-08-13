import './App.css';
import TruckList from './pages/TruckList';
import DriverList from './pages/DriverList';
import AnyRoute from './components/Routes/AnyRoute';
import TruckDetail from './pages/TruckDetail';
import DriverDetail from './pages/DriverDetail';
import LoginUser from './pages/LoginUser/LoginUser';

function App() {
  return (
    <>
      <AnyRoute title="Login" exact path="/login" component={LoginUser} />
      <AnyRoute title="Truck List" exact path="/transporter/trucks" component={TruckList} />
      <AnyRoute title="Truck Detail" exact path="/transporter/trucks/:id" component={TruckDetail} />
      <AnyRoute title="Driver List" exact path="/transporter/drivers" component={DriverList} />
      <AnyRoute
        title="Driver Detail"
        exact
        path="/transporter/drivers/:id"
        component={DriverDetail}
      />
    </>
  );
}

export default App;

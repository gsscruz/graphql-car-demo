import './App.css';

import { useQuery } from '@apollo/client';
import AddPerson from './components/addBuyers/AddPerson';
import AddCar from './components/addCars/AddCar';
import Customers from './components/buyersRecord/Customers';

import {
  GET_CARS,
  GET_PEOPLE,
  ADD_CAR,
  ADD_BUYER,
  UPDATE_BUYER,
  UPDATE_CAR,
  REMOVE_BUYER,
  REMOVE_CAR,
} from './graphql/queries';

function AppContainer() {
  const {
    loading: loadingPeople,
    error: errorPeople,
    data: dataPeople,
  } = useQuery(GET_PEOPLE);

  const {
    loading: loadingCars,
    error: errorCars,
    data: dataCars,
  } = useQuery(GET_CARS);

  if (loadingPeople) return <h1>LOADING PEOPLE</h1>;
  if (errorPeople) return <h1>ERROR PEOPLE</h1>;
  // if (loadingCars) return <h1>LOADING CARS</h1>;

  // if (errorCars) return <h1>ERROR CARS</h1>;
  return (
    <div className='App'>
      <h1>People and Cars</h1>
      <AddPerson />
      <AddCar />
      <Customers customersData={dataPeople} />
    </div>
  );
}

export default AppContainer;

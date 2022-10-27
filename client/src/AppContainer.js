import './App.css';

import CarContainer from './components/CarContainer/CarContainer';
import PeopleContainer from './components/PeopleContainer/PeopleContainer';
import RecordContainer from './components/RecordContainer/RecordContainer';

import { useQuery } from '@apollo/client';

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
  if (loadingCars) return <h1>LOADING CARS</h1>;

  if (errorPeople) return <h1>ERROR PEOPLE</h1>;
  if (errorCars) return <h1>ERROR CARS</h1>;
  return (
    <div className='App'>
      <PeopleContainer />
      <CarContainer />
      <RecordContainer dataPeople={dataPeople} dataCars={dataCars} />
    </div>
  );
}

export default AppContainer;

import Header from '../layout/Header';
import { useQuery } from '@apollo/client';
import { GET_PEOPLE } from '../../graphql/queries';
import { List } from 'antd';
import Person from '../listItems/Person';
import AddPerson from '../forms/AddPerson';
import AddCar from '../forms/AddCar';

const getStyles = () => ({
  people: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const People = () => {
  const styles = getStyles();

  const { loading, error, data } = useQuery(GET_PEOPLE);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Header />
      <AddPerson />
      {data.people.length > 0 ? <AddCar /> : null}
      <List style={styles.people}>
        {data.people.map((person, index) => (
          <List.Item key={index}>
            <Person
              key={person.id}
              firstName={person.firstName}
              lastName={person.lastName}
              id={person.id}
            />
          </List.Item>
        ))}
      </List>
    </>
  );
};

export default People;

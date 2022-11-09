import { useState } from 'react';
import { Card } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import UpdatePerson from '../forms/UpdatePerson';

import { useQuery } from '@apollo/client';
import Car from './Car';
import { Link } from 'react-router-dom';
import Details from '../detail/Details';
import { GET_CARS } from '../../graphql/queries';
import RemoveBtn from '../buttons/RemoveBtn';

const getStyles = () => ({
  personCard: {
    width: '700px',
  },
  learnMore: {
    textAlign: 'right',
  },
});

const Person = (props) => {
  const styles = getStyles();
  const [id] = useState(props.id);
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [editMode, setEditMode] = useState(false);

  const handleClick = () => {
    setEditMode(!editMode);
  };

  const { loading, error, data } = useQuery(GET_CARS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <Card
        title={`${firstName} ${lastName}`}
        actions={[
          <EditOutlined key='edit' onClick={handleClick} />,
          <RemoveBtn id={id} />,
        ]}
        style={styles.personCard}
      >
        {editMode ? (
          <UpdatePerson
            id={props.id}
            firstName={props.firstName}
            lastName={props.lastName}
            onClick={handleClick}
            onBtnClick={handleClick}
          />
        ) : null}
        {data.cars.map((car, index) =>
          car.personId === props.id ? (
            <Car
              key={index}
              make={car.make}
              model={car.model}
              year={car.year}
              price={car.price}
              id={car.id}
            />
          ) : null
        )}
        <Link to={{ pathname: `/${id}` }} element={<Details />}>
          <div style={styles.learnMore}>Learn More</div>
        </Link>
      </Card>
    </div>
  );
};

export default Person;

import { v4 as uuidv4 } from 'uuid';
import { _, find, filter, remove } from 'lodash';
import { people, cars } from '../../peopleCarsScheme';

const resolvers = {
  Query: {
    cars: (parent, args, context, info) => {
      return cars;
    },
    people: (parent, args, context, info) => {
      return people;
    },

    findPerson: (parent, { id }, context, info) => {
      return filter(people, ['id', id]);
    },
    findCar: (parent, { personId }, context, info) => {
      return filter(cars, ['personId', personId]);
    },
  },
  Mutation: {
    //delete person from the list of people based on person.id
    removeBuyer: (parent, { id }, context, info) => {
      const removedBuyer = find(people, { id: id });

      if (!removedBuyer) {
        throw new Error(`Could not identify any buyer with id ${id}`);
      }
      remove(people, { id: id });
      return removedBuyer;
    },
    removeCar: (parent, { id }, context, info) => {
      const carToBeRemoved = find(cars, { id: id });
      if (!carToBeRemoved) {
        throw new Error(`Could not identify any car with id ${id}`);
      }
      remove(cars, { id: id });
      return carToBeRemoved;
    },
    //add new person to list of people based on person.id
    addBuyer: (parent, { id, firstName, lastName }, context, info) => {
      const buyer = {
        id,
        firstName,
        lastName,
      };
      people.push(buyer);
      return person;
    },
    //add car to a person
    addCar: (parent, { personId, year, make, model, price }, context, info) => {
      const carBought = {
        id: id,
        personId: personId,
        year: year,
        make: make,
        model: model,
        price: price,
      };

      cars.push(carBought);

      return carBought;
    },
    //update Person
    updateBuyer: (parent, { id, firstName, lastName }, context, info) => {
      const buyer = find(people, { id: id });
      if (!person) {
        throw new Error(`Could not identify any person with id ${id}`);
      }
      buyer.firstName = firstName;
      buyer.lastName = lastName;
      return people;
    },
    //update Car
    updateCar: (
      parent,
      { personId, id, year, make, model, price },
      context,
      info
    ) => {
      const carToUpdate = find(cars, { id: id });

      if (!carToUpdate) {
        throw new Error(`Could not identify any car with id ${id}`);
      }
      carToUpdate().year = year;
      carToUpdate().make = make;
      carToUpdate().model = model;
      carToUpdate().price = price;

      return carToUpdate;
    },
  },
};

export default resolvers;

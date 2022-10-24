import { v4 as uuidv4 } from 'uuid';

const updatePeoplesCar = () => {
  //empty people's car collection
  people.forEach((person) => (person.carCollection = []));
  //relate people.id to car.personId
  for (let i = 0; i < people.length; i++) {
    for (let j = 0; j < cars.length; j++) {
      if (cars[j].personId === people[i].id) {
        people[i].carCollection.push(cars[j]);
      }
    }
  }
};

let people = [
  {
    id: '1',
    firstName: 'Bill',
    lastName: 'Gates',
    carCollection: [],
  },
  {
    id: '2',
    firstName: 'Steve',
    lastName: 'Jobs',
    carCollection: [],
  },
  {
    id: '3',
    firstName: 'Linux',
    lastName: 'Torvalds',
    carCollection: [],
  },
];

const cars = [
  {
    id: '1',
    year: '2019',
    make: 'Toyota',
    model: 'Corolla',
    price: '40000',
    personId: '1',
  },
  {
    id: '2',
    year: '2018',
    make: 'Lexus',
    model: 'LX 600',
    price: '13000',
    personId: '1',
  },
  {
    id: '3',
    year: '2017',
    make: 'Honda',
    model: 'Civic',
    price: '20000',
    personId: '1',
  },
  {
    id: '4',
    year: '2019',
    make: 'Acura ',
    model: 'MDX',
    price: '60000',
    personId: '2',
  },
  {
    id: '5',
    year: '2018',
    make: 'Ford',
    model: 'Focus',
    price: '35000',
    personId: '2',
  },
  {
    id: '6',
    year: '2017',
    make: 'Honda',
    model: 'Pilot',
    price: '45000',
    personId: '2',
  },
  {
    id: '7',
    year: '2019',
    make: 'Volkswagen',
    model: 'Golf',
    price: '40000',
    personId: '3',
  },
  {
    id: '8',
    year: '2018',
    make: 'Kia',
    model: 'Sorento',
    price: '45000',
    personId: '3',
  },
  {
    id: '9',
    year: '2017',
    make: 'Volvo',
    model: 'XC40',
    price: '55000',
    personId: '3',
  },
];

const resolvers = {
  Query: {
    cars: (parent, args, context, info) => {
      return cars;
    },
    people: (parent, args, context, info) => {
      updatePeoplesCar();
      return people;
    },
    buyer: (parent, args, context, info) => {
      return people.find((citizen) => citizen.id === args.id);
    },
  },
  Mutation: {
    //delete person from the list of people based on person.id
    removeBuyer: (parent, args, context, info) => {
      let buyerToBeRemoved = people.find((citizen) => citizen.id === args.id);
      for (let i = 0; i < people.length; i++) {
        if (people[i].id === buyerToBeRemoved.id) {
          people.splice(i, 1);
        }
      }
      return people;
    },
    removeCar: (parent, args, context, info) => {
      let carToBeRemoved = cars.find((car) => car.id === args.id);
      console.log(carToBeRemoved);
      for (let i = 0; i < cars.length; i++) {
        if (cars[i].id === carToBeRemoved.id) {
          cars.splice(i, 1);
        }
      }
      return people;
    },
    //add new person to list of people based on person.id
    addBuyer: (parent, args, context, info) => {
      let createdId = uuidv4();
      let createdBuyer = {
        id: createdId,
        firstName: args.firstName,
        lastName: args.lastName,
      };
      people.push(createdBuyer);
      return people;
    },
    //add car to a person
    addCar: (parent, args, context, info) => {
      const { personId, year, make, model, price } = args;

      let carBought = {
        id: uuidv4(),
        personId: personId,
        year: year,
        make: make,
        model: model,
        price: price,
      };

      cars.push(carBought);
      updatePeoplesCar();
      return people;
    },
    //update Person
    updateBuyer: (parent, args, context, info) => {
      const { id, firstName, lastName } = args;
      const searchPersonIndex = people.findIndex(
        (searchPerson) => searchPerson.id === id
      );
      people[searchPersonIndex].firstName = firstName;
      people[searchPersonIndex].lastName = lastName;
      return people;
    },
    //update Car
    updateCar: (parent, args, context, info) => {
      updatePeoplesCar();
      const { personId, id, year, make, model, price } = args;

      const retrieveBuyersCar = () => {
        return people
          .find((peopleArray) => peopleArray.id === personId)
          .carCollection.find((vehicle) => vehicle.id === id);
      };
      console.log(retrieveBuyersCar());

      console.log(`PersonID  of the car is: ${personId}`);
      console.log(`ID of the Person is is: ${id}`);

      retrieveBuyersCar().year = year;
      retrieveBuyersCar().make = make;
      retrieveBuyersCar().model = model;
      retrieveBuyersCar().price = price;

      return people;
    },
  },
};

export default resolvers;

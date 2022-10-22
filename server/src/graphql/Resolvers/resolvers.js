import { v4 as uuidv4 } from 'uuid';

let people = [
  {
    id: '1',
    firstName: 'Bill',
    lastName: 'Gates',
  },
  {
    id: '2',
    firstName: 'Steve',
    lastName: 'Jobs',
  },
  {
    id: '3',
    firstName: 'Linux',
    lastName: 'Torvalds',
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
      return people;
    },
    buyer: (parent, args, context, info) => {
      return people.find((citizen) => citizen.id === args.id);
    },
  },
  Mutation: {
    removeBuyer: (parent, args, context, info) => {
      let buyerToBeRemoved = people.find((citizen) => citizen.id === args.id);
      for (let i = 0; i < people.length; i++) {
        if (people[i].id === buyerToBeRemoved.id) {
          people.splice(i, 1);
        }
      }
      return people;
    },
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
  },
};

export default resolvers;

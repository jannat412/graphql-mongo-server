import { PersonModel } from "./models/Person";

export const resolvers = {
  Query: {
    peoples: () => PersonModel.find()
  },
  Mutation: {
    createPerson: async (_, { name, area, gender, image }) => {
      const person = new PersonModel({ name, area, gender, image });
      await person.save();
      return person;
    }
  }
};

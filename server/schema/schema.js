const graphql = require("graphql");
const _ = require("loadash");
const { GraphQLObjectType, GraphQlString, GraphQLSchema } = graphql;

var books = [
  {
    name: "Man of a Wild",
    genre: "Fantasy",
    id: "1",
  },
  {
    name: "Muna Madan",
    genre: "Love Story",
    id: "2",
  },
];
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQlString },
    name: { type: GraphQlString },
    genre: { type: GraphQlString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQlString } },
      resolve(parent, args) {
        return _.find(books, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});

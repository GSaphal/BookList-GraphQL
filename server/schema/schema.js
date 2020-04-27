const graphql = require("graphql");

const { GraphQLObjectType, GraphQlString, GraphQlSchema } = graphql;

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQlString },
    name: { type: GraphQlString },
    gendre: { type: GraphQlString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQlString } },
      resolve(parent, args) {
        //code to get data from db/other source
      },
    },
  },
});

module.exports = new GraphQlSchema({
  query: RootQuery,
});

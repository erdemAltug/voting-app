// app/mixmatch/nested-server.tsx
import Image from "next/image";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export default async function EmployeeDetails({ params }: { params: { id: string } }) {
  const apolloClient = new ApolloClient({
    uri: process.env.API_BASE_URI,
    headers: {
      "x-hasura-admin-secret": `${process.env.SECRET_KEY}`,
    },
    cache: new InMemoryCache(),
  });
  
  
  const getUser = apolloClient.query({
    query : gql`
      query getUsers {
        users(where: {id: {_eq: ${params.id}}}) {
      email
      id
      name
      password
      phone_number
      title
      updated_at
      years
      created_at
      department
      adress
    }
      }
    `,
  });
  
  const { data } = await getUser;

  console.log('first')
  return (

    <div>My Post: {data.users[0].name} </div>

  );
}


import Image from "next/image";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import EmployeeDetail from "@/app/components/employee-detail";


export default async function EmployeeDetails({
  params, props
}: {
  params: { id: string };
  props : { props: any}

}) {
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
      img
    }
      }
    `,
  });

  const { data }  = await getUser;
  const arr = data.users.map((obj: any) => ({ ...obj, vote: 0 }));

  return (
    <div>
      <EmployeeDetail props={arr} />
    </div>
  );
}

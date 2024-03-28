// app/mixmatch/nested-server.tsx
import Image from "next/image";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Card from "../components/card";
import { Suspense } from "react";

const apolloClient = new ApolloClient({
  uri: process.env.API_BASE_URI,
  headers: {
    "x-hasura-admin-secret": `${process.env.SECRET_KEY}`,
  },
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
});

const getAllUser = apolloClient.query({
  query: gql`
    query getUsers {
      users {
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

export default async function Employee() {
  const { data } = await getAllUser;
  const arr = data.users.map((obj: any) => ({ ...obj, vote: 0 }));

  return (
    <div>
      <Suspense fallback={<p>Loading feed...</p>}>
        <Card props={arr} />
      </Suspense>
    </div>
  );
}

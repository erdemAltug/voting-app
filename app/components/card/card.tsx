"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCounterStore } from "@/app/store/employee";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import Card from "../styled/card";
import Button from "../styled/button";
import Counter from "../styled/counter";
import CardImage from "../styled/image";

export default function card(props: any) {
  if (typeof window !== 'undefined') {
    console.log('emloyess', JSON.parse(localStorage.getItem('employees')!))
  }

  const router = useRouter();
  const [count, setCount] = useState(0);
  const store = useCounterStore((state: any) => state.count);
  const increment = useCounterStore((state: any) => state.increment);
  const arr = props.props;

  async function handleClick(e: any) {
    console.log(e);
    setCount(count + 1)
    var selected = arr.find((obj: any) => {
      return obj.id === e
    })
    selected.vote = selected.vote + 1;
    console.log("selected", selected.vote);
    arr.sort((a: any, b: any) => b.vote - a.vote);
    console.log("arr", arr);
    if (typeof window !== 'undefined') {
      localStorage.setItem('employees', JSON.stringify(arr));
    }
  
    // alert(e);
    // router.push(`/mixmatch/${e}`);
  }
  return (

      <div className="card-container">
        {arr.map((employee: any) => (
          <Card onClick={() => router.push('/mixmatch/' + employee.id)} key={employee.id} >
            <Counter> {employee.vote} </Counter>
            <CardImage
              src={employee.img}
              alt="employee image"
            />
            <div className="card-content">
              <h4>{employee.name}</h4>
              <p>{employee.department}</p>
              <p>{employee.title}</p>
              <p>{employee.years}</p>
              <Button onClick={(e) => handleClick(employee.id)}>
                Oy Ver
              </Button>
            </div>
          </Card>
        ))}
      </div>
  );
}

// const arr = data.users.map((obj: any) => ({ ...obj, vote: 0 }));

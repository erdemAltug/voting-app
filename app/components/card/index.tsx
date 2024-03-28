"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "../styled/card";
import Button from "../styled/button";
import Counter from "../styled/counter";
import CardImage from "../styled/image";
import CardContent from "../styled/card/content";
import CardDetails from "../styled/card/details";
import CardTitle from "../styled/card/title";
import CardContainer from "../styled/card/container";
import Title from "../styled/card/page-title";

export default function EmployeeCard(props: any) {
  const sortedProps = [...props.props];
  sortedProps.sort((a: any, b: any) => b.vote - a.vote);
  const router = useRouter();
  const [employee, setEmployee] = useState(sortedProps);

  async function vote(id: number) {
    const tempArr = [...employee];
    tempArr.map((opt: any) => {
      if (opt.id === id) {
        opt.vote = opt.vote + 1;
      }
    });
    setEmployee(tempArr);
    tempArr.sort((a: any, b: any) => b.vote - a.vote);
  }

  return (
    <>
    <Title>Employee Voting</Title>
      <CardContainer>
        {employee.map((employee: any) => (
          <Card key={employee.id}>
            <Counter> {employee.vote} </Counter>
            <CardImage
              onClick={() => router.push("/employee/" + employee.id)}
              src={employee.img}
              alt="employee image"
            />
            <CardContent>
              <CardTitle>{employee.name}</CardTitle>
              <CardDetails>{employee.department}</CardDetails>
              <CardDetails>{employee.title}</CardDetails>
              <CardDetails>{employee.years}</CardDetails>
              <Button onClick={(e) => vote(employee.id)}>Oy Ver</Button>
            </CardContent>
          </Card>
        ))}
      </CardContainer>
    </>
  );
}

// const arr = data.users.map((obj: any) => ({ ...obj, vote: 0 }));

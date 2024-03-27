"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Link from "next/link";

const StyledButton = styled.button`
  display: inline-block;
  padding: 8px 16px;
  background-color: #333;
  border-radius: 4px;
  margin-top: 12px;
`;

export default function EmployeeDetail(props: any) {
  const [count, setCount] = useState(0);
  const router = useRouter();

  function handleClick(e: any) {
    console.log(e);
    setCount(count + 1)
    // alert(e);
    router.push(`/mixmatch/${e}`);

  }
  return (
    <div style={{ margin: "2%" }}>
      <div className="card">
        <div className="vote"> {count} </div>
        <img
          src="https://static.generated.photos/vue-static/face-generator/landing/demo-previews/sex.jpg"
          alt="employee image"
        />
        <div className="card-content">
          <h3>{props.name}</h3>
          <p>{props.title}</p>
          <StyledButton onClick={() => handleClick(props.id)}>
            {" "}
            Oy Ver
          </StyledButton>
        </div>
      </div>
    </div>
  );
}

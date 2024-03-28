"use client";
import Card from '../styled/card';
import CardContainer from '../styled/card/container';
import CardContent from '../styled/card/content';
import CardDetails from '../styled/card/details';
import CardTitle from '../styled/card/title';
import Title from '../styled/card/title';
import EmployeeCard from '../styled/employee-card'
import DetailImage from '../styled/employee-card/employee-detail-image';
import CardImage from '../styled/image';

export default function EmployeeDetail(props: any) {
  const employeeDetail = props.props[0];
  return (
    <div>
      <>
      <CardContainer>
          <EmployeeCard key={employeeDetail.id}>
            <DetailImage
              src={employeeDetail.img}
              alt="employee image"
            />
            <CardContent>
              <CardTitle>{employeeDetail.name}</CardTitle>
              <CardDetails>{employeeDetail.department}</CardDetails>
              <CardDetails>{employeeDetail.phone_number}</CardDetails>
              <CardDetails>{employeeDetail.adress}</CardDetails>
              <CardDetails>{employeeDetail.email}</CardDetails>
              <CardDetails>{employeeDetail.title}</CardDetails>
              <CardDetails>{employeeDetail.years}</CardDetails>
            </CardContent>
          </EmployeeCard>
      </CardContainer>
    </>
    </div>
  );
}

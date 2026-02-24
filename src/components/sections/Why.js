import React from "react";
import styled from "styled-components";
import { FaMotorcycle, FaRegClipboard, FaClock } from "react-icons/fa";
import img from "../../asstes/img/webp/man2.png";
const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 80px auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const LeftBox = styled.div`
  max-width: 672px;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 65px;
  line-height: 1.2;
  font-weight: bold;
  margin-bottom: 25px;
  color: #1a1a1a;
`;

const SubTitle = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: #666;
  margin-bottom: 55px;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const IconCircle = styled.div`
  width: 80px;
  height: 80px;
  min-width: 80px;
  border-radius: 50%;
  background-color: #f0fdf4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #22b561;
  transition: all 0.3s ease;
`;

const Item = styled.div`
  max-width: 550px;
  width: 100%;
  padding: 30px 40px;
  display: flex;
  align-items: center;
  gap: 30px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: transparent;

  &:hover {
    background-color: #f4fbf7;
  }

  &:hover ${IconCircle} {
    background-color: #ffffff;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  }
`;

const ItemText = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
    color: #222;
  }
  p {
    font-size: 15px;
    color: #777;
    line-height: 1.5;
  }
`;

const ArrowDown = styled.div`
  color: #22b561;
  font-size: 35px;
  margin-top: 30px;
  margin-left: 60px;
  display: flex;
  justify-content: flex-start;
`;
const RightBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center; 
  align-items: center;     
  position: relative;
`;

export default function Why() {
  const data = [
    {
      title: "Fasted delivery Service",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <FaMotorcycle />,
    },
    {
      title: "Online order Service",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <FaRegClipboard />,
    },
    {
      title: "24/8 Service",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <FaClock />,
    },
  ];

  return (
    <Container>
      <LeftBox>
        <Title>Why We Are The Best?</Title>
        <SubTitle>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </SubTitle>

        <Items>
          {data.map((val, index) => (
            <Item key={index}>
              <IconCircle>{val.icon}</IconCircle>
              <ItemText>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </ItemText>
            </Item>
          ))}
        </Items>

        <ArrowDown>↓</ArrowDown>
      </LeftBox>

      <RightBox>
           <img src={img} alt="Best Service" />
      </RightBox>
    </Container>
  );
}

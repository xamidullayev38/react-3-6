import React from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import img from "../../asstes/img/webp/vegs.webp";

const Section = styled.section`
  background: #f4fbf7;
  padding: 100px 40px;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LeftSide = styled.div`
  flex: 1;
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 576px) {
    transform: rotate(0);
  }
`;

const FoodCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  &:hover {
    transform: scale(1.05) rotate(3deg);
    z-index: 10;
  }
`;

const RightSide = styled.div`
  flex: 1;

  h2 {
    font-size: 56px;
    font-weight: 800;
    line-height: 1.2;
    color: #2c2c2c;
    margin-bottom: 20px;
    font-family: "Playfair Display", serif;
  }

  p {
    font-size: 16px;
    color: #666;
    line-height: 1.8;
    margin-bottom: 40px;
    max-width: 500px;
  }
`;

const ExploreBtn = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  color: #2c2c2c;
  padding: 0;

  .circle {
    width: 50px;
    height: 50px;
    background: #22b561;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    font-size: 20px;
  }

  &:hover .circle {
    transform: translateX(10px);
    background: #1b9b52;
  }
`;

export default function ExploreSection() {
  return (
    <Section>
      <Container>
        <LeftSide>
          <img src={img} alt="vegs" />
        </LeftSide>

        <RightSide>
          <h2>Explor Our Special Items</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer...
          </p>

          <ExploreBtn>
            Explor Now
            <div className="circle">
              <FaArrowRight />
            </div>
          </ExploreBtn>
        </RightSide>
      </Container>
    </Section>
  );
}

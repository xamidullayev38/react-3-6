import React from "react";
import styled from "styled-components";
import phoneImg from "../../asstes/img/webp/phone.webp"; 
import appleStore from "../../asstes/img/webp/appstore2.webp"; 
import googlePlay from "../../asstes/img/webp/appstore.webp"; 

const OrderSection = styled.section`
  padding: 100px 40px;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    gap: 50px;
  }
`;

const LeftSide = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
`;

const PhoneWrapper = styled.div`
  position: relative;
  width: 300px; 
  
  .main-phone {
    width: 100%;
    height: auto;
    position: relative;
    z-index: 2;
    filter: drop-shadow(0 20px 50px rgba(0,0,0,0.15));
  }

  .back-phone {
    position: absolute;
    width: 90%;
    left: -40px;
    top: 20px;
    z-index: 1;
    opacity: 0.6;
    transform: rotate(-5deg);
  }
`;

const RightSide = styled.div`
  flex: 1;

  .badge {
    background: #f0fdf4;
    color: #22b561;
    padding: 8px 20px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 56px;
    font-weight: 800;
    line-height: 1.1;
    color: #2c2c2c;
    margin-bottom: 25px;
  }

  p {
    font-size: 16px;
    color: #666;
    line-height: 1.8;
    margin-bottom: 40px;
    max-width: 500px;
  }
`;

const StoreButtons = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 992px) {
    justify-content: center;
  }

  img {
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

export default function AppDownloadSection() {
  return (
    <OrderSection>
      <Container>
        <LeftSide>
          <PhoneWrapper>
            <img src={phoneImg} alt="App UI Main" className="main-phone" />
          </PhoneWrapper>
        </LeftSide>

        <RightSide>
          <span className="badge">Download App</span>
          <h2>Simple Way To Order Your Organic Fruit</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer...
          </p>

          <StoreButtons>
            <img src={appleStore} alt="App Store" />
            <img src={googlePlay} alt="Google Play" />
          </StoreButtons>
        </RightSide>
      </Container>
    </OrderSection>
  );
}
import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

import customerImg from "../../asstes/img/webp/man.png"; 
import userPlaceholder from "../../asstes/img/webp/user.webp";

const TestimonialSection = styled.section`
  padding: 100px 40px;
  max-width: 1300px;
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  flex: 1;
  max-width: 600px;

  h2 {
    font-size: 56px;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 30px;
    color: #2c2c2c;
  }
`;

const SlideContent = styled.div`
  p {
    font-size: 16px;
    color: #666;
    line-height: 1.8;
    margin-bottom: 30px;
  }

  h4 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;

const Stars = styled.div`
  color: #f1c40f;
  display: flex;
  gap: 5px;
  margin-bottom: 40px;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const NavBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #eee;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  transition: 0.3s;
  color: #ccc;

  &.active {
    background: #22b561;
    color: white;
    border-color: #22b561;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const RightSide = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 450px;
  height: 450px;
  background: #f0fdf4;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: visible;

  img.main-user {
    width: 90%;
    height: auto;
    object-fit: contain;
    z-index: 1;
  }
`;

const FloatingCard = styled.div`
  position: absolute;
  bottom: 40px;
  left: -20px;
  background: white;
  padding: 15px 25px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .user-group {
    display: flex;
    align-items: center;
    
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 2px solid white;
      margin-right: -10px;
    }
    
    .plus {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #eee;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: bold;
      margin-left: 15px;
    }
  }
`;

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Hridoy",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rating: 4,
    },
    {
      id: 2,
      name: "John Doe",
      text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularis in the 1960s with the release of Letraset sheets.",
      rating: 5,
    }
  ];

  return (
    <TestimonialSection>
      <Container>
        <LeftSide>
          <h2>What Our Customers <br /> About Us saying</h2>
          
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <SlideContent>
                  <p>{item.text}</p>
                  <h4>{item.name}</h4>
                  <Stars>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} color={i < item.rating ? "#f1c40f" : "#eee"} />
                    ))}
                  </Stars>
                </SlideContent>
              </SwiperSlide>
            ))}
          </Swiper>

          <NavButtons>
            <NavBtn className="prev-btn">
              <FaChevronLeft />
            </NavBtn>
            <NavBtn className="next-btn active">
              <FaChevronRight />
            </NavBtn>
          </NavButtons>
        </LeftSide>

        <RightSide>
          <ImageWrapper>
            <img src={customerImg} alt="Mijoz" className="main-user" />
            
            <FloatingCard>
              <div style={{ color: '#f1c40f', display: 'flex', gap: '2px', marginBottom: '5px' }}>
                <FaStar size={12} /><FaStar size={12} /><FaStar size={12} /><FaStar size={12} /><FaStar size={12} />
              </div>
              <div className="user-group">
                <img src={userPlaceholder} alt="u1" />
                <img src={userPlaceholder} alt="u2" />
                <img src={userPlaceholder} alt="u3" />
                <img src={userPlaceholder} alt="u4" />
                <div className="plus">+</div>
              </div>
            </FloatingCard>
          </ImageWrapper>
        </RightSide>
      </Container>
    </TestimonialSection>
  );
}
import styled from "styled-components";
import { FaUser, FaStar, FaShoppingBasket } from "react-icons/fa";
import vegs from "../../asstes/img/webp/veggs.png";

const Hero = styled.section`
  background: #f4fbf7;
  padding: 80px 40px;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1440px;
  width:100%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextBlock = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 68px;
  font-weight: 800;
  color: #2c2c2c;
  line-height: 1.1;
  margin-bottom: 25px;

  span {
    color: #22b561;
  }
`;

const Description = styled.p`
  color: #666;
  font-size: 16px;
  line-height: 1.7;
  max-width: 550px;
  margin-bottom: 30px;
`;

const OrderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;

  .icon-circle {
    width: 45px;
    height: 45px;
    background: #22b561;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
  }

  &:hover .icon-circle {
    transform: translateX(5px);
  }
`;

const MainImage = styled.div`
  img {
    max-width: 90%;
    height: auto;
    object-fit: contain;
  }
`;

/* ===== O'NG TOMON: Statistika kartochkalari ===== */
const StatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const StatCard = styled.div`
  background: #ffffff;
  padding: 25px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03); /* Yumshoq soya */
  min-width: 250px;
`;

const IconBox = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: ${(props) => props.bg || "#e7f7ee"};
  color: #22b561;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
`;

const StatData = styled.div`
  h3 {
    margin: 0;
    font-size: 32px;
    font-weight: 700;
    color: #222;
  }
  p {
    margin: 0;
    font-size: 14px;
    color: #888;
    white-space: nowrap;
  }
`;

export default function HeroSection() {
  return (
    <Hero>
      <Container>
        <LeftContent>
          <TextBlock>
            <Title>
              Organic Fruit & <br /> <span>Vegetables</span>
            </Title>
            <Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </Description>
            <OrderSection>
              Order Now <div className="icon-circle">→</div>
            </OrderSection>
          </TextBlock>

          <MainImage>
            <img src={vegs} alt="Vegetables Basket" />
          </MainImage>
        </LeftContent>

        <StatsWrapper>
          <StatCard>
            <IconBox><FaUser /></IconBox>
            <StatData>
              <h3>30K</h3>
              <p>User Order</p>
            </StatData>
          </StatCard>

          <StatCard>
            <IconBox><FaStar /></IconBox>
            <StatData>
              <h3>20K</h3>
              <p>Reviews (4.8)</p>
            </StatData>
          </StatCard>

          <StatCard>
            <IconBox><FaShoppingBasket /></IconBox>
            <StatData>
              <h3>300</h3>
              <p>Items</p>
            </StatData>
          </StatCard>
        </StatsWrapper>
      </Container>
    </Hero>
  );
}
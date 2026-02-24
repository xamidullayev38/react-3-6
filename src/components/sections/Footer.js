import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
// Logo rasmini loyihangizga qarab import qiling
import logoImg from "../../asstes/img/webp/logo.webp"; 

const FooterContainer = styled.footer`
  padding: 80px 40px 40px;
  background-color: #ffffff;
  border-top: 1px solid #f0f0f0;
`;

const ContentWrapper = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 40px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 25px;
    color: #2c2c2c;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 15px;
      color: #666;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #22b561;
      }
    }
  }
`;

const LogoSection = styled.div`
  img {
    margin-bottom: 25px;
  }

  p {
    color: #666;
    line-height: 1.6;
    font-size: 15px;
    max-width: 300px;
  }
`;

const ContactInfo = styled.div`
  p {
    color: #666;
    margin-bottom: 20px;
  }

  .social-icons {
    display: flex;
    gap: 20px;

    a {
      color: #2c2c2c;
      font-size: 20px;
      transition: color 0.3s, transform 0.3s;

      &:hover {
        color: #22b561;
        transform: translateY(-3px);
      }
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 60px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  color: #999;
  font-size: 14px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <ContentWrapper>
        <FooterColumn>
          <LogoSection>
            <img src={logoImg} alt="Oyasim Logo" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </LogoSection>
        </FooterColumn>

        <FooterColumn>
          <h3>Navigation</h3>
          <ul>
            <li>About Us</li>
            <li>Service</li>
            <li>Menu</li>
          </ul>
        </FooterColumn>

        <FooterColumn>
          <h3>Resources</h3>
          <ul>
            <li>Reviews</li>
            <li>Blog</li>
            <li>Update News</li>
          </ul>
        </FooterColumn>

        <FooterColumn>
          <h3>Contact Us</h3>
          <ContactInfo>
            <p>Email: oyasim@email.com</p>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </ContactInfo>
        </FooterColumn>
      </ContentWrapper>

      <Copyright>
        © 2026 Oyasim. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}
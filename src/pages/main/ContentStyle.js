import styled from "styled-components";

export const ContentStyle = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;

  .img-box {
    width: 50%;
    img {
      width: 100%;
      border-radius: 24px;
      object-fit: cover;
    }
  }

  .text-box {
    position: relative;
    width: 50%;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: clamp(1.5rem, 3vw, 2rem);
      margin-bottom: 20px;
    }

    span {
      display: block;
      font-size: 0.95rem;
      line-height: 1.8;
    }

    .inner-box {
      width: min(450px, 100%);
      position: relative;
    }

    .go-shop {
      margin: 30px auto 0;
    }
  }

  @media (max-width: 1024px) {
    gap: 40px;
    .text-box {
      text-align: left;
      justify-content: flex-start;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;

    .img-box,
    .text-box {
      width: 100%;
    }

    .text-box {
      text-align: left;
      align-items: flex-start;
      .inner-box {
        position: static;
        transform: none;
        margin: 0;
      }
    }
  }

  @media (max-width: 600px) {
    gap: 32px;
    .text-box {
      span {
        font-size: 0.9rem;
      }
    }
  }
`;

export const Content2Style = styled.section`
  box-sizing: border-box;
  padding: 150px 0;
  color: #e3f2fd;

  .Con-Text {
    width: min(900px, 100%);
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    span {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    padding: 100px 0;
    .Con-Text {
      span {
        font-size: 0.95rem;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 72px 0;
  }
`;

export const BannerStyle = styled.div`
  margin-bottom: 100px;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const Content4Style = styled.section`
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  justify-content: space-evenly;
  gap: 40px;
  color: #e3f2fd;

  p {
    line-height: 25px;
    font-size: 0.95rem;
  }

  .title {
    margin-bottom: 30px;
    font-weight: 600;
  }

  > div {
    max-width: 320px;
  }

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 32px;
    > div {
      max-width: none;
      background: rgba(13, 27, 61, 0.35);
      padding: 24px;
      border-radius: 16px;
    }
  }

  @media (max-width: 480px) {
    margin-top: 72px;
    margin-bottom: 72px;
    p {
      font-size: 0.9rem;
    }
  }
`;

import styled from "styled-components";

export const VisualWrap = styled.section`
  width: 100%;
  position: relative;
  margin-top: 100px;

  .video-box {
    position: relative;
    border-radius: 30px;
    overflow: hidden;

    video {
      width: 100%;
      display: block;
    }
  }

  .buy-now {
    width: 150px;
    height: 50px;
    background: #000035;
    border-radius: 10px;
    text-align: center;
    padding: 15px;
    position: absolute;
    right: 100px;
    bottom: 40px;

    a {
      color: #e3f2fd;
      width: 100%;
      height: 100%;
      display: block;
      font-weight: 600;
    }
  }

  .Main-Text {
    position: absolute;
    left: 50%;
    top: -16%;
    transform: translateX(-50%);
    text-align: center;
    a {
      color: #e3f2fd;
      font-weight: 600;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 80px;
    .buy-now {
      right: 40px;
      bottom: 32px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 60px;
    .buy-now {
      position: static;
      margin: 16px auto 0;
    }
    .Main-Text {
      position: static;
      transform: none;
      margin: 24px auto 0;
    }
  }
`;

export const MainWrap = styled.div`
  padding: 80px 0 120px;
  display: flex;
  flex-direction: column;
  gap: 120px;

  h2 {
    font-size: 30px;
    font-weight: 700;
  }

  .swiperStyle {
    margin-top: 100px;

    img {
      width: 100%;
      height: 700px;
      object-fit: cover;
      border-radius: 24px;
    }
  }

  @media (max-width: 1024px) {
    gap: 90px;
    .swiperStyle {
      margin-top: 60px;
      img {
        height: 520px;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 60px 0 80px;
    gap: 72px;

    .swiperStyle {
      margin-top: 40px;
      img {
        height: 360px;
      }
    }
  }

  @media (max-width: 480px) {
    gap: 56px;

    .swiperStyle {
      img {
        height: 260px;
      }
    }
  }
`;

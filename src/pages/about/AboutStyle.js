import styled from "styled-components";

export const AboutWrap = styled.div`
  color: #e3f2fd;

  .inner {
    margin-top: 100px;
    margin-bottom: 100px;
  }

  .nav {
    display: flex;
    gap: 16px;
    margin-bottom: 30px;

    li {
      cursor: pointer;
      font-size: 1.4rem;
      font-weight: 600;
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    gap: 40px;

    .box-left {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .box-right {
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .title-content {
      margin-top: 15px;

      .title {
        margin-bottom: 10px;
        color: #80cbc4;
        font-weight: 600;
        font-size: 1.1rem;
      }

      .text-content {
        line-height: 1.6;

        ul {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;

          li {
            border: 1px solid #e3f2fd;
            padding: 12px 16px;
            text-align: center;
            border-radius: 16px;
            min-width: 120px;

            span {
              font-size: 0.95rem;
              margin-top: 10px;
              display: inline-block;
            }

            svg {
              vertical-align: middle;
              font-size: 42px;
            }
          }
        }
      }
    }

    .video-box {
      border-radius: 24px;
      overflow: hidden;

      video {
        width: 100%;
        display: block;
      }
    }
  }

  @media (max-width: 1024px) {
    .content {
      gap: 32px;

      .box-left,
      .box-right {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    .inner {
      margin-top: 80px;
      margin-bottom: 80px;
    }

    .nav {
      flex-wrap: wrap;
      font-size: 1.2rem;
    }

    .content {
      flex-direction: column;

      .title-content .text-content ul {
        justify-content: flex-start;
      }
    }
  }

  @media (max-width: 480px) {
    .title-content .text-content ul li {
      min-width: 100px;
    }
  }
`;

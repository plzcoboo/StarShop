import styled from "styled-components";

export const ProductWrap = styled.div`
  .inner {
    padding: 100px 0;
  }

  h2 {
    margin-bottom: 50px;
    font-weight: 700;
    color: #e3f2fd;
  }

  .cart-box {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 28px;

    article {
      padding: 24px;
      box-sizing: border-box;
      text-align: center;
      border-radius: 20px;
      border: 2px solid rgba(227, 242, 253, 0.2);
      background: rgba(13, 27, 61, 0.35);
      display: flex;
      flex-direction: column;
      gap: 18px;

      .product-img {
        background: #e3f2fd;
        border-radius: 16px;
        padding: 16px;
      }

      img {
        width: 100%;
        height: 130px;
        object-fit: contain;
      }

      h3 {
        font-size: 0.85rem;
        margin-bottom: 10px;
        color: #80cbc4;
      }

      h4 {
        font-size: 1.1rem;
        line-height: 1.3;
        font-weight: 300;
      }

      p {
        font-weight: 400;
        color: #64ffda;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: auto;
        gap: 12px;

        button {
          padding: 10px 22px;
          border-radius: 999px;
          background-color: #000035;
          border: 1px solid #e3f2fd;
          color: #e3f2fd;
          font-size: 0.85rem;
          transition: background 0.3s ease, color 0.3s ease;

          &:hover {
            background: #0d1b3d;
          }

          &.off {
            background: #e3f2fd;
            color: #1b5e20;
            border-color: transparent;
          }
        }

        span {
          font-size: 0.95rem;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .inner {
      padding: 80px 0;
    }
  }

  @media (max-width: 768px) {
    .inner {
      padding: 60px 0;
    }

    .cart-box {
      gap: 20px;

      article {
        padding: 20px;
      }
    }
  }

  @media (max-width: 480px) {
    .cart-box {
      grid-template-columns: 1fr;
    }
  }
`;

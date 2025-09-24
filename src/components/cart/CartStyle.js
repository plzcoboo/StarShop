import styled from "styled-components";

export const CartListWrap = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  color: #e3f2fd;

  h2 {
    color: inherit;
  }

  .title {
    font-size: 1.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }

  .cart-remove {
    display: flex;
    gap: 12px;

    button {
      width: 130px;
      height: 36px;
      font-size: 0.9rem;
      border: none;
      font-weight: 600;
      border-radius: 999px;
      background: rgba(227, 242, 253, 0.15);
      color: inherit;
      transition: background 0.3s ease;

      &:hover {
        background: rgba(227, 242, 253, 0.25);
      }
    }
  }

  .cart-con {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
    margin-top: 40px;
  }

  .cart-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 28px;
    flex: 1 1 60%;
    border-top: 2px solid #e3f2fd;
    padding-top: 20px;

    article {
      position: relative;
      color: inherit;
      text-align: center;
      box-sizing: border-box;
      padding: 24px 20px 28px;
      border-radius: 16px;
      border: 1px solid rgba(227, 242, 253, 0.2);
      background: rgba(13, 27, 61, 0.35);
      display: flex;
      flex-direction: column;
      gap: 16px;

      img {
        width: 150px;
        height: 100px;
        object-fit: contain;
        margin: 0 auto;
      }

      .product-img {
        background: #e3f2fd;
        border-radius: 12px;
        padding: 16px;
      }

      .cart-select {
        position: absolute;
        left: 16px;
        top: 16px;

        input[type="checkbox"] {
          display: none;
        }

        input[type="checkbox"] + label {
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 3px solid #e3f2fd;
          position: relative;
          border-radius: 4px;
        }

        input:checked + label::after {
          content: "✔";
          font-size: 16px;
          width: 20px;
          height: 20px;
          text-align: center;
          position: absolute;
          left: 0;
          top: 0;
        }
      }

      .cart-count {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        span {
          font-size: 1.1rem;
        }
        svg {
          font-size: 1.5rem;
        }
      }
    }
  }

  .cart-right {
    color: inherit;
    width: 320px;
    border-top: 2px solid #e3f2fd;
    line-height: 2;
    padding-top: 20px;
    background: rgba(13, 27, 61, 0.4);
    border-radius: 20px;
    padding: 28px;

    p {
      display: flex;
      justify-content: space-between;
      font-size: 0.95rem;
      gap: 12px;
    }

    .cart-Total {
      border-top: 4px solid #e3f2fd;
      border-bottom: 4px solid #e3f2fd;
      padding: 12px 0;
      margin-top: 20px;
      font-weight: 700;
    }

    .C-T {
      display: block;
      margin-left: auto;
      width: auto;
      margin-top: 12px;
      font-size: 1.1rem;
      text-align: right;
    }

    button {
      width: 100%;
      height: 50px;
      margin-top: 20px;
      border: none;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 999px;
      background: #64ffda;
      color: #003c3c;
    }
  }

  @media (max-width: 1024px) {
    .cart-con {
      flex-direction: column;
    }

    .cart-right {
      width: 100%;
      max-width: 500px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 80px;
    margin-bottom: 80px;

    .title {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }

    .cart-remove {
      width: 100%;
      justify-content: flex-start;
      flex-wrap: wrap;
    }

    .cart-con {
      gap: 32px;
    }

    .cart-right {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .cart-list {
      grid-template-columns: 1fr;
    }

    .cart-remove {
      flex-direction: column;
      align-items: stretch;

      button {
        width: 100%;
      }
    }

    .cart-right {
      padding: 24px 20px;
    }
  }
`;

export const CartEmptyWrap = styled.div`
  .inner {
    position: relative;

    h2 {
      font-size: clamp(2.2rem, 6vw, 3.5rem);
      margin-top: 200px;
      margin-bottom: 200px;
      color: #e3f2fd;
      text-align: center;
    }
  }

  a {
    width: 250px;
    background: #000;
    display: inline-block;
    height: 50px;
    line-height: 50px;
    color: #e3f2fd;
    text-align: center;
    border-radius: 999px;
  }

  @media (max-width: 768px) {
    .inner h2 {
      margin-top: 120px;
      margin-bottom: 120px;
    }
  }

  @media (max-width: 480px) {
    a {
      width: 100%;
    }
  }
`;

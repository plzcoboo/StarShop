import styled from "styled-components";

export const LoginWrap = styled.div`
  .inner {
    position: relative;
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Login-form {
    width: min(420px, 100%);
    background: rgba(13, 27, 61, 0.55);
    border-radius: 24px;
    padding: 48px 40px 40px;
    text-align: center;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
  }

  h2 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 36px;
    color: #e3f2fd;
  }

  img {
    width: 180px;
    margin-bottom: 16px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  p {
    position: relative;
    text-align: left;

    label {
      display: block;
      margin-bottom: 8px;
      color: #e3f2fd;
      font-weight: 600;
    }

    input[type="email"],
    input[type="password"] {
      width: 100%;
      box-sizing: border-box;
      height: 52px;
      padding: 0 16px;
      border-radius: 12px;
      border: none;
      background: rgba(227, 242, 253, 0.9);
      color: #0d1b3d;
      font-size: 0.95rem;
    }

    &:last-of-type {
      margin-top: 12px;
      text-align: center;

      button {
        width: 100%;
        height: 54px;
        background: #546e7a;
        border: none;
        border-radius: 12px;
        color: #fff;
        font-size: 1rem;
      }
    }
  }

  .login-bottom {
    margin-top: 28px;
    font-size: 0.95rem;
    color: #bbdefb;
    display: flex;
    justify-content: center;
    gap: 8px;

    a {
      color: #64b5f6;
      font-weight: 600;
    }
  }

  @media (max-width: 480px) {
    .Login-form {
      padding: 36px 24px 32px;
    }

    img {
      width: 150px;
    }
  }
`;

export const LoginMainWrap = styled.div`
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  background: radial-gradient(circle at top, rgba(55, 71, 133, 0.4), transparent);

  .Login-left,
  .Login-right {
    flex: 1 1 50%;
    position: relative;
  }

  .Login-left {
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;

    h2 {
      position: absolute;
      top: 24px;
      left: 24px;
      z-index: 2;
      img {
        width: 200px;
        opacity: 0.5;
        transition: opacity 0.3s ease;
        cursor: pointer;
      }
    }

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(0.85);
    }
  }

  .Login-right {
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 60px 20px;

    .Login-box {
      max-width: 420px;
      width: 100%;
      background: rgba(13, 27, 61, 0.7);
      padding: 48px 40px;
      border-radius: 28px;
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.45);

      h2 {
        color: #e3f2fd;
        font-size: 2.2rem;
        margin-bottom: 20px;
      }

      .description {
        margin-bottom: 36px;
        color: #bbdefb;
        font-size: 1rem;
        line-height: 1.7;
      }

      .button-box {
        display: flex;
        justify-content: center;
        gap: 16px;
        flex-wrap: wrap;
      }

      button {
        width: 180px;
        height: 50px;
        background: none;
        border: 1px solid #e3f2fd;
        color: #e3f2fd;
        border-radius: 14px;
        font-size: 1rem;
        transition: background 0.3s ease, color 0.3s ease;

        &:hover {
          background: #e3f2fd;
          color: #0d1b3d;
        }

        &.secondary {
          background: rgba(227, 242, 253, 0.2);
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .Login-right {
      min-height: auto;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;

    .Login-left,
    .Login-right {
      flex: 1 1 auto;
      width: 100%;
    }

    .Login-left {
      min-height: 360px;
      h2 {
        img {
          opacity: 0.7;
        }
      }
    }

    .Login-right {
      padding: 60px 16px 80px;
    }
  }

  @media (max-width: 480px) {
    .Login-right {
      padding: 48px 16px 72px;

      .Login-box {
        padding: 36px 24px;

        h2 {
          font-size: 1.75rem;
        }

        .description {
          font-size: 0.95rem;
        }

        button {
          width: 100%;
        }
      }
    }
  }
`;

export const LogoutWrap = styled.div`
  .inner {
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    text-align: center;
  }

  h2 {
    font-size: 1.9rem;
    font-weight: 700;
    margin-bottom: 30px;
  }

  h3 {
    margin-bottom: 24px;
    font-size: 1.3rem;
    font-weight: 700;

    span {
      color: tomato;
    }
  }

  p {
    margin-top: 20px;

    button {
      width: 240px;
      height: 54px;
      background: #546e7a;
      color: #fff;
      border: none;
      border-radius: 14px;
      font-size: 1rem;
    }
  }
`;

export const JoinWrap = styled.div`
  .inner {
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 40px;
  }

  form {
    width: min(460px, 100%);
    background: rgba(13, 27, 61, 0.55);
    border-radius: 24px;
    padding: 40px 36px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
  }

  p {
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
      color: #e3f2fd;
      font-weight: 600;
    }

    input[type="email"],
    input[type="password"],
    input[type="tel"],
    input[type="text"] {
      width: 100%;
      box-sizing: border-box;
      height: 52px;
      padding: 0 16px;
      border-radius: 12px;
      border: none;
      background: rgba(227, 242, 253, 0.9);
      color: #0d1b3d;
      font-size: 0.95rem;
    }
  }

  .error {
    padding: 12px 16px;
    border-radius: 12px;
    background: rgba(244, 67, 54, 0.2);
    color: #ff8a65;
    font-size: 0.9rem;
  }

  button {
    width: 200px;
    height: 52px;
    background: #546e7a;
    color: #fff;
    border: none;
    border-radius: 14px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
  }

  .ghost {
    background: transparent;
    border: 1px solid #e3f2fd;
  }

  form > p:last-child {
    margin-top: 12px;
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .login-bottom {
    margin-top: 28px;
    font-size: 0.95rem;
    color: #bbdefb;
    display: flex;
    justify-content: center;
    gap: 8px;

    a {
      color: #64b5f6;
      font-weight: 600;
    }
  }

  @media (max-width: 480px) {
    form {
      padding: 32px 24px;
    }

    button {
      width: 100%;
    }
  }
`;

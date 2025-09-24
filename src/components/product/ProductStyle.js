import styled from "styled-components";

export const ProductSearchWrap = styled.div`
  margin-bottom: 30px;
  position: relative;

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;

    p {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;

      input[type="text"] {
        width: 320px;
        box-sizing: border-box;
        height: 45px;
        padding: 10px 14px;
        background: #e3f2fd;
        border: none;
        color: #000;
        border-radius: 10px;
      }

      button {
        width: 100px;
        height: 45px;
        background: none;
        border: 1px solid #e3f2fd;
        color: #fff;
        border-radius: 10px;
      }

      select {
        width: 200px;
        height: 45px;
        box-sizing: border-box;
        padding: 10px;
        background-color: #e3f2fd;
        border: none;
        color: #000;
        border-radius: 10px;
      }

      span {
        margin-left: 5px;
        cursor: pointer;
        color: #fff;
        font-weight: 500;
      }
    }
  }

  @media (max-width: 900px) {
    form {
      gap: 12px;

      p {
        input[type="text"] {
          width: 260px;
        }
        select {
          width: 180px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    form {
      flex-direction: column;
      align-items: stretch;

      p {
        width: 100%;
        justify-content: flex-start;

        input[type="text"],
        select {
          width: 100%;
          max-width: none;
        }

        button {
          width: auto;
          padding: 0 24px;
        }
      }
    }
  }
`;

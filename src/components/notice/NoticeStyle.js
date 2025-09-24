import styled from "styled-components";

export const NoticeListWrap = styled.div`
  position: relative;

  .table-scroll {
    width: 100%;
    overflow-x: auto;
  }

  .noticeTable {
    width: 100%;
    min-width: 600px;
    color: #e3f2fd;
    border-collapse: collapse;

    caption {
      position: absolute;
      left: -9999px;
      top: -9999px;
    }

    .num {
      width: 10%;
    }

    .title {
      width: auto;
    }

    .date {
      width: 20%;
    }

    th,
    td {
      height: 45px;
      vertical-align: middle;
      border: 1px solid rgba(227, 242, 253, 0.4);
      padding: 0 16px;
    }

    th {
      border-bottom: none;
      font-weight: 700;
      background: rgba(227, 242, 253, 0.9);
      color: #000035;
    }

    td {
      text-align: center;

      &:nth-child(2) {
        text-align: left;
        padding-left: 20px;
      }
    }

    a {
      color: #e3f2fd;
    }
  }

  @media (max-width: 768px) {
    .noticeTable {
      min-width: 520px;

      th,
      td {
        font-size: 0.9rem;
        padding: 0 12px;
      }
    }
  }
`;

export const NoticeDetailWrap = styled.div`
  color: #e3f2fd;

  .inner {
    padding: 100px 0;
  }

  h2 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 50px;
  }

  .con {
    font-size: 20px;
    line-height: 1.7;
    border-top: 1px solid #e3f2fd;
    border-bottom: 1px solid #e3f2fd;
    margin-bottom: 20px;
    padding: 20px 0;

    h3 {
      font-size: 20px;
      font-weight: 500;
      padding-bottom: 15px;
      border-bottom: 1px solid #dcdcdc;
      margin-bottom: 15px;
    }

    .txt {
      font-size: 18px;
      margin-bottom: 15px;
      min-height: 200px;
      white-space: pre-line;
    }

    .date {
      font-size: 16px;
    }
  }

  button {
    width: 200px;
    height: 50px;
    background: none;
    color: #e3f2fd;
    cursor: pointer;
    border: 1px solid #e3f2fd;
    margin-right: 5px;
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    button {
      width: 100%;
      margin: 6px 0;
    }
  }
`;

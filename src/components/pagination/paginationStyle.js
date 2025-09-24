import styled from "styled-components";

export const PaginationWrap = styled.div`
  div {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;

    button {
      border-radius: 8px;
      width: 36px;
      height: 36px;
      border: 1px solid rgba(227, 242, 253, 0.4);
      background: rgba(227, 242, 253, 0.1);
      color: #e3f2fd;
      transition: background 0.3s ease, color 0.3s ease;

      &:first-child,
      &:last-child {
        border: none;
        background: transparent;
        width: auto;
        padding: 0 8px;
        font-size: 1.2rem;
      }

      &.on {
        border-color: #e3f2fd;
        background: #78c0f5;
        color: #001b44;
        font-weight: 700;
      }
    }
  }

  @media (max-width: 480px) {
    div {
      gap: 6px;

      button {
        width: 32px;
        height: 32px;
      }
    }
  }
`;

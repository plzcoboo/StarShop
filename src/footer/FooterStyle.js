import styled from "styled-components";

export const FooterWrap = styled.footer`
  color: #e3f2fd;
  background-color: #213067;
  padding: 60px 0 40px;

  a {
    color: #e3f2fd;
  }

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .menu-social {
    text-align: center;
  }

  .brand-icon {
    display: flex;
    justify-content: center;
    gap: 18px;

    svg {
      font-size: 26px;
    }
  }

  .nav-title {
    margin-bottom: 20px;
    font-weight: 600;
  }

  .copy {
    text-align: center;
    max-width: 960px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    strong {
      font-size: 0.95rem;
    }

    p {
      font-size: 0.85rem;
    }
  }

  .Terms {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px 24px;

    li {
      font-size: 0.85rem;
      text-decoration: underline;
      text-underline-offset: 5px;
      white-space: nowrap;
    }
  }

  @media (max-width: 768px) {
    padding: 48px 0 32px;

    .brand-icon {
      gap: 12px;
    }

    .copy {
      gap: 12px;
      strong {
        font-size: 0.9rem;
      }
    }

    .Terms {
      gap: 10px 16px;
      li {
        font-size: 0.8rem;
      }
    }
  }

  @media (max-width: 480px) {
    .brand-icon {
      flex-wrap: wrap;
    }

    .Terms {
      flex-direction: column;
      align-items: center;
    }
  }
`;

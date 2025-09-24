import styled from "styled-components";

export const HeaderWrap = styled.header`
  background: #213067;
  color: #e3f2fd;
  position: sticky;
  top: 0;
  z-index: 50;
  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    gap: 32px;
  }
  h1 {
    margin: 0;
    a {
      display: inline-flex;
      align-items: center;
      img {
        width: 120px;
      }
    }
  }

  @media (max-width: 1024px) {
    .inner {
      height: 72px;
    }
  }

  @media (max-width: 768px) {
    .inner {
      flex-wrap: wrap;
      gap: 12px;
      padding: 12px 0;
      height: auto;
    }
    h1 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export const NavWrap = styled.nav`
  &.nav {
    margin-left: auto;
    display: flex;
    align-items: center;
    position: relative;
    color: #e3f2fd;

    .menu-toggle {
      display: none;
      align-items: center;
      justify-content: center;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      border: 1px solid rgba(227, 242, 253, 0.2);
      background: transparent;
      color: inherit;
      font-size: 1.6rem;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    ul {
      display: flex;
      align-items: center;
      gap: 32px;
      list-style: none;
      margin: 0;
      padding: 0;
      z-index: 10;
    }

    li {
      position: relative;
      font-size: 0.95rem;
      font-weight: 500;
      a {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: inherit;
        transition: color 0.3s ease;

        &.active,
        &:hover {
          color: #90caf9;
        }
      }

      &.welcome {
        font-size: 0.85rem;
        color: #bbdefb;
      }

      &.cart {
        a {
          position: relative;
        }
        .count {
          position: absolute;
          top: -6px;
          right: -12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          font-size: 0.75rem;
          border-radius: 999px;
          background: #90caf9;
          color: #0d1b3d;
          font-weight: 700;
        }
      }
    }

    @media (max-width: 1024px) {
      ul {
        gap: 20px;
      }
    }

    @media (max-width: 768px) {
      width: 100%;
      justify-content: flex-end;

      .menu-toggle {
        display: inline-flex;
      }

      ul {
        position: absolute;
        right: 0;
        top: calc(100% + 12px);
        flex-direction: column;
        align-items: flex-start;
        background: rgba(13, 27, 61, 0.95);
        border-radius: 16px;
        padding: 20px;
        gap: 16px;
        width: min(260px, 100vw - 32px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        opacity: 0;
        pointer-events: none;
        transform: translateY(-10px);
        transition: opacity 0.3s ease, transform 0.3s ease;
      }

      &.open ul {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
      }

      li {
        width: 100%;
        a {
          width: 100%;
        }
        &.cart {
          width: auto;
        }
      }
    }

    @media (max-width: 480px) {
      ul {
        padding: 16px;
        gap: 12px;
      }
      .menu-toggle {
        width: 36px;
        height: 36px;
        font-size: 1.4rem;
      }
    }
  }
`;

export const TopMenu = styled.ul`
  &.top-menu {
    position: absolute;
    right: 0;
    top: 10px;
    display: flex;
    li {
      margin-left: 25px;
      a {
        font-size: 15px;
      }
    }
  }
`;

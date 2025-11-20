import styled from "styled-components";

export const CustomDropdown = styled.div`
  font-family: "Inter", sans-serif;

  .dropdown {
    display: inline-block;
  }

  /* Neutral button for white header */
  .dropdown-toggle {
    background: #f7f7f7;
    border: 1px solid #dcdcdc;
    color: #333;
    border-radius: 8px;
    padding: 8px 16px;
    font-weight: 500;
    font-size: 15px;
    transition: background 0.2s ease, border 0.2s ease;
  }

  .dropdown-toggle:hover,
  .dropdown-toggle:focus {
    background: #ececec;
    border-color: #cfcfcf;
    color: #111;
  }

  .dropdown-menu {
    background: ${({ theme }) => theme.colors.light};
    border-radius: 10px;
    padding: 6px 0;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
    border: none;
  }

  .dropdown-item {
    padding: 10px 18px;
    font-size: 15px;
    color: #444;
    border-radius: 6px;
    transition: 0.15s ease;
  }

  .dropdown-item:hover {
    background: ${({ theme }) => theme.colors.orangeLight};
    color: #fff;
  }
`;
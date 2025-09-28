import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  border-radius: 9999px;
  cursor: pointer;
  font-family: sans-serif;

  /* spacing */
  padding: 0.5rem 0.75rem; 

  /* Size variants */
  ${(props) =>
    props.size === "sm" &&
    css`
      font-size: 0.875rem;
    `}

  ${(props) =>
    props.size === "base" &&
    css`
      font-size: 1rem; 
    `}

  /* Variant styles */
  ${(props) =>
    props.variant === "default" &&
    css`
      background-color: #e5e7eb; 
      color: #374151; 
      border: none;
    `}

  ${(props) =>
    props.variant === "follow" &&
    css`
      background-color: #fff;
      color: #000;
      border: 1px solid #000;
      padding: 0.5rem 1rem;
    `}
`;

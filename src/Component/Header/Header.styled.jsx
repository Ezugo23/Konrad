import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1.75rem;
  max-width: 56rem;
  padding-left: 1.75rem;

  @media (min-width: 640px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media (min-width: 768px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media (min-width: 1024px) {
    padding-left: 8rem;
    padding-right: 8rem;
  }
`;

export const TopBar = styled.div`
  display: flex;
  gap: 1.25rem;
  border-bottom: 1px solid #e5e7eb;
  font-size: 0.875rem; 

  @media (min-width: 640px) {
    font-size: 1rem; 
  }

  @media (min-width: 768px) {
    font-size: 1.125rem; 
  }
`;

export const TabActive = styled.p`
  font-family: sans-serif;
  border-bottom: 4px solid black;
  margin-bottom: -2px; 
  padding-bottom: 0.5rem; 
  letter-spacing: normal;
`;

export const Tab = styled.p`
  font-family: sans-serif;
  color: #6b7280; 
  cursor: pointer;
  padding-bottom: 0.5rem;
  letter-spacing: normal;
  transition: color 0.2s ease;

  &:hover {
    color: black;
  }
`;
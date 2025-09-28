import styled from "styled-components";

export const HeaderWrapper = styled.div`
  margin-top: -10px;
  padding: 0 1.25rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;

  .icon {
    height: 1.5rem;
    width: 1.5rem;
    color: #9ca3af;
  }
`;

export const Title = styled.p`
  margin-left: 0.75rem;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 1rem;

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  margin-left: 10px;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 0.80rem;
  height: 1.25rem;
  width: 1.25rem;
  color: #9ca3af;
`;

export const SearchInput = styled.input`
  padding: 1rem 1rem;
  padding-left: 2.5rem;
  border-radius: 9999px;
  background-color: #f3f4f6; 
  color: #374151;
  outline: none;
  border: none;

  &::placeholder {
    color: #9ca3af; 
  }
`;

export const MobileSearchIcon = styled.div`
  margin-left: 1rem;
  margin-top: 0.60rem;

  @media (min-width: 768px) {
    display: none;
  }

  /* Move search beside profile on small screens */
  @media (max-width: 767px) {
    order: 1;
    margin-top: 0;
  }
`;

export const RightSection = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 1.25rem;

   @media (max-width: 767px) {
    gap: 0.5rem; 
  }
`;

export const WriteButton = styled.button`
  display: none;
  align-items: center;
  gap: 0.25rem;
  color: #374151;
  font-size: 0.875rem;
  font-family: sans-serif;
  cursor: pointer;
  background: transparent; 
  border: none;          
  padding: 0;  

  &:hover {
    color: black;
  }

  span {
    color: #374151; 
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const BellWrapper = styled.div`
  position: relative;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const NotificationDot = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 9999px;
  background-color: #ef4444; 
`;

export const ProfileAvatar = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 9999px;
  background-color: #1f2937; 

  @media (max-width: 767px) {
  order: 2;
  }
`;
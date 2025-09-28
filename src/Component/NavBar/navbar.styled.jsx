import styled from "styled-components";

export const HeaderWrapper = styled.div`
  margin-top: 0.5rem;
  padding: 0 1.25rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.5rem;

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
  margin-left: 1.5rem;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }

  .search-icon {
    position: absolute;
    left: 0.75rem;
    top: 0.65rem;
    height: 1.25rem;
    width: 1.25rem;
    color: #9ca3af;
  }
`;

export const SearchInput = styled.input`
  padding: 0.5rem 1rem;
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

  @media (min-width: 768px) {
    display: none;
  }
`;

export const RightSection = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const WriteButton = styled.button`
  display: none;
  align-items: center;
  gap: 0.25rem;
  color: #374151;
  font-size: 0.875rem;
  font-family: sans-serif;
  cursor: pointer;

  &:hover {
    color: black;
  }

  span {
    color: #9ca3af; 
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const BellWrapper = styled.div`
  position: relative;
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
`;
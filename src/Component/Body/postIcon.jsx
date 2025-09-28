import styled from "styled-components";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

// Emoji component
const StyledEmoji = styled.span`
  display: inline-block;
  filter: ${({ dark }) => (dark ? "grayscale(100%) brightness(50%)" : "grayscale(100%)")};
  font-size: 0.75rem;

  @media (min-width: 640px) {
    font-size: 0.875rem;
  }
`;

export const Emoji = ({ symbol, count, dark = false }) => (
  <StyledEmoji dark={dark}>
    {symbol} {count}
  </StyledEmoji>
);

// Right side icons container
const RightIconsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  
  padding-left: 1.5rem;

  svg {
    height: 1.25rem;
    width: 1.25rem;
    color: #6b7280;
    margin-left: auto;
  }
`;

export const RightIcons = () => (
  <RightIconsContainer>
    <Emoji symbol="⛔" />
    <BookmarkIcon />
    <EllipsisHorizontalIcon />
  </RightIconsContainer>
);

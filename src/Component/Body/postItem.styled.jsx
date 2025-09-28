import styled from "styled-components";

// Container for the whole post item
export const PostContainer = styled.div`
  border-bottom: 1px solid #d1d5db; // tailwind gray-300
  padding-bottom: 0.5rem;
`;

// Top tag + subtitle container
export const TopInfo = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
`;

// Tag pill
export const Tag = styled.p`
  display: inline-flex;
  align-items: center;
  border-radius: 0.25rem;
  img {
    width: 2rem;   // small image
    height: 2rem;  // keep square
    object-fit: cover;
    border-radius: 0.25rem;
  }
`;

// Subtitle text
export const Subtitle = styled.p`
  color: #6b7280; // gray-500
  font-family: sans-serif;
  font-size: 0.75rem; // xs
  @media (min-width: 640px) {
    font-size: 0.875rem; // sm
  }
`;

// Body content container
export const BodyContent = styled.div`
  display: flex;
  gap: 1rem;
`;

// Left text container
export const TextContainer = styled.div`
  flex: 1;
`;

// Title text
export const Title = styled.p`
  color: black;
  font-family: sans-serif;
 font-size: 0.875rem;
font-weight: 800; 
line-height: 1.5;

@media (min-width: 640px) {
  font-size: 1rem;
}

@media (min-width: 768px) {
  font-size: 1.125rem;
}
`;

// Subtitle under title
export const BodySubtitle = styled.p`
  color: #6b7280;
  font-family: sans-serif;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  line-height: 1.25;
  @media (min-width: 640px) {
    font-size: 0.75rem;
  }
  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

// Image container
export const ImageWrapper = styled.div`
  margin-right: 11px;
 
  img {
    width: 5rem;
    height: 4rem;
    object-fit: cover;
    margin-top: 10%;
    border-radius: 0.25rem;
    

    @media (min-width: 640px) {
      width: 8rem;
      height: 6rem;
       
    }
    @media (min-width: 768px) {
      width: 10rem;
      height: 7rem;
    }
  }
`;

// Bottom icons row
export const IconsRow = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 0.75rem;
`;


export const RightIconsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-left: 28%;

  @media (max-width: 640px) {
    margin-left: auto;
    padding-right: 20px
  }
`;

export const ClappedText = styled.p`
  font-family: sans-serif;
  font-size: 0.75rem;
  color: #374151;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  span {
    font-weight: 600;
    color: black;
  }
`
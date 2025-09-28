
import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 1.75rem;
  padding-right: 1.5rem; 
  display: none;

  @media (min-width: 768px) {
    display: block; 
  }

  font-family: sans-serif;
`;

export const SectionTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #000;
  margin-top: ${(p) => p.mt || "0"};
`;

export const Flex = styled.div`
  display: flex;
  gap: ${(p) => p.gap || "0"};
  margin-top: ${(p) => p.mt || "0"};
  align-items: center;
`;

export const AvatarSmall = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  background-color: #e5e7eb;
  padding: 0.25rem;
  border-radius: 0.25rem;
`;

export const AvatarSmallRounded = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.25rem;
  background-color: #e5e7eb;
  margin-bottom: 20%;
`;

export const AvatarMedium = styled.img`
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
`;

export const AvatarMed = styled.img`
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  margin-bottom: 12%;
`;

export const AvatarLarge = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

export const AvatarXl = styled.img`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  margin-bottom: 10%;
`;

export const BoldText = styled.p`
  font-size: 0.875rem;
  font-weight: bold;
  color: #000;
  margin-top: ${(p) => p.mt || "0"};
`;

export const MediumText = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  color: #1f2937;
  margin-top: ${(p) => p.mt || "0"};
`;

export const SmallText = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
  font-weight: 500;
  margin-top: ${(p) => p.mt || "0"};

  .highlight {
    color: #1f2937;
    font-weight: 500;
  }
`;

export const NameText = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #000;
`;

export const MutedText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: ${(p) => p.mt || "0"};
`;

export const FooterText = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: ${(p) => p.mt || "0"};
`;

export const FollowRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
`;
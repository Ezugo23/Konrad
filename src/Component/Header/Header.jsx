import Body from "../Body/Body";
import { Container, TopBar, TabActive, Tab } from "./Header.styled";

export default function BodyWrapper() {
  return (
    <Container>
      {/* Top */}
      <TopBar>
        <TabActive>For You</TabActive>
        <Tab>Featured</Tab>
      </TopBar>

      <Body />
    </Container>
  );
}
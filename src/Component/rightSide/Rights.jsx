import {
  Wrapper,
  SectionTitle,
  Flex,
  AvatarSmall,
  AvatarSmallRounded,
  AvatarMedium,
  AvatarMed,
  AvatarLarge,
  AvatarXl,
  BoldText,
  MediumText,
  SmallText,
  NameText,
  MutedText,
  FooterText,
  FollowRow,
} from "./Right.styled";

import Mk from "../../assets/mk.jpg";
import Smile from "../../assets/smile.jpg";
import Beards from "../../assets/beards.jpg";
import Shade from "../../assets/Shade.jpg";
import Luffy from "../../assets/Luffy.jpg";
import Twitter from "../../assets/twitter.jpg";
import FourPointStar from "../icons/fourPointStar";
import Button from "./Button";
import { BookmarkIcon } from "@heroicons/react/24/outline";

export default function Right() {
  return (
    <Wrapper>
      <SectionTitle>Staff Picks</SectionTitle>

      <Flex gap="8px" mt="16px">
        <AvatarSmall src={Mk} alt="" />
        <SmallText>
          In <span className="highlight">The Medium Handbook</span> by{" "}
          <span className="highlight">Zulie @ Medium</span>
        </SmallText>
      </Flex>

      <BoldText mt="12px">
        How this brand strategist uses Medium to explore ideas, repurpose
        content, and land clients
      </BoldText>
      <MutedText mt="12px">2d ago</MutedText>

      <Flex gap="8px" mt="28px">
        <AvatarMedium src={Shade} alt="" />
        <MediumText>Jud Brewer MD PhD</MediumText>
      </Flex>

      <BoldText mt="12px">
        From "I Have To" to "I Get To": How One Word Change Rewires Your Brain
      </BoldText>

      <Flex gap="16px" mt="12px">
        <FourPointStar size={20} filled />
        <MutedText>2d ago</MutedText>
      </Flex>

      <Flex gap="8px" mt="28px">
        <AvatarLarge src={Smile} alt="" />
        <MediumText>Linh Nguyen</MediumText>
      </Flex>

      <BoldText mt="12px">Golden Design Lessons from Tokyo Metro</BoldText>
      <MutedText mt="12px">2d ago</MutedText>

      <MutedText mt="12px">See the full list</MutedText>

      <SectionTitle mt="24px">Recommended topics</SectionTitle>

      <Flex gap="12px" mt="20px">
        <Button label="Data Science" size="sm" />
        <Button label="Mental Health" size="sm" />
        <Button label="Productivity" size="sm" />
      </Flex>

      <Flex gap="12px" mt="8px">
        <Button label="React" size="base" />
        <Button label="Coding" size="base" />
        <Button label="Python" size="base" />
        <Button label="UX" size="base" />
      </Flex>

      <MutedText mt="16px">See more topics</MutedText>

      <SectionTitle mt="24px">Who to follow</SectionTitle>

      <FollowRow>
        <Flex gap="4px">
          <AvatarXl src={Beards} alt="" />
          <div>
            <NameText>Dr. Derek Austin 🥳</NameText>
            <SmallText>
              Al Context Engineer - I teach LLMs to think - Full.
            </SmallText>
          </div>
        </Flex>
        <Button label="Follow" variant="follow" />
      </FollowRow>

      <FollowRow>
        <Flex gap="12px">
          <AvatarSmallRounded src={Twitter} alt="" />
          <div>
            <NameText>ITNEXT</NameText>
            <MediumText>Publication</MediumText>
            <SmallText mt="8px">
              ITNEXT is a platform for IT developers & software ...
            </SmallText>
          </div>
        </Flex>
        <Button label="Follow" variant="follow" />
      </FollowRow>

      <FollowRow>
        <Flex gap="4px">
          <AvatarMed src={Luffy} alt="" />
          <div>
            <NameText>Oliver Foster</NameText>
            <SmallText>
              Primarily proficient in the Java programming ...
            </SmallText>
          </div>
        </Flex>
        <Button label="Follow" variant="follow" />
      </FollowRow>

      <MutedText>See more suggestions</MutedText>

      <SectionTitle style={{marginTop:'20px'}}>Reading list</SectionTitle>
      <SmallText>
        Click <BookmarkIcon style={{width:'3%', height:'4%', display:'inline'}} /> on any story to easily
        add it to your reading list or a custom list that you can share.
      </SmallText>

      <FooterText>
        Help Status About Careers Press Blog Privacy Rules just one word Terms
        Text to speech.
      </FooterText>
    </Wrapper>
  );
}

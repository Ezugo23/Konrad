import FourPointStar from '../icons/fourPointStar'
import { Emoji, RightIcons } from './postIcon'
import {
  PostContainer,
  TopInfo,
  Tag,
  Subtitle,
  BodyContent,
  TextContainer,
  Title,
  BodySubtitle,
  ImageWrapper,
  IconsRow,
  RightIconsWrapper
} from './postItem.styled'

export default function PostItem({ post }) {
  if (!post) return null;

  return (
    <PostContainer>
      {/* Top tag + subtitle */}
      <TopInfo>
        <Tag>
          <img src={post.tag} alt={post.tag} />
        </Tag>
        <Subtitle>
          In <span style={{ color: 'black' }}>{post.topic}</span> by <span style={{ color: 'black' }}>{post.author}</span>
        </Subtitle>
      </TopInfo>

      {/* Body content */}
      <BodyContent>
        <TextContainer>
          <Title>{post.title}</Title>
          <BodySubtitle>{post.subtitle}</BodySubtitle>
        </TextContainer>
        <ImageWrapper>
          <img src={post.image} alt={post.title} />
        </ImageWrapper>
      </BodyContent>

      {/* Icons & Emoji Line */}
      <IconsRow>
        <FourPointStar size={18} filled />
        <span style={{ fontSize: '0.75rem' }}>{post.timeAgo}</span>
        <Emoji symbol="👋" count={post.handClaps} dark />
        <Emoji symbol="💬" count={post.comments} />
         <RightIconsWrapper>
    <RightIcons />
  </RightIconsWrapper>
      </IconsRow>
    </PostContainer>
  )
}
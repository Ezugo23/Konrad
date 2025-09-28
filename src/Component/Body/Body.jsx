import Hire from '../../assets/hire.jpg'
import Lego from '../../assets/Lego.jpg'
import Road from '../../assets/road.jpg'
import Java from '../../assets/java.jpg'
import Genie from '../../assets/ginie.jpg'
import Pass from '../../assets/7be96c2f-42f1-43b3-bea9-b5ea767c03ea.jpg'
import Avatar from "../../assets/download (2).jpg"
import Chem from "../../assets/download (1).jpg"
import Code from "../../assets/code.jpg"
import Lab from "../../assets/lab.jpg"
import PostItem from './postItem'
import { ClappedText } from './postItem.styled'
import { Emoji } from './postIcon'

const posts = [
  {
    id: "1",
    tagColor: "bg-pink-500",
    tag: Lab,
    topic: "Language Lab",
    title: "How Knowledge of Languages Is More Valuable Than Ever on the Job Market",
    subtitle: "It's not a skill issue, but a marketing issue",
    author: "Trey Huffine",
    image: Hire,
    timeAgo: "5d ago",
    handClaps: "1.2k",
    comments: 45,
  },
  {
    id: "2",
    tagColor: "bg-blue-900",
    tag: Code,
    topic: "Level Up Coding",
    title: "Welcome To Dream-Driven Development See the full list Where Nothing Works",
    subtitle: "Half-baked diagrams, features that make no sense, Mikado architecture. You've seen it, you've lived it, and it has a name ..",
    author: "Attila Vago",
    image: Lego,
    timeAgo: "4d ago",
    handClaps: "709k",
    comments: 16,
  },
    {
    id: "3",
    tagColor: "bg-blue-900",
    tag: Pass,
    topic: "Predict",
    title: "Future-Proof Careers in the Age of Al: What You Should Learn in 2026",
    subtitle: "What if I told you that by this time next year, you could land a job that pays over $100,000-and it won't be threatened by Al?",
    author: "iswarya writes",
    image: Road,
    timeAgo: "jul 30",
    handClaps: "3.7k",
    comments: 165,
  },
    {
    id: "4",
    tagColor: "bg-blue-900",
    tag: Avatar,
    topic: "Clean Compiler",
    title: "10 Java Collections Tricks Only Seniors Know",
    subtitle: "If you've been coding in Java for a while, you probably use List, Set, and Map every single day. But here's the thing: most ...",
    author: "Paschal",
    image: Java,
    timeAgo: "3d ago",
    handClaps: "52k",
    comments: 5,
  },
    {
    id: "5",
    tagColor: "bg-blue-900",
    tag: Chem,
    topic: "The Generator",
    title: "Want to see how insanely stupid Al really is? Ask ChatGPT to answer these riddles in just one word",
    subtitle: "Limiting output length reveals Al isn't intelligent-it's chatty!",
    author: "Jim the Al",
    image: Genie,
    timeAgo: "3d ago",
    handClaps: "2k",
    comments: 36,
  },
]

export default function Body() {
  return (
    <>
      {posts.map((post, index) => (
        <div key={index}>
          <PostItem post={post} />
          
          {/* Clapped text only for first post, outside the container */}
          {post.id === "1" && (
            <ClappedText>
              <Emoji symbol="👋" dark /> <span>Trey Iwu</span> Clapped
            </ClappedText>
          )}
        </div>
      ))}
    </>
  )
}

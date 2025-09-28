import { Bars3Icon, MagnifyingGlassIcon, PencilSquareIcon } from '@heroicons/react/24/solid'
import { BellIcon } from '@heroicons/react/24/outline'
import {
  HeaderWrapper,
  Title,
  SearchWrapper,
  SearchInput,
  MobileSearchIcon,
  RightSection,
  WriteButton,
  BellWrapper,
  SearchIcon,
  NotificationDot,
  ProfileAvatar,
} from './navbar.styled'

export default function navbar() {
  return (
    <HeaderWrapper>
      {/* Menu Icon */}
      <Bars3Icon className="icon" />

      {/* Title */}
      <Title>Medium</Title>

      {/* Search Input (desktop only) */}
      <SearchWrapper>
        <SearchIcon as={MagnifyingGlassIcon} />
        <SearchInput type="text" placeholder="Search" />
      </SearchWrapper>

      {/* Search Icon (mobile only) */}
      

      {/* Right Section */}
      <RightSection>
        {/* Write button (desktop only) */}
        <WriteButton>
          <PencilSquareIcon className="icon" />
          <span>Write</span>
        </WriteButton>

        {/* Notification Bell */}
        <BellWrapper>
          <BellIcon className="icon" />
          <NotificationDot />
        </BellWrapper>

         <MobileSearchIcon>
    <MagnifyingGlassIcon className="icon" />
        </MobileSearchIcon>

        {/* Avatar */}
        <ProfileAvatar
          alt="Profile"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?
          ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
      </RightSection>
    </HeaderWrapper>
  )
}
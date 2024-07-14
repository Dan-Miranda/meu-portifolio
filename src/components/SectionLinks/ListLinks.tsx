import { useSectionLinksContext } from '../../context/SectionLinkContext'
import { linksSections } from '../../sections/linksSections'
import { NavLink } from '../NavLink'

export function ListLinks() {
  const links = linksSections
  const { handleToggle } = useSectionLinksContext()
  return (
    <>
      {links.map((link) => <NavLink key={link.name} link={link} handleToggle={handleToggle}/>)}
    </>
  )
}

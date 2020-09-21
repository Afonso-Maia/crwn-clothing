import React from 'react'

// PRESENTATIONAL - LAYOUT COMPONENTS
import StyledHomepage from '@styled/StyledHomepage'
import StyledDirectoryMenu from '@styled/StyledDirectoryMenu'

// FUNCTIONAL - LOGIC COMPONENTS
import MenuItem from '@components/MenuItem'

// DATA
import { useSelector } from 'react-redux'
import { selectSections } from '@redux/directory/directory.selectors'

const HomePage = () => {
  const sections = useSelector(selectSections)

  return (
    <StyledHomepage>
      <StyledDirectoryMenu>
        {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
          <MenuItem
            key={id}
            title={title.toUpperCase()}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
          />
        ))}
      </StyledDirectoryMenu>
    </StyledHomepage>
  )
}

export default HomePage

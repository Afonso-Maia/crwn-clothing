import React from 'react'

// PRESENTATIONAL - LAYOUT COMPONENTS
import StyledHomepage from '@styled/StyledHomepage'
import StyledDirectoryMenu from '@styled/StyledDirectoryMenu'

// FUNCTIONAL - LOGIC COMPONENTS
import MenuItem from '@components/MenuItem'

// DATA
import SECTIONS_DATA from '@data/sections.data'

const HomePage = () => {
  return (
    <StyledHomepage>
      <StyledDirectoryMenu>
        {SECTIONS_DATA.map(({ title, imageUrl, id, size }) => (
          <MenuItem
            key={id}
            title={title.toUpperCase()}
            imageUrl={imageUrl}
            size={size}
          />
        ))}
      </StyledDirectoryMenu>
    </StyledHomepage>
  )
}

export default HomePage

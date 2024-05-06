import React from 'react'
import './style.css'
import { SKIP_MSG } from '../../helper/constants'

const SkipLinks: React.FC = () => {
  return (
    <>
      <a href="#main-content" className="skip-link">{SKIP_MSG}</a>
    </>
  )
}

export default React.memo(SkipLinks)
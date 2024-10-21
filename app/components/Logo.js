'use client'

import { useEffect } from 'react'
import Vara from 'vara'

export default function Logo({ children, className, config }) {
  useEffect(() => {
    var vara = new Vara('#vara-container', 'https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json', [config])
  }, [])

  return <div id='vara-container' className={`z-[20] ${className}`}></div>
}

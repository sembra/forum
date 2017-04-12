import React from 'react'
import Link from 'next/link'

import indexCSS from './index.scss'

export default () =>
  <div>
    <style dangerouslySetInnerHTML={{ __html: indexCSS }} />
    <p>ciao</p>
    <ul>
      <li><Link href='/a' >a</Link></li>
    </ul>
  </div>

import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { getUrlData } from 'zzy-javascript-devtools'

import './index.css'
// HOOK写法
function Page() {
  // eslint-disable-next-line no-unused-vars
  const [pageData, setPageData] = useState(null)
  useEffect(() => {
    let url = window.location.href
    console.log(url)
    // let url ='http://localhost:3000/?token=123&top=20'
    let { token } = getUrlData(url)
    console.log(token);
  }, [])

  return <div id="homePage_wrap">hello,zzy</div>
}

export default withRouter(Page)

import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'
function Error() {
  return (
    <Wrapper className="full-name">
      <div>
        <img src={img} alt="not found" />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you're Looking for</p>
        <Link to={'/'}>back home</Link>
      </div>
    </Wrapper>
  )
}

export default Error

import React from "react";
import { Link } from "react-router-dom"

const SignUp = () => {
  return(
<div className="signup">
  <Link to="/signup">
  <button>SignUp</button>
  </Link>
</div>
  )
}

export default SignUp;
import {Link, Outlet} from "react-router-dom";

// TODO: DOC SUR CE QU'EST UN OUTLET: https://reactrouter.com/docs/en/v6/components/outlet

export default function OutletExample () {
  return (
    <div>
      <h1>Dashboard, ceci reste peu importe la route</h1>
      <nav>
        <Link to='/outlet/message'>Message</Link>
        <Link to='/outlet/no_message'>No Message</Link>
      </nav>
      <Outlet />
    </div>
  )
}
import React from "react"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import { Link } from "react-router-dom"
import { MenuList, MenuItem } from "@material-ui/core"
import { compose } from "recompose"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"
import { DashboardTwoTone, GridOn } from "@material-ui/icons"

export function NavLinks(props) {
  const {
    location: { pathname },
  } = props

  return (
    <MenuList>
      <MenuItem component={Link} to="/" selected={"/" === pathname}>
        <ListItemIcon>
          <DashboardTwoTone />
        </ListItemIcon>
        Dashboard
      </MenuItem>
      <MenuItem component={Link} to="/table" selected={"/table" === pathname}>
        <ListItemIcon>
          <GridOn />
        </ListItemIcon>
        Table
      </MenuItem>
    </MenuList>
  )
}

export default compose(withRouter)(NavLinks)

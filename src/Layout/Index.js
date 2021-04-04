import React from "react"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import CssBaseline from "@material-ui/core/CssBaseline"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import Hidden from "@material-ui/core/Hidden"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Toolbar from "@material-ui/core/Toolbar"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import NavLinks from "./NavLinks"
import logo from "../logo.png"
import SearchInput from "../UI/SearchInput"
import AccountMenu from "../UI/AccountMenu"
import MessageMenu from "../UI/MessageMenu"

const drawerWidth = 220

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up("lg")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  headerToolbar: {
    justifyContent: "space-between",
  },
  toolbar: theme.mixins.toolbar,
  logoContainer: {
    alignItems: "center",
    display: "flex",
    padding: theme.spacing(1),
    height: 63,
  },
  logo: {
    width: "100%",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
  },
  menu: {
    display: "flex",
  },
}))

function ResponsiveDrawer(props) {
  const { window, children } = props
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <div className={(classes.toolbar, classes.logoContainer)}>
        <img src={logo} />
      </div>
      <Divider />
      <NavLinks />
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.headerToolbar}>
          <div className={classes.headerLeft}>
            <Hidden mdDown implementation="css">
              <img src={logo} />
            </Hidden>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Hidden implementation="css" xsDown>
              <SearchInput />
            </Hidden>
          </div>
          <div className={classes.menu}>
            <MessageMenu />
            <AccountMenu />
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  )
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
}

export default ResponsiveDrawer

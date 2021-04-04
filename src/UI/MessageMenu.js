import {
  Badge,
  Button,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@material-ui/core"
import { MessageSharp } from "@material-ui/icons"
import React from "react"
import Avatar from "@material-ui/core/Avatar"
import clsx from "clsx"

const useStyles = makeStyles(theme => ({
  menu: {
    maxWidth: 280,
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
  button: {
    width: "100%",
  },
  buttonBottom: {
    marginTop: theme.spacing(2),
  },
  buttonTop: {
    marginBottom: theme.spacing(2),
  },
}))

export default function MessageMenu() {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        aria-label="message"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <Tooltip title="555 unread message">
          <Badge max={99} badgeContent={555} color="secondary">
            <MessageSharp />
          </Badge>
        </Tooltip>
      </IconButton>
      <Menu
        className={classes.menu}
        id="menu-message"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        <Button
          className={clsx(classes.button, classes.buttonTop)}
          color="secondary"
        >
          Mark all as read
        </Button>
        <MenuItem>
          <Avatar className={classes.avatar} src="/img/1.jpg" />
          <Typography variant="inherit" noWrap>
            A very long text that overflows
          </Typography>
        </MenuItem>
        <MenuItem>
          <Avatar className={classes.avatar} src="/img/2.jpg" />
          <Typography variant="inherit" noWrap>
            A long text that overflows
          </Typography>
        </MenuItem>
        <MenuItem>
          <Avatar className={classes.avatar} src="/img/3.jpg" />
          <Typography variant="inherit" noWrap>
            A Tiny text
          </Typography>
        </MenuItem>
        <Button
          className={clsx(classes.button, classes.buttonBottom)}
          color="secondary"
        >
          See all
        </Button>
      </Menu>
    </>
  )
}

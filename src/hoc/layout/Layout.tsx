import React from 'react'

import Header2 from '../../shared/header/Header'
import Navigation2 from '../../shared/navigation/Navigation'

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Layout2(props: any) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    return (
        <>
            <div className={classes.root}>
                <CssBaseline />
                <Header2 openDrawer = {handleDrawerOpen} open={open} />
                <Navigation2 closeDrawer = {handleDrawerClose} open={open} />
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {props.children}
                </main>
            </div>
        </>
    )
}

export default Layout2;

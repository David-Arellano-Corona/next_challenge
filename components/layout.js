
import { AppBar, Toolbar, Typography, IconButton, Collapse } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';
import Link from 'next/link'
import styles from  './Layout.module.css';


export default function Layout({children,alert, setAlert, messageAlert, setMessageAlert}){
    
    return(
        <div className={styles.layout} >
            <div className={styles.layoutMenu} >
                <AppBar  >
                    <Toolbar>
                        <Typography className={styles.layoutItem} >
                            <Link href="/store" >Store</Link>
                        </Typography>
                        <Typography className={styles.layoutItem} >
                            <Link href="/davidarellanocorona" >David Arellano Corona</Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            
            <div className={styles.layoutContent} >
                {children}
            </div>
            <Collapse in={alert} className={styles.layoutAlert} >
            <Alert
            severity={messageAlert.type}
            action={
                <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                    setAlert(false);
                }}
                >
                <CloseIcon fontSize="inherit" />
                </IconButton>
            }
            >
            {messageAlert.message}
            </Alert>
            </Collapse>
        </div>
    )
}
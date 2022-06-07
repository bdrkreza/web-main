import React from 'react';
import {Grid, Container,makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    headings:{
        color: '#f06424'
    },
    sales:{
        fontSize: '1.8rem',
        // fontWeight: '200'
    },
    bestcars:{
        color: '#24d1f0',
        marginBlockStart: '0px',
        marginInlineEnd: '0px',
        marginBlockEnd: '0px',
        fontSize: '2rem',
        fontWeight: '1400'
    },
    issue:{
        marginBlockStart: '0px', 
        fontWeight: '2000', 
        fontSize: '2.2rem',
        marginBlockEnd: '0px'
    },
    pay:{
        marginBlockStart: '0px',
        marginBlockEnd: '0px'
    },
    zero:{
        color: '#24d1f0',
        fontSize: '8rem'
    }
})

function BhaloWarrenty() {
    
    const classes = useStyles();

    return (
        <Container maxWidth="lg"  style={{ border: '1px solid black', fontFamily: 'Open Sans'}}>
             <Grid container>

                 <Grid item xs={12} lg={12}>
                     <h1 className={classes.sales}>Bhalogari after-sales <span className={classes.headings}>warranty</span></h1>
                 </Grid>

                 <Grid item style={{ width: "50%", borderRight: '1px solid black'}}>

                     {/* Best Cars, Guaranteed!
                        If you get the smallest issues,
                        You Pay 0 Taka */}
                     <Grid container>
                         <Grid item lg={12} style={{}}>
                             <h3 className={classes.bestcars}>Best Cars, Guaranteed!</h3>
                             <h1 className={classes.issue}>
                                 If you get the smallest issue,
                             </h1>
                             <h1>
                                You Pay <span className={classes.zero}>0</span> Taka
                             </h1>
                         </Grid>
                         
                     </Grid>

                 </Grid>

             </Grid>
        </Container>
    )
}

export default BhaloWarrenty

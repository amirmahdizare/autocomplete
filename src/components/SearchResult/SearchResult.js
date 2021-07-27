import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';    
import Grid from '@material-ui/core/Grid'
const useStyles = makeStyles({
        root: {
          margin:'  1em 0 1em 0 ',
         maxHeight:'300px'

        },
        content:{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
          padding:'10px'
          // height:'inherit'
        },
        media: {
          // height:'200px',
          //  width:'200px',
           padding:'10px'
        },
      });

const  SearchResult = (props)  =>{
    const classes = useStyles();
console.log(props)
    const boldSearchedWord = () =>{
      console.log(props.title.replace(props.searchedWord,"SSS"))
      const a= <b>props.searchedWord</b>
        return props.title.replace(props.searchedWord,`<b>${props.searchedWord}</b>`)
    }
    return (
        <Card className={classes.root}>
        <Grid container xs={12} >
          <Grid xs={4}   >
            <img style={{maxHeight:'200px',width:'100%'}} src={props.image}/>
          </Grid>
          <Grid xs={8} >
          <Typography  gutterBottom variant="h5" component="h3" dangerouslySetInnerHTML={{ __html: `${boldSearchedWord()}` }}>
            </Typography>
            <Typography gutterBottom variant="h6" component="h4">
              {props.author}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    )
}
export {SearchResult}
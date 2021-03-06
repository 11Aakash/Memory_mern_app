import React,{useEffect,useState} from 'react'
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import memories from './images/memories.png'
import {getPosts} from './actions/posts'
import Posts from './components/Posts/Posts.js'
import Form from './components/Form/Form.js'
import useStyle from './styles'
import {useDispatch} from 'react-redux';

export default function App() {
  const [currentId,setCurrentId]=useState(null)
    const classes=useStyle();
    const dispatch=useDispatch();

    useEffect(()=>{
      dispatch(getPosts());
    },[currentId,dispatch])
  return (

    <div>
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit" >
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memory" height="60"/>
            </AppBar>
            <Grow in>
              <Container>
                <Grid className={classes.mainContainer} container  justifyContent='space-between' alignContent='stretch' spacing={3}>
                  <Grid item xs={12} sm={7}>
                      <Posts setCurrentId={setCurrentId}/>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId}/>
                  </Grid>

                </Grid>
              </Container>
            </Grow>
        </Container>
    </div>
  )
}

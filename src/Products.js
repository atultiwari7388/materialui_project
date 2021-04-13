import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Button,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";
// import LocalMallIcon from "@material-ui/icons/LocalMall";
import useStyles from './styles';
// import RecipeReviewCard from './Cards'


const cards = [1,2,3,4,5,6,7,8,9]



const Products = () => {
     const classes = useStyles()
  return (
    <>
        {/* Creating a Navigation bar with logo */}
     {/* Our main Part */}
     <main>
          <div className={classes.container}>
               <Container maxWidth='sm'>
                    <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                         LocalStore
                    </Typography>
                    <Typography variant='h5' align='center' color='textSecondary' paragraph>
                         Hello Everyone and Welcome to Local Store , You can find Your Perfect Product
                    </Typography>
                    <div className={classes.button}>
                         <Grid container spacing ={2} justify="center">
                              <Grid item>
                                   <Button variant='contained' color='primary'>
                                        See my Courses
                                   </Button>
                              </Grid>
                               <Grid item>
                                   <Button variant='outlined' color='secondary'>
                                        Add Your Courses
                                   </Button>
                              </Grid>
                         </Grid>
                    </div>
               </Container>
               {/* <RecipeReviewCard/> */}
          </div>

          {/* import card section  */}

          <Container className={classes.cardGrid} maxWidth='md' >
               <Grid container spacing={4}>
                    {cards.map( (card) =>(
                         <Grid item key={card} xs={12} sm={6} md={4}>
                         <Card className={classes.card}>
                              <CardMedia className={classes.cardMedia} 
                              image='https://source.unsplash.com/random'
                              title= 'Image title'
                              />
                              <CardContent className={classes.cardContent}>
                                   <Typography gutterBottom variant='h5'>
                                        Heading 
                                   </Typography>
                                   <Typography>
                                        This is a media Card. describe the content
                                   </Typography>
                              </CardContent>
                              <CardActions>
                                   <Button size='small' color='primary'>
                                        Buy
                                   </Button>
                                   <Button size='small' color='primary'>
                                        Add to Cart
                                   </Button>
                              </CardActions>
                         </Card>
                    </Grid>
                    ))}          
               </Grid>
          </Container>

     </main>

     <footer className= {classes.footer} >
          <Typography variant='h6' align='center' gutterBottom>
               Copyright &copy; .All right reserved 
          </Typography>
          <Typography variant='subtitle1' align='center' color='textDanger'>
               Local Store
          </Typography>
     </footer>

    </>
  );
};

export default Products;

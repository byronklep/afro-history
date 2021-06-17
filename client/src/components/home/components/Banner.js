import { Container, Typography } from '@material-ui/core'
import { Parallax } from 'react-parallax'
import Home from '../../../img/home-bg.jpeg'

const Banner = () => {
  return (
    <Parallax
      strength={300}
      blur={{ min: -15, max: 15 }}
      bgImage={Home}
      className="heroBanner">
      <Container fixed className="home-container">
        <Typography component="div">
          <h1>Afro History</h1>
          <h3>The Long Tale of African American History</h3>
        </Typography>
      </Container>
    </Parallax>
  )
}

export default Banner

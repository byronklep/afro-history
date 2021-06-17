import { Container, Typography } from '@material-ui/core'

const Home = () => {
  return (
    <>
      <Container fixed className='home-container'>
        <Typography component="div" style={{ height: '100vh' }}>
          <h1>Afro History</h1>
          <h3>The Long Tale of African American History</h3>
        </Typography>
      </Container>
    </>
  )
}

export default Home

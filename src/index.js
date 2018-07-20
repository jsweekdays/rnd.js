import './fonts'
import React from 'react'
import BgWithLogo from './components/BgWithLogo'
import styled from 'styled-components'
import { width } from 'styled-system'
import { Grid, Box } from './Grid'

const Card = styled.div`
  width: 1104px;
  margin: auto;
  background-color: #fff;
  box-shadow: 32px 46px 0px rgba(15, 0, 50, 0.15);

  border: 2px solid #6624ff;

  @media (max-width: 780px) {
    border: 1px solid #6624ff;
  }

  ${width};
`

const Text = styled.div`
  font-family: Gotham Pro;
  line-height: 61px;
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 800;
`

const App = () => (
  <BgWithLogo>
    <Card width={[1, 432, 656, 880, 1104]}>
      <Grid
        gridTemplateColumns={[
          '1fr',
          'repeat(4, 96px)',
          'repeat(6, 96px)',
          'repeat(8, 96px)',
          'repeat(10, 96px)'
        ]}
        gridColumnGap='16px'
      >
        <Box py={186} gridColumn='1 / -1' justifySelf='center'>
          <Text>хочешь выступить?</Text>
        </Box>
      </Grid>
    </Card>

    <div style={{ paddingBottom: '1000px' }} />
  </BgWithLogo>
)

export default App

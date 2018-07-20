import { Component } from 'react'

class Size extends Component {
  state = {
    width: 0,
    height: 0
  }

  update = () =>
    this.setState({ width: window.innerWidth, height: window.innerHeight })

  componentDidMount () {
    window.addEventListener('resize', this.update)
    this.update()
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.update)
  }

  render () {
    const { children } = this.props
    return children(this.state)
  }
}

export default Size

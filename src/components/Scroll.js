import { Component } from 'react'

class Scroll extends Component {
  state = {
    scroll: 0
  }

  update = () => this.setState({ scroll: window.scrollY })

  componentDidMount () {
    window.addEventListener('scroll', this.update)
    this.update()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.update)
  }

  render () {
    const { children } = this.props
    return children(this.state)
  }
}

export default Scroll

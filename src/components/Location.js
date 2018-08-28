import { Component } from 'react'
import { parse } from 'qs'

class Location extends Component {
  state = {
    location: null
  }

  componentDidMount () {
    this.setState({
      query: parse(window.location.search, { ignoreQueryPrefix: true })
    })
  }

  render () {
    const { children } = this.props

    return children(this.state)
  }
}

export default Location

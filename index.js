import React from 'react'
import PropTypes from 'prop-types'
import { convert } from 'html-element-to-react'

export default (Scroll) => {
    class ShaaiReact extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                currentDOM: null
            }
            this.scroll = new Scroll(props.match && props.match.path && props.match.path !== '/' ? { ...props.config, basePath: props.match.path } : props.config)
        }

        componentDidMount() {
            this.scroll.load(this.props.templates)
            this.scroll.subscribe((dom) => {
                dom && this.setState({ currentDOM: dom })
            })
        }

        subscribe(cb) {
            this.scroll.subscribe(cb)
        }
    
        render() {
            return(
                <>
                    { this.state.currentDOM && convert(this.state.currentDOM) }
                </>
            )
        }
    }

    ShaaiReact.propTypes = {
        config: PropTypes.object.isRequired,
        templates: PropTypes.object
    }

    return ShaaiReact
}
import React from 'react'
import PropTypes from 'prop-types'
import Shaai from '@shaai/shaai'
import { convert } from 'html-element-to-react'

export default class ShaaiReact extends React.Component {
    constructor(props) {
        this.state = {
            currentDOM: null
        }
    }

    componentDidMount() {
        let Scroll = Shaai(this.props.scroll || 'scroll-ink')
        this.scroll = new Scroll(this.props.config)
    }

    load(templates) {
        this.scroll.load(templates)
    }

    subscribe(cb) {
        this.scroll.subscribe(cb)
    }

    render() {
        return(
            <>
                { convert(this.state.currentDOM) }
            </>
        )
    }
}

ShaaiReact.propTypes = {
    config: PropTypes.object,
    scrollName: PropTypes.string
}
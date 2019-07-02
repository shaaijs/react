# @shaai/react
This is a React wrapper for Shaai. It returns a React component which can be placed wherever you want to show your blogs.

## Install
`npm i --save @shaai/react`

## Usage
```jsx
import withShaai from '@shaai/react'
import ScrollInk from '@shaai/scroll-ink'

//Pass in the template
const Shaai = withShaai(ScrollInk)

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Shaai
                    config={config}
                />
            </div>
        );
    }
}
```
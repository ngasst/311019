import React from 'react';
import styled from 'styled-components';

const width = 10;
const Wrapper = styled.div`
border: ${({color}) => color} dashed ${width}px;
height: calc(100% - ${width * 2}px);
width: calc(100% - ${width * 2}px);
transition: border 300ms ease-in-out;
display: flex;
justify-content: center;
align-items: center;

span {
    font-size: 3em;
    color: ${props => props.color};
}
`;

class App extends React.Component {
  
    state = {
        color: 'orangeyellow',
        num: 0
    }

    intid = null;

    componentDidMount() {
        const colors = ['deepskyblue', 'springgreen', 'darkred', 'salmon', 'indianred', 'purple', 'orange', 'violet'];
        this.intid = setInterval(() => {
            const index = Math.floor(Math.random() *8);
            this.setState({num: index});
            const color = colors[index];
            this.setState({color});
        }, 1000);
    }

    componentWillUnmount() {
        if(this.intid) {
            clearInterval(this.intid)
        }
    }
    render() {
        return (
            <Wrapper color={this.state.color}>
                <span>{this.state.num}</span>
                </Wrapper>
        );
    }
}

export default App;

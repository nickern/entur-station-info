import React, { Fragment } from 'react';
import moment from 'moment';

class Clock extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentTime: new Date()
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setDate(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    setDate() {
        this.setState({
            currentTime: new Date()
        });
    }

    render() {
        return (
            <Fragment>
                {moment(this.state.currentTime).format('HH:mm:ss')}
            </Fragment>
        )
    }
}

export default Clock;
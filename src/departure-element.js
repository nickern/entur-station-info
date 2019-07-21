import React from 'react'
import PropTypes from 'prop-types';
import moment from 'moment';

class Departure extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            icons: this.importAll(require.context('./ruter-icons', true, /\.svg$/))
        }
    }

    importAll(r) {
        let icons = {};
        r.keys().map((item, index) => { return icons[item.replace('./', '')] = r(item); });
        return icons;
    }

    renderLineNumberWithColor() {
        const background = this.props.lineColor;
        const textColor = this.props.lineTextColor;
        const lineNumber = this.props.lineNumber;

        return (
            <span className="line-number" style={{
                color: '#' + textColor,
                background: '#' + background
            }}>
                {lineNumber}
            </span>
        );
    }

    minutesDifference(date) {
        const timeDiff = Math.abs(new Date(date) - new Date())
        return Math.floor(timeDiff / (1000 * 60))
    }

    renderDepartureTime() {
        // Show time if difference is higher than
        const maxTime = 15;

        let diff = this.minutesDifference(this.props.departureTime);
        if (diff > maxTime) {
            return moment(this.props.departureTime).format('HH:mm');
        } else if (diff === 0) {
            return 'Now';
        } else {
            return diff + ' min';
        }
    }

    getTransportTypeIcon() {
        const transportType = this.props.transportType;
        const iconPath = this.state.icons[transportType + '-white.svg'];
        return <img className='transport-icon' src={iconPath} alt={transportType} />;
    }

    render() {
        console.log(this.state.icons);

        return (
            <tr >
                <td>{this.getTransportTypeIcon()}</td>
                <td>{this.renderLineNumberWithColor()}</td>
                <td>{this.props.displayText}</td>
                <td>{this.renderDepartureTime()}</td>
            </tr>
        )
    }
}

Departure.propTypes = {
    departureTime: PropTypes.string,
    displayText: PropTypes.string,
    transportType: PropTypes.oneOf(['metro', 'bus', 'tram']),
    lineNumber: PropTypes.string,
    lineColor: PropTypes.string,
    lineTextColor: PropTypes.string
};

export default Departure;
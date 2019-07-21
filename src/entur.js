import React from 'react'
import EnturService from '@entur/sdk'
import Departure from './departure-element'

class Entur extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            departureInfo: undefined
        }

        this.getData();
    }

    componentDidMount() {
        this.interval = setInterval(() => this.getData(), 59 * 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getData() {
        let service = new EnturService({ clientName: 'awesomecompany-awesomeapp' })
        let currentComponent = this;
        service.getStopPlaceDepartures('NSR:StopPlace:58221').then(
            function (details) {
                currentComponent.setState({
                    departureInfo: details
                });
            },
            function (error) {
                console.log("Error: ", error);
            }
        );
    }


    render() {
        return (
            <div className='section-entur'>
                <table className='table content'>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Line</th>
                            <th>Destination</th>
                            <th>Departure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.departureInfo ? this.state.departureInfo.slice(0, 13).map((element, key) => {
                                return (
                                    <Departure key={key}
                                        departureTime={element.expectedDepartureTime}
                                        displayText={element.destinationDisplay.frontText}
                                        transportType={element.serviceJourney.journeyPattern.line.transportMode}
                                        lineNumber={element.serviceJourney.journeyPattern.line.publicCode}
                                        lineColor={element.serviceJourney.journeyPattern.line.presentation.colour}
                                        lineTextColor={element.serviceJourney.journeyPattern.line.presentation.textColour}
                                    />
                                )
                            })
                                :
                                <tr>
                                    <td>Awaiting info</td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Entur;
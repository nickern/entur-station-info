<tr key={key} >
    <td>{moment(element.expectedDepartureTime).format('HH:mm')}</td>
    <td>{element.destinationDisplay.frontText}</td>
    <td>{element.serviceJourney.journeyPattern.line.publicCode}</td>
    <td>{element.serviceJourney.journeyPattern.line.transportMode}</td>
    <td>{element.serviceJourney.journeyPattern.line.name}</td>
    <td>{element.serviceJourney.journeyPattern.line.id}</td>
    <td><div className='foo' style={{ background: '#' + element.serviceJourney.journeyPattern.line.presentation.colour }} /></td>
    <td><div className='foo' style={{ background: '#' + element.serviceJourney.journeyPattern.line.presentation.textColour }} /></td>
</tr>
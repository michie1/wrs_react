import React from 'react';

export class Rider extends React.Component {
  render() {
    const results = this.props.results.toJS();
    return (
      <table>
        <thead>
          <tr>
            <th>Wedstrijd</th>
            <th>Uitslag</th>
          </tr>
        </thead>
        <tbody>
          {results.map(({race, result}, key) => 
              <tr key={key}>
                <td>{race.name}</td>
                <td>{result}</td>
              </tr>
          )}
        </tbody>
      </table>
    );
  }
}

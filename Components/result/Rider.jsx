import React from 'react';

export class Rider extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Wedstrijd</th>
            <th>Uitslag</th>
          </tr>
        </thead>
        <tbody>
          {this.props.results.map((result, i) => {
            return (
              <tr key={i}>
                <td>{result.race.name}</td>
                <td>{result.result}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    );
  }
}

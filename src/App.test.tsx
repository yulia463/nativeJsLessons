import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<App/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

function Appe() {

    const names = ["Dima", "Sveta", "Vitya", "Valera", "Ignat"]
    const users = [{name: "Dima"}, {name: "Sveta"}, {name: "Vitya"}, {name: "Valera"}, {name: "Ignat"}]
    const liElements = users.map((u,index) => <li key={index}> {u.name}</li>)

    return (
        <div className="Appe">
            <ul>
                {liElements}
            </ul>
        </div>
    )
}

export default App;
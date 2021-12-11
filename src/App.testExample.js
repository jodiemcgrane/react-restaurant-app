import { render, screen } from '@testing-library/react';
import App from './App';

//Test 1 - Study purposes only.
test('renders learn react link', () => {
    //Rendering the App component to the virtual DOM of this test
    render(<App />);
    //Screen is a way to interact with the component that we render, it has many methods that we can utilize
    //Using the getByText method - Get the element that has the text learn react
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
//This test fails as we do not have a learn react linkElement in our Application
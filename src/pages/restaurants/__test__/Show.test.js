import { render, screen, fireEvent } from '@testing-library/react';
import InputBase from '../Show';
import { BrowserRouter } from "react-router-dom"

const mockedSetForm = jest.fn();

const MockShow = () => {
    return (
        <BrowserRouter>
            <InputBase />
        </BrowserRouter>
    )
}

it('should render input element', () => {
    render(
        <MockShow
            form={[]}
            setForm={mockedSetForm}
        />
    );
    const inputElement = screen.getByPlaceholderText("Add Comment");
    expect(inputElement).toBeInTheDocument();
});
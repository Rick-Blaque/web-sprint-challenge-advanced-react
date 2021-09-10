import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm/>);
    const firstName = screen.queryByLabelText('First Name:')
    expect(firstName).toBeInTheDocument();
    const lastName = screen.queryByLabelText('Last Name:')
    expect(lastName).toBeInTheDocument();
    const address = screen.queryByLabelText('Address:')
    expect(address).toBeInTheDocument();
    const city = screen.queryByLabelText('City:')
    expect(city).toBeInTheDocument();
    const state = screen.queryByLabelText('State:')
    expect(state).toBeInTheDocument();
    const zip = screen.queryByLabelText('Zip:')
    expect(zip).toBeInTheDocument();
    const button = screen.queryByRole('button')
    userEvent.click(button)

    await waitFor(() => {
        const successMessage = screen.queryByTestId('successMessage')
        expect(successMessage).toBeInTheDocument()
})
});

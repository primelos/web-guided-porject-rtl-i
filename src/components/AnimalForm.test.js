import React from "react";
import { render, screen, fireEvent, getByText, getByRole } from "@testing-library/react";
import AnimalForm from "./AnimalForm";

describe("Tests AnimalForm", () => {
  test("AnimalForm renders without error", () => {
    render(<AnimalForm />);
  });

  test("user can fill out and submit form", () => {
    // arrange
        // render out component
    render(<AnimalForm />);
    // act
        // query each input
        // fill out our form
        // click our button
    const speciesInput = screen.getByLabelText("Species:");
    const ageInput = screen.getByLabelText(/age/i);
    const notesInput = screen.getByLabelText(/notes/i);
    // const button = screen.getByText(/submit/i)
    const button = screen.getByRole('button', { name: /submit!/i })

    fireEvent.change(speciesInput, {
      target: { name: "species", value: "dragon" },
    });
    fireEvent.change(ageInput, {
      target: { name: "age", value: "10" },
    });
    fireEvent.change(notesInput, {
      target: { name: "input", value: "animal info" },
    });
    fireEvent.click(button, 'dragon')

    // assert
        // test that an our form input exists on the page
    const newAnimal = screen.findByText(/canine/i)
  });
});

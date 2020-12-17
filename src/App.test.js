import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test('renders App without errors', () => {
  render(<App />);
})

test("app should have <h1>", () => {
  // arrange: render component
  render(<App />);
  
  // act: get access to out h1 element
  const header = screen.getByText('Add New Animal')
  
  // assert: pass if our h1 exists
  expect(header).toBeInTheDocument()
});

test('h1 text in the document', () => {
  expect("Add New Animal").toBeInTheDocument;
});

test("h1 text in the document", () => {
  render(<App />)
  const header = screen.getByText('Current Animals')
});

test("h1 text in the document", () => {
  expect('Current Animals').toBeInTheDocument
});

test('using expression', () => {
  render(<App />)
  const header = screen.getByText(/add new animal/i)
  expect(header).toBeTruthy()
});


describe("test test", () => {
  test("render app without errors", () => {
    render(<App />);
  });
});

// describe("do an existance test on the app", () => {
//   test("render app without errors", () => {
//     render(<App />);
//     throw new Error();
//   });
// });
import { render, screen } from "@testing-library/react";
import Header from "./Header";

// getBY

describe("Test header", () => {
  test("should render same text passed into title prop", async () => {
    render(<Header title="My header" />);
    const headingElement = screen.getByText(/My header/i);
    expect(headingElement).toBeInTheDocument();
  });
});

// // test('should render same text passed into title prop', () => {
// //   render(<Header title="My header" />);
// //   const headingElement = screen.getByRole("heading")
// //   expect(headingElement).toBeInTheDocument();
// // });

// it('should render same text passed into title prop', async () => {
//   render(<Header title="My header" />);
//   const headingElement = screen.getByRole("heading", { name: "My header" })
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into title prop', async () => {
//   render(<Header title="My header" />);
//   const headingElement = screen.getByTitle("header")
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into title prop', async () => {
//   render(<Header title="My header" />);
//   const headingElement = screen.getByTestId("header-0")
//   expect(headingElement).toBeInTheDocument();
// });

// // findBY

// test('should render same text passed into title prop', async () => {
//   render(<Header title="My header" />);
//   const headingElement = await screen.findByText(/My header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// //QueryBY

// test('should render same text passed into title prop', async () => {
//   render(<Header title="My header" />);
//   const headingElement = screen.queryByText(/dogs/i);
//   expect(headingElement).not.toBeInTheDocument();
// });

// test('should render same text passed into title prop', async () => {
//   render(<Header title="My header" />);
//   const headingElement = screen.getAllByRole("heading");
//   expect(headingElement.length).toBe(2)
// });

import { render, screen, fireEvent } from "@testing-library/react";
import TodoFooter from "./TodoFooter";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("Todo footer", () => {
  it('should render "task" when the number of incomplete tasks is one', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it('should render "task" when the number of incomplete tasks is one', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={4} />);
    const paragraphElement = screen.getByText(/4 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it('Should check snapshot test with 4 tasks', () => {
    const tree = renderer.create(<MockTodoFooter numberOfIncompleteTasks={4} />).toJSON();

    expect(tree).toMatchSnapshot();
  })

  it('Should check snapshot test with 0 tasks', () => {
    const tree = renderer.create(<MockTodoFooter numberOfIncompleteTasks={0} />).toJSON();

    expect(tree).toMatchSnapshot();
  })
});

// it('', async () => {
//   render(
//     <MockTodoFooter
//       numberOfIncompleteTasks={1}
//     />
//   )
//   const paragraphElement = screen.getByTestId("para");
//   expect(paragraphElement).toHaveTextContent("1 task left")
// });

// it('', async () => {
//   render(
//     <MockTodoFooter
//       numberOfIncompleteTasks={1}
//     />
//   )
//   const paragraphElement = screen.getByTestId("para");
//   expect(paragraphElement).toHaveTextContent("1 task left")
// });

// it('', async () => {
//   render(
//     <MockTodoFooter
//       numberOfIncompleteTasks={1}
//     />
//   )
//   const paragraphElement = screen.getByTestId("para");
//   expect(paragraphElement.textContent).toBe("1 task left")
// });

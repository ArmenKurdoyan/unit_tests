import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });

  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

const clearAll = () => {
  const buttonElement = screen.getByRole("button", { name: /Clear All/i });
  fireEvent.click(buttonElement);
};

describe("Todo", () => {
  test("should render same text passed into title prop", async () => {
    render(<MockTodo />);
    addTask(["Random action"]);

    const divElement = screen.getByText(/Random action/i);

    expect(divElement).toBeInTheDocument();
  });

  test("should render multiple elements", async () => {
    render(<MockTodo />);

    addTask([
      "Random action",
      "Random action 0",
      "Random action 1",
      "Random action 2",
    ]);

    const divElement = screen.getAllByTestId("task-container");

    expect(divElement.length).toBe(4);
  });

  test("task should not have completed class when initially rendered", async () => {
    render(<MockTodo />);

    addTask(["Random action"]);

    const divElement = screen.getByText(/Random action/i);

    expect(divElement).not.toHaveClass("todo-item-active");
  });

  test("task should have completed class when clicked", async () => {
    render(<MockTodo />);

    addTask(["Random action"]);

    const divElement = screen.getByText(/Random action/i);

    fireEvent.click(divElement);

    expect(divElement).toHaveClass("todo-item-active");
  });

  it("all tasks should be cleared", async () => {
    render(<MockTodo />);

    addTask(["task 1", "task 2", "task 3", "task 4"]);
    const divElement = screen.getAllByTestId("task-container");

    expect(divElement.length).toBe(4);

    clearAll();

    expect(divElement.length).toBeFalsy;
  });
});

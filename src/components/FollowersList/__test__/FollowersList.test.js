import { render, screen } from "@testing-library/react";
import FollowersList from "../FollowersList";
import { BrowserRouter } from "react-router-dom";

const MockFollowersList = () => (
  <BrowserRouter>
    <FollowersList />
  </BrowserRouter>
);

describe("FollowersList", () => {
  beforeEach(() => {
    console.log("running before each test");
  });

  beforeAll(() => {
    console.log("runs once befor each test");
  });

  afterEach(() => {
    console.log("Runs after each test");
  });

  afterAll(() => {
    console.log("Run once after all tests");
  });

  test("should render follower items", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });
});

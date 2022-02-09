import { render, screen } from "@testing-library/react"
import { Dashboard } from "."

describe("Header component", () => {
  jest.mock("api");

  it("renders correctly", () => {

    render(
      <Dashboard />
    )

    expect(screen.getByText("Age")).toBeInTheDocument()
  })


})
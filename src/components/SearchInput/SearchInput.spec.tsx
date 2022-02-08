import { render, screen } from "@testing-library/react"
import { SearchInput } from "."

describe("SearchInput component", () => {

  it("renders correctly", () => {

    render(
      <SearchInput value={""} onChange={() => {}}/>
    )

    expect(screen.getByPlaceholderText("Search by name")).toBeInTheDocument()
  })
})
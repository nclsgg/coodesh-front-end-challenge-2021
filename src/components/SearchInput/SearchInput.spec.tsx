import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { SearchInput } from "."

describe("SearchInput component", () => {

  it("renders correctly", () => {

    render(
      <SearchInput value={""} onChange={() => {}}/>
    )

    expect(screen.getByPlaceholderText("Search by name")).toBeInTheDocument()
  })

  it("should change value on onChange calls", () => {
    const changeFn = jest.fn()
    const textToType = 'Test'

    render(
      <SearchInput value={""} onChange={changeFn}/>
    )

    userEvent.type(screen.getByRole('textbox'), textToType)

    expect(changeFn.mock.calls.join('')).toBe(textToType)
  })
})
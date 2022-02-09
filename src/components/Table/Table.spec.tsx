import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Table } from "."

describe("Table component", () => {

  let patient = [{
    login: {
      username: "dfsdfsdf",
      uuid: "123",
    },
    name: {
      first: "Nicolas",
      last: "Gomes",
      title: "Guadagno",
    },
    email: "sdfsdf@gmail.com",
    cell: "21965729349",
    phone: "21965729349",
    gender: "male",
    dob: {
      age: 19,
      date: new Date(),
    },
    picture: {
      large: "fsdfsdf",
      medium: "sdfsdf",
      thumbnail: "sdfsdf",
    },
    nat: "BR",
    location: {
      city: "sdfsdf",
      country: "sdfsdf",
      postcode: 123,
      state: "sdfsdf",
      street: {
        name: "sdfffd",
        number: 123,
      },
    }
  }]

  it("renders correctly", () => {

    render(
      <Table patients={patient}/>
    )

    expect(screen.getByText("Name")).toBeInTheDocument()
  })

  it("shoud load patient data", () => {
    render(
      <Table patients={patient}/>
    )

    expect(screen.getByText(patient[0].name.first + " " + patient[0].name.last)).toBeInTheDocument()
  })

  it("should modal starts closed and open when click on cell", () => {

    render(
      <Table patients={patient}/>
    )

    expect(screen.queryByText(patient[0].email)).toBeNull()

    const userTR = screen.getByRole('cell', {name: patient[0].gender})
    
    userEvent.click(userTR)

    expect(screen.getByText(patient[0].email)).toBeInTheDocument()
    })

    it("should modal close", () => {

      render(
        <Table patients={patient}/>
      )
  
      expect(screen.queryByText(patient[0].email)).toBeNull()
  
      const userTR = screen.getByRole('cell', {name: patient[0].gender})
      
      userEvent.click(userTR)
  
      expect(screen.getByText(patient[0].email)).toBeInTheDocument()

      userEvent.keyboard('{Escape}')
      expect(screen.queryByText(patient[0].email)).not.toBeInTheDocument()
      })
})
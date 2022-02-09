import { render, screen } from "@testing-library/react"
import { PatientModal } from "."

describe("Modal component", () => {

  let patient = {
    login: {
      username: "dfsdfsdf",
      uuid: "123",
    },
    name: {
      first: "nicolas",
      last: "gomes",
      title: "guadagno",
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
  }

  it("renders correctly", () => {

    render(
      <PatientModal closeModal={() => {}} patient={patient}/>
    )


    expect(screen.getByText("Name:")).toBeInTheDocument()
  })
})
import { render, screen } from "@testing-library/react"
import { PatientModal } from "."

describe("Modal component", () => {

  let patient = {
    login: {
      username: "NicolasGG",
      uuid: "123",
    },
    name: {
      first: "nicolas",
      last: "gomes",
      title: "guadagno",
    },
    email: "nicolas@gmail.com",
    cell: "21965729349",
    phone: "21965729349",
    gender: "male",
    dob: {
      age: 19,
      date: new Date(),
    },
    picture: {
      large: "linktopicturelarge",
      medium: "linktopicturemedium",
      thumbnail: "linktothumbnail",
    },
    nat: "BR",
    location: {
      city: "Rio de Janeiro",
      country: "RJ",
      postcode: 12345612,
      state: "Rio de Janeiro",
      street: {
        name: "Rua",
        number: 12,
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
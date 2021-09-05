import { useEffect, useState } from "react"
import api from "../../services/api"
import { SearchInput } from "../SearchInput"
import { Table } from "../Table"
import { Container } from "./styles"
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
)

export type Patient = {
  login: {
    username: string
    uuid: string
  }
  name: {
    first: string
    last: string
    title: string
  }
  email: string
  cell: string
  phone: string
  gender: string
  dob: {
    age: number
    date: Date
  }
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  nat: string
  location: {
    city: string
    country: string
    postcode: number
    state: string
    street: {
      name: string
      number: number
    }
  }
}

export function Dashboard() {
  const classes = useStyles()
  const [patients, setPatients] = useState<Patient[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [queryText, setQueryText] = useState("")
  const [gender, setGender] = useState("")
  const [nat, setNat] = useState("")

  const regexGender = new RegExp(`\\b${gender}\\b`)
  const regexNat = new RegExp(`\\b${nat}\\b`)

  const results = 10

  async function loadPatients() {
    const { data } = await api.get(
      `/?page=${page}&results=${results}&seed=ncls`
    )
    const patientsNew = data.results
    setLoading(true)
    if (page > 1) {
      setPatients((prevPatients) => [...prevPatients, ...patientsNew])
    } else {
      setPatients(patientsNew)
    }
  }

  function resetQuery() {
    setPatients([])
    setGender("")
    setNat("")
    setPage(1)
    console.log(nat)
    console.log(gender)
  }

  useEffect(() => {
    loadPatients()
    setLoading(false)
  }, [page])

  useEffect(() => {
    if (gender.length > 1) {
      setPatients(genderPatients)
    } else {
      resetQuery()
      loadPatients()
    }
  }, [gender])

  useEffect(() => {
    if (nat.length > 1) {
      setPatients(natPatients)
    } else {
      resetQuery()
      loadPatients()
    }
  }, [nat])

  async function loadMore() {
    setPage((prevPage) => prevPage + 1)
  }

  const lowerCaseQuery = queryText.toLowerCase()

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.first.toLowerCase().includes(lowerCaseQuery) ||
      patient.name.last.toLowerCase().includes(lowerCaseQuery)
  )

  const handlePatientsGenderFilter = (e: any) => {
    setGender(e.target.value)
  }

  const handlePatientsNatFilter = (e: any) => {
    setNat(e.target.value)
  }

  const genderPatients = patients.filter((patient) =>
    patient.gender.match(regexGender)
  )

  const natPatients = patients.filter((patient) => patient.nat.match(regexNat))

  const handleSearch = (text: string) => {
    setQueryText(text)
  }

  return (
    <Container>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
        vulputate nulla. Nam sed varius augue, eu bibendum mauris. Proin
        tristique magna nec arcu vehicula, nec posuere dolor iaculis.
        Pellentesque turpis nibh, lacinia eget magna vitae, tincidunt maximus
        ligula.
      </span>
      <SearchInput value={queryText} onChange={handleSearch} />
      <div className="filters">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={gender}
            onChange={handlePatientsGenderFilter}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="male">Male</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          variant="outlined"
          id="last"
          className={classes.formControl}
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Nationality
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={nat}
            onChange={handlePatientsNatFilter}
            label="Nationality"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"AU"}>AU</MenuItem>
            <MenuItem value={"BR"}>BR</MenuItem>
            <MenuItem value={"CA"}>CA</MenuItem>
            <MenuItem value={"CH"}>CH</MenuItem>
            <MenuItem value={"DE"}>DE</MenuItem>
            <MenuItem value={"DK"}>DK</MenuItem>
            <MenuItem value={"ES"}>ES</MenuItem>
            <MenuItem value={"FI"}>FI</MenuItem>
            <MenuItem value={"FR"}>FR</MenuItem>
            <MenuItem value={"GB"}>GB</MenuItem>
            <MenuItem value={"IE"}>IE</MenuItem>
            <MenuItem value={"IR"}>IR</MenuItem>
            <MenuItem value={"NO"}>NO</MenuItem>
            <MenuItem value={"NL"}>NL</MenuItem>
            <MenuItem value={"NZ"}>NZ</MenuItem>
            <MenuItem value={"TR"}>TR</MenuItem>
            <MenuItem value={"US"}>US</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Table patients={queryText.length < 1 ? patients : filteredPatients} />
      <button
        type="button"
        onClick={loadMore}
        disabled={gender ? true : !loading}
      >
        {loading ? "Load More" : "Loading"}
      </button>
    </Container>
  )
}

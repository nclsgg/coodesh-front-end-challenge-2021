import { useEffect, useState } from "react";
import api from "../../services/api";
import { SearchInput } from "../SearchInput";
import { Table } from "../Table";
import { Container } from "./styles";
import { Select, MenuItem, InputLabel } from '@material-ui/core';

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
    const [patients, setPatients] = useState<Patient[]>([])
    const [ loading, setLoading ] = useState(false)
    const [page, setPage] = useState(1)
    const [queryText, setQueryText] = useState('')
    const [ gender, setGender ] = useState('')
    
    const regexGender = new RegExp(`\\b${gender}\\b`)

    const results = 10;

    useEffect(() => {
        async function loadPatients() {
          const { data } = await api.get(`/?page=${page}&results=${results}&seed=ncls`)
          console.log(regexGender)
          const patients = data.results;
          console.log(data)
          setLoading(true)
          if (gender) {
            setPatients(genderPatients)
            setPage(1)
          } else if (page > 1) {
          setPatients((prevPatients) => [...prevPatients, ...patients]);
          } else {
            setPatients(patients)
          }
        }   
        loadPatients();
        setLoading(false)
        console.log(genderPatients)
      }, [page, gender]);

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

    const genderPatients = patients.filter(
      (patient) =>
      patient.gender.match(regexGender)
    )


    const handleSearch = (text: string) => {
        setQueryText(text)
    }

    return (
        <Container>
            <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                in vulputate nulla. Nam sed varius augue, eu bibendum mauris.
                Proin tristique magna nec arcu vehicula, nec posuere dolor
                iaculis. Pellentesque turpis nibh, lacinia eget magna vitae,
                tincidunt maximus ligula.
            </span>
            <SearchInput value={queryText} onChange={handleSearch}/>
            <InputLabel shrink>Gender</InputLabel>
            <Select 
            value={gender}
            displayEmpty
            onChange={(e) => handlePatientsGenderFilter(e)}>
              <MenuItem value={""}>Empty</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
              <MenuItem value={"male"}>Male</MenuItem>
            </Select>
            <Table patients={queryText.length < 1 ? patients : filteredPatients}/>
            <button type="button" onClick={loadMore} disabled={gender ? true : !loading}>
                {loading ? "Load More" : "Loading"}
            </button>
        </Container>
    ); 
}
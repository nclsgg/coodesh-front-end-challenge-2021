import { useEffect, useState } from "react";
import api from "../../services/api";
import { SearchInput } from "../SearchInput";
import { Table } from "../Table";
import { Container } from "./styles";

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

    useEffect(() => {
        async function loadPatients() {
          const { data } = await api.get(`/?page=${page}&results=50&seed=ncls`)
          const patients = data.results;
          setLoading(true)
          setPatients((prevPatients) => [...prevPatients, ...patients]);
        }   
        loadPatients();
        setLoading(false)
      }, [page]);

    async function loadMore() {
      setPage((prevPage) => prevPage + 1)
     }


    const lowerCaseQuery = queryText.toLowerCase()
    const filteredPatients = patients.filter(
        (patient) =>
          patient.name.first.toLowerCase().includes(lowerCaseQuery) ||
          patient.name.last.toLowerCase().includes(lowerCaseQuery) ||
          patient.nat.toLowerCase().includes(lowerCaseQuery)
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
            <Table patients={queryText.length < 1 ? patients : filteredPatients}/>
            <button type="button" onClick={loadMore} disabled={!loading}>
                {loading ? "Load More" : "Loading"}
            </button>
        </Container>
    ); 
}
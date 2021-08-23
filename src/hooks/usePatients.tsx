import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import api from "../services/api";

interface Patient {
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

interface PatientsProviderProps {
    children: ReactNode;
}

interface PatientsContextData {
    patients: Patient[];
}

const PatientsContext = createContext<PatientsContextData>(
    {} as PatientsContextData
    );

export function PatientsProvider({ children }: PatientsProviderProps) {
    const [ patients, setPatients ] = useState<Patient[]>([]);

    useEffect(() => {
        api.get('?page=1&results=10&seed=ncls')
        .then(response => setPatients(response.data))
    }, []);

    return (
        <PatientsContext.Provider value={{patients}}>
            {children}
        </PatientsContext.Provider>
    )
}

export function usePatients() {
    const context = useContext(PatientsContext);

    return context;
}


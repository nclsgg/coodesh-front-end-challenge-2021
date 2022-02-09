import { Container } from "./styles"

interface SearchInputProps {
  value: string
  onChange: (string: string) => void
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <Container>
      <input
        className="searchInput"
        placeholder="Search by name"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </Container>
  )
}

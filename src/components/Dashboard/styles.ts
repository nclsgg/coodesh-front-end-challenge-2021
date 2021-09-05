import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;

  span {
    color: var(--text-body);
    font-weight: 400;
  }

  button {
    margin-top: 1rem;
    font-size: 1rem;
    margin-left: auto;
    margin-right: auto;
    color: #fff;
    background: var(--blue);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .filters {
    display: flex;
    margin-top: 1rem;

    #last {
      margin-left: 1rem;
    }
  }
`

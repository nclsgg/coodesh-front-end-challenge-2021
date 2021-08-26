import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    table {
        width: 100%;
        border-spacing: 0.5rem;
        text-align: center;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            line-height: 1.5rem; 
        }

        tbody {
            tr {
                transition: filter 0.3s;

                &:hover {
                    filter: brightness(0.9);
                }
            }

            td {
                padding: 1rem 2rem;
                border: 0;
                background: var(--shape);
                color: var(--text-body);
                border-radius: 0.25rem;
            }
        }
    }

    
`

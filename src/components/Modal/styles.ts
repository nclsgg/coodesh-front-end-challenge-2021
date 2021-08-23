import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    #informations {
        display: flex;
        justify-content: space-between;
        margin-top: 3rem;
        font-size: 1.25rem;
        color: var(--text-body);

        span + span {
                margin-top: 0.75rem;
        }
    
        .informations-static {
            display: flex;
            flex-direction: column;
        }

        .informations-patient {
            display: flex;
            flex-direction: column;
            text-align: right;
        }

    }
`
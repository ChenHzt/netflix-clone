import styled from "styled-components";

export const StyledGridContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));

    grid-auto-rows: minmax(200px, auto);
`
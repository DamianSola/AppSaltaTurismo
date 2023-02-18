import styled from "styled-components";

export const TourContainer = styled.div`
display: flex;
transition: 1s;
position: cover;
overflow-x: scroll;
scroll-snap-stop: normal;
/* scroll-snap-type: x mandatory; */
/* -webkit-overflow-scrolling: touch; */
scroll-behavior: smooth;

::-webkit-scrollbar {
    display: none;
}

/* :hover{
    translate: calc(-25%);
} */
`

/* scroll-snap-type: x mandatory; */
/* -webkit-overflow-scrolling: touch; */
/* scroll-behavior: smooth; */
import styled from "styled-components";
import { Card,CardTitle  } from "reactstrap";


export const CardService = styled(Card)`
display:block;
/* justify-content: left; */
/* background-size: cover; */
background-color: hsl(0, 25.64102564102562%, 84.70588235294117%);
margin: 10px;
padding: 10px;
width: 450px;
.head{
    display: block;
}
.contain{
  display: flex;
  flex-direction: column;
  margin: 10px 5px;
}
.data-contain{
  display: flex;
  /* flex-direction: column; */
}

.data-value{
    margin-left: 10px;
}

.logo{
   width: 80%;
   height: 100px;
   margin: auto;
}
.title{
    width: 50%;
    background-color: black;
    color: white
}
h4{
    font-size: 25px;
    width: auto;
    margin-left: 10px;
}
img{
    width: 100%;
    height: 100%;
}
`

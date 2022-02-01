import styled from "styled-components";

export  const MenuListItem = styled.div`
background: transparent;
cursor: pointer;
color: white;
padding: 0.25em 1em;
height: 50px;
display: flex;
align-items: center;
transition:background .5s ease in;
& .itemIcon {
  color: white;
}
&:hover{
  background:rgb(14, 14, 14,0.35);
}
${(props) =>
  props.selected &&
  `
    background: rgb(237, 27, 36,0.65);
    color: white;
    &:hover{
      background: rgb(237, 27, 36,0.65);
    }
  `}
`;
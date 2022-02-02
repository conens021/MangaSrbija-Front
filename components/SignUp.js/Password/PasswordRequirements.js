import styled from "styled-components";

const ValidProperty = styled.li`
  color: ${(props) => (props.valid ? "green" : "")};
`;

function PassowrdRequirements({password}) {

  const has8chars = password.length >= 8;
  const hasUpperCaseLater  = /[A-Z]/.test(password)
  const hasLowerCaseLater  = /[a-z]/.test(password)
  const hasNumber  = /[0-9]/.test(password)

  return (
    <div>
      Lozinka mora da sadrzi minimum:
      <br />
      <ul style={{ paddingLeft: "3em" }}>
        <ValidProperty valid={has8chars}>8 karaktera</ValidProperty>
        <ValidProperty valid={hasLowerCaseLater}>Minimum 1 malo slovo</ValidProperty>
        <ValidProperty valid={hasUpperCaseLater}>Minimum 1 veliko slovo</ValidProperty>
        <ValidProperty valid={hasNumber}>Minimum 1 broj</ValidProperty>
      </ul>
    </div>
  );
}

export default PassowrdRequirements;

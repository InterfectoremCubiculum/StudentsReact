const Grades: React.FC<{ oceny: number[] }> = ({ oceny }) => {
    const menuStyle = {  display: "inline" }
    return (
      <>
        <p>Oceny:  {oceny.map(ocena =>  <li style={menuStyle}>{ocena} </li>)}</p>
      </>
    );
  };
export default Grades;
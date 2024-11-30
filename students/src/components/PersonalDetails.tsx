const PersonalDetails: React.FC<{ details: { imie: string; nazwisko: string; wiek: number } }> = ({ details }) => {
    return (
      <div>
        <p>Imie i nazwisko: {details.imie} {details.nazwisko}</p>
        <p>Wiek: {details.wiek}</p>
      </div>
    );
  };
export default PersonalDetails;
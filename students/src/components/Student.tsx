import Grades from "./grades";
import PersonalDetails from "./PersonalDetails";

interface StudentInterface {
    imie: string;
    nazwisko: string;
    wiek: number;
    oceny: number[];
}

const Student: React.FC<{ student: StudentInterface }> = ({ student }) => {
    return (
      <>
        <PersonalDetails details={student}  />
        <Grades oceny={student.oceny} />
      </>
    );
  };
export default Student;
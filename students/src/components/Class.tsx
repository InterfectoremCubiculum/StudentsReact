import { useState } from "react";
import Student from "./student";

interface StudentInterface {
    imie: string;
    nazwisko: string;
    wiek: number;
    oceny: number[];
}

const Class = () => {
    const [studenci,] = useState<StudentInterface[]>([
        { imie: "Adam", nazwisko: "Małysz", wiek: 20, oceny: [3, 5, 2, 1] },
        { imie: "Janusz", nazwisko: "Kowalski", wiek: 18, oceny: [4, 3, 5, 6] },
        { imie: "Edward", nazwisko: "Gierek", wiek: 21, oceny: [3, 4, 3, 3] },
        { imie: "Basia", nazwisko: "Dasia", wiek: 22, oceny: [3, 2, 3, 4] },
        { imie: "Ania", nazwisko: "Fajna", wiek: 19, oceny: [2, 5, 1, 2] },
    ]);
    return (
        <>
        {studenci.map(s => <Student student={s}/> )}
        </>
    )
}
export default Class;

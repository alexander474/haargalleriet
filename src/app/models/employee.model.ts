export interface Employee {
  name: string;
  image: string;
  quote?: string;
}

export const EMPLOYEES: Employee[] = [
  {
    name: 'Anita',
    image: 'assets/images/employees/employe_anita.jpg',
    quote: 'Kreativitet er intelligens som har det gøy.',
  },
  {
    name: 'Hilde',
    image: 'assets/images/employees/employe_hilde.jpg',
    quote: 'Å gjøre andre gode er den største styrken.',
  },
  {
    name: 'Kine',
    image: 'assets/images/employees/employe_kine.jpg',
    quote: 'Små detaljer gjør stor forskjell.',
  },
  {
    name: 'Eline',
    image: 'assets/images/employees/employe_eline.jpg',
    quote: 'Vi former ikke bare hår, men selvtillit.',
  },
  {
    name: 'Marit',
    image: 'assets/images/employees/employe_marit.jpg',
    quote: 'Glede smitter – og starter ofte med et smil.',
  },
  {
    name: 'Narine',
    image: 'assets/images/employees/employe_narine.jpg',
    quote: 'Det er magi i å få folk til å føle seg bra.',
  },
];

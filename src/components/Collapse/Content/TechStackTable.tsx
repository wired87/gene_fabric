import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";


const rows = [
  {
    key: "1",
    name: "TypeScript",
    role: "React, React Native, NextJS, Tailwind",
    status: "Wir bringen Ihre Vorstellungen in die Realität mit den leistungsfähigsten Frontend Frameworks mit " +
      "welchen wir nicht nur Web und mobile Anwendungen (Cross Plattform) ins Leben rufen, " +
      "sondern auch leistungsstarke und komfortable Backends mit hilfe von NextJS",
  },
  {
    key: "2",
    name: "Python",
    role: "PyTorch, Django",
    status: "Unsere KI Aufträge bearbeiten wir vorzugsweise mit dem leistungsstarken KI-Framework PyTorch. " +
      "Für stabile, sichere und vielseitige Backends " +
      "ziehen wir Django in jedem größeren Projekt vor.",
  },
];

const columns = [
  {
    key: "name",
    label: "Sprache",
  },
  {
    key: "role",
    label: "Frameworks",
  },
  {
    key: "status",
    label: "Use case",
  },
];


const TechStackTable = () => {
  return(
    <div className={"flex flex-col gpa-y-5"}>
      <h2 className={"relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero"}>

        Unser TechStack zielt darauf ab unsere Kundenwünsche optimal abzudecken.
      </h2>
      <p className="text-body-color dark:text-body-color-dark text-base">
        Dabei arbeiten wir mit den größten und weit verbreitetsten programmiersprachen um vielseitigkeit und stabilität zu gewährleisten.
      </p>
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>

    </div>
  )
}


export default TechStackTable;
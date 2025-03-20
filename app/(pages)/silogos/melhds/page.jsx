import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const melhds = [
  { name: "Παρασκευαΐδου Βασιλική", pos: "Πρόεδρος" },
  { name: "Σαρδάνη Ελένη", pos: "Αντιπρόεδρος" },
  { name: "Στεφανακίδης Χρήστος", pos: "Γραμματέας" },
  { name: "Παρασκευαΐδου Ελένη", pos: "Ταμίας" },
  { name: "Λιακίδου Βασιλική", pos: "Μέλος" },
  { name: "Αρναουτίδου Ευγενία", pos: "Μέλος" },
  { name: "Αραμπατζής Γεώργιος", pos: "Μέλος" },
  { name: "Τοψίδης Σωτήριος", pos: "Μέλος" },
  { name: "Καρακολίδης Κωνσταντίνος", pos: "Μέλος" },
];

export default function MelhdsPage() {
  return (
    <div className="space-y-4 lg:max-w-[65%] lg:mx-auto ">
      <h1 className="text-2xl text-primary text-center">Μέλη ΔΣ</h1>

      <Table>
        <TableHeader className="bg-accent/30">
          <TableRow>
            <TableHead className="text-primary">Ονοματεπώνυμο</TableHead>
            <TableHead className="text-primary">Θέση</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {melhds.map((el) => (
            <TableRow key={el.name}>
              <TableCell className="font-medium">{el.name}</TableCell>
              <TableCell>
                <Badge className="text-background">{el.pos}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

// Μέλη ΔΣ:
// Παρασκευαΐδου Βασιλική
// Σαρδάνη Ελένη
// Στεφανακίδης Χρήστος
// Παρασκευαΐδου Ελένη
// Λιακίδου Βασιλική
// Αρναουτίδου Ευγενία
// Αραμπατζής Γεώργιος
// Τοψίδης Σωτήριος
// Καρακολίδης Κωνσταντίνος

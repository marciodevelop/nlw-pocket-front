import { CreateGoal } from "./components/ui/create-goal";
import { Dialog } from "./components/ui/dialog";
import { EmptyGoals } from "./components/ui/empty-goals";
import { Summary } from "./components/ui/sumarry";

export function App() {
  return (
    <Dialog>
      {/* <EmptyGoals />
      <CreateGoal /> */}
      <Summary />
    </Dialog>
  );
}

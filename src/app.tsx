import { useEffect, useState } from "react";
import { CreateGoal } from "./components/ui/create-goal";
import { Dialog } from "./components/ui/dialog";
import { EmptyGoals } from "./components/ui/empty-goals";
import { Summary } from "./components/ui/sumarry";
import { useQuery } from "@tanstack/react-query";
import { getSummary } from "./http/get-summary";

export function App() {
  const { data } = useQuery({
    queryKey: ["summary"],
    queryFn: getSummary,
    staleTime: 1000 * 60,
  });

  return (
    <Dialog>
      <CreateGoal />
      {data && data.total > 0 ? <Summary /> : <EmptyGoals />}
    </Dialog>
  );
}

export async function getPendingGoals(): Promise<
  {
    id: string
    title: string
    desiredWeeklyFrequency: number
    completionCount: number
  }[]
> {
  const response = await fetch('http://localhost:3333/pending-goals')
  const data = await response.json()
  return data.pendingGoals
}

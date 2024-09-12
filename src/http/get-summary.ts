export async function getSummary(): Promise<GoalsTypes.SummayTypes> {
  const response = await fetch('http://localhost:3333/summary')
  const data = await response.json()
  return data.summary
}

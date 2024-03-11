export function getCurrentDate(): string {
  const currentDate: Date = new Date();

  currentDate.setHours(currentDate.getHours() + 9);

  const year: number = currentDate.getFullYear(); // 년도
  const month: string = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day: string = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate: string = `${year}/${month}/${day}`;

  return formattedDate;
}

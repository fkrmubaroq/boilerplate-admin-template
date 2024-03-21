export default function RecordInfo({
  start,
  end,
  total,
}: {
  start: number;
  end: number;
  total: number;
}) {
  return (
    <div className="flex gap-x-1 text-sm text-gray-500 ">
      <span>{start}</span>
      <span>-</span>
      <span>{end}</span>
      <span>of</span>
      <span>{total}</span>
    </div>
  );
}

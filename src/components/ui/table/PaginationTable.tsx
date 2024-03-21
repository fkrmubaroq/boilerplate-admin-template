"use client"
import Pagination from "./pagination";
import RecordInfo from "./RecordInfo";

export default function PaginationTable({
  onNext,
  onPrev,
  currentPage,
  totalAllRow,
  start,
  end,
  totalPage
}: {
  onNext?: (currentPage: number) => void;
  onPrev?: (currentPage: number) => void;
  totalAllRow: number;
  currentPage: number;
  start: number;
  end: number;
  totalPage: number;
}) {

  return (
    <div className="mt-2 flex items-center justify-between">
      <RecordInfo
        start={start}
        end={end}
        total={totalAllRow}
      />
      <Pagination
        asSearchParam
        onNext={(currentPage) => onNext && onNext(currentPage)}
        onPrev={(currentPage) => onPrev && onPrev(currentPage)}
        currentPage={currentPage}
        position="right"
        lastPage={currentPage === totalPage}
      />
    </div>
  );
}

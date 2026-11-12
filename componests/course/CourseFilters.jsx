import { Search, ChevronDown } from "lucide-react";

export default function CourseFilters({ filters, setFilters }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
      {/* Search Box */}
      <div className="relative w-full md:max-w-xxl">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />

        <input
          type="text"
          placeholder="Search Courses"
          value={filters.search}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              search: e.target.value,
            }))
          }
          className="
            w-full
            h-12
            rounded-md
            border
            border-[#1D4E89]
            bg-white
            pl-11
            pr-4
            text-sm
            placeholder:text-gray-500
            focus:outline-none
          "
        />
      </div>

      {/* Mode Select */}
      <div className="relative w-full md:w-56">
        <select
          value={filters.mode}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              mode: e.target.value,
            }))
          }
          className="
            appearance-none
            w-full
            h-12
            rounded-md
            bg-[#083B7A]
            text-white
            font-semibold
            px-5
            pr-12
            focus:outline-none
            cursor-pointer
          "
        >
          <option value="All">ALL</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>  
          <option value="Online + Offline">Online + Offline</option> 
          <option value="Corporate">Corporate</option>  
        </select>

        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white pointer-events-none" />
      </div>
    </div>
  );
}
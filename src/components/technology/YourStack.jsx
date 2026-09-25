import React from "react";
import { RxCross1 } from "react-icons/rx";

export const YourStack = ({ items = [], onRemoveItem, onRemoveAll }) => {
  return (
    <div className="rounded-2xl border border-[#f1f5f9] bg-white p-7 font-sans shadow-[0_4px_25px_rgba(0,0,0,0.03)]">
      {/* Header */}
      <div>
        <h3 className="text-[22px] font-bold tracking-tight text-[#0f172a]">
          Your Stack
        </h3>

        <p className="mt-1 text-[15px] font-normal text-[#94a3b8]">
          {items.length} Technology Selected
        </p>
      </div>

      {/* Selected Items */}
      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-2xl border border-[#e2e8f0]/60 bg-white px-4 py-3.5 transition-all duration-150 hover:border-[#cbd5e1]"
          >
            <div className="flex items-center space-x-3.5">
              {/* Icon */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center">
                {item.icon && (
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="h-8 w-8 object-contain"
                  />
                )}
              </div>

              {/* Info */}
              <div>
                <h4 className="text-[15px] font-bold leading-snug text-[#0f172a]">
                  {item.name}
                </h4>

                <p className="text-[12px] font-medium text-[#94a3b8]">
                  {item.category}
                </p>
              </div>
            </div>

            {/* Remove */}
            <button
              onClick={() => onRemoveItem(item.id)}
              className="cursor-pointer p-1 text-[#94a3b8] transition-colors hover:text-[#64748b]"
              aria-label={`Remove ${item.name}`}
            >
              <RxCross1 />
            </button>
          </div>
        ))}

        {/* Empty State */}
        {items.length === 0 && (
          <div className="flex items-center justify-center rounded-2xl border-2 border-dashed border-[#e2e8f0] bg-white px-8 py-7 text-center font-sans">
            <p className="text-[17px] font-normal text-[#94a3b8]">
              Your stack is empty.
            </p>
          </div>
        )}
      </div>

      {/* Remove All */}
      {items.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-6 w-full rounded-2xl border border-[#fca5a5]/60 bg-white py-3.5 text-[15px] font-bold text-[#dc2626] transition-all duration-150 hover:bg-[#fef2f2] active:scale-[0.98]"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default YourStack;

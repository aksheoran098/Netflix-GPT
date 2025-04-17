import React from "react";

const MoreInfoRow = ({ label, value }) => (
  <li className="flex items-center justify-between ">
    <strong className="w-[45%] text-right text-gray-100">{label}</strong>
    <span className="w-[10%] text-center text-gray-100">:</span>
    <span className="w-[45%] text-left text-gray-200">{value}</span>
  </li>
);

export default MoreInfoRow;

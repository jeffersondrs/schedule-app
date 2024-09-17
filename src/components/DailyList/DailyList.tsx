"use client";

import React, { useState } from "react";
import { DailyListProps } from "../../utils/types";
import { observer } from "mobx-react-lite";
import DailyHeader from "./DailyHeader";
import DailyContent from "./DailyContent";


const DailyList = ({ periodOfDay, dailyList }: DailyListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRemoveSchedule = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className="flex flex-col justify-center items-center bg-primary rounded-xl py-2 w-full max-w-4xl">
      <DailyHeader
        periodOfDay={periodOfDay}
      />
      <DailyContent
        dailyList={dailyList}
        isModalOpen={isModalOpen}
        handleRemoveSchedule={handleRemoveSchedule}
      />
    </div>
  )
}

export default observer(DailyList);
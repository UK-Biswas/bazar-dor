"use client";

import { Toast } from "@heroui/react";

const ToasterProvider = () => {
  return (
    <Toast.Provider
      placement="top end"
      maxVisibleToasts={3}
      gap={12}
      width={420}
    />
  );
};

export default ToasterProvider;
"use client";
import SideBar from "@/app/src/components/sidebar/SideBar";
import React, { useState } from 'react';

export default function layout({ children }) {
  const [visible, setVisible] = useState(false);
  const handleVisible = () => {
    setVisible(!visible);
  };
  return (
    <div style={{ height: "100vh" }}>
      <SideBar visible={visible|false} handleVisible={handleVisible} />
      <button onClick={() => setVisible(true)}> Abrir</button>
      <div style={{ padding: "2rem" }}>
        {children}
      </div>
    </div>
  );
}

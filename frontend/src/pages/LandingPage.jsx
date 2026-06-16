// src/pages/LandingPage.jsx
import React from "react";
import LandingNavbar from "../components/common/LandingNavbar";
import Dashboard from "./Dashboard"; // this contains sections with ids: home, courses, faqs, contact

export default function LandingPage() {
  return (
    <>
    <script
        src="https://staging.chatboq.com/widget.js"
        data-orgId="114b5d0b-5dce-4b1c-ac5a-82ed3eb9d369"
      ></script>
      <LandingNavbar />
      <Dashboard />
    </>
  );
}

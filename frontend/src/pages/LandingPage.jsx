// src/pages/LandingPage.jsx
import React,{useEffect} from "react";
import LandingNavbar from "../components/common/LandingNavbar";
import Dashboard from "./Dashboard"; // this contains sections with ids: home, courses, faqs, contact

export default function LandingPage() {
   useEffect(() => {
    // prevent duplicate script injection
    const existingScript = document.querySelector(
      'script[src="https://staging.chatboq.com/widget.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://staging.chatboq.com/widget.js";
      script.async = true;
      script.setAttribute(
        "data-orgId",
        "114b5d0b-5dce-4b1c-ac5a-82ed3eb9d369"
      );

      document.body.appendChild(script);
    }
  }, []);
  return (
    <>
      <LandingNavbar />
      <Dashboard />
    </>
  );
}

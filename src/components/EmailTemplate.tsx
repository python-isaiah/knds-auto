import React from 'react';

interface EmailTemplateProps {
  orderNumber: string;
  productTitle: string;
  phase: "01" | "02" | "03";
}

export function EmailTemplate({ orderNumber, productTitle, phase }: EmailTemplateProps) {
  const content = {
    "01": {
      title: "PHASE 01 // SPECIFICATION LOG VERIFIED",
      desc: "YOUR CORE SELECTION HAS BEEN ACQUIRED AND BALANCED. INDIVIDUAL WEAVE MATCHING IS PROCEEDING.",
      status: "CORE_ACQUISITION_SECURE"
    },
    "02": {
      title: "PHASE 02 // CARBON DEPOSITION & MATRIX EMBEDDING",
      desc: "THE HAND-LAID 3K COMPOSITE STRUCTURE HAS PASSED THERMAL PRESSURE COMPRESSION. UV RESIN COATING ACTIVATED.",
      status: "RESIN_CURING_IN_PROGRESS"
    },
    "03": {
      title: "PHASE 03 // QUALITY CONTROL & CALIBRATION",
      desc: "THE UNIT HAS CLEARED STRUCTURAL INTEGRITY PROTOCOLS AND IS TRANSFERRED TO THE POLISHING LAB FOR HAND-FINISHING.",
      status: "FINAL_INSPECTION_PASSED"
    }
  };

  const active = content[phase];

  return (
    <div style={{
      backgroundColor: "#000000",
      color: "#ffffff",
      fontFamily: "monospace",
      padding: "40px",
      maxWidth: "600px",
      margin: "0 auto",
      border: "1px solid #18181b"
    }}>
      {/* Brand Header */}
      <table width="100%" cellPadding="0" cellSpacing="0">
        <tr>
          <td>
            <h2 style={{ fontStyle: "italic", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.05em", fontSize: "24px", margin: "0 0 4px 0" }}>
              KNDS<span style={{ color: "#71717a", fontWeight: 300 }}>AUTO</span>
            </h2>
            <p style={{ fontSize: "9px", letterSpacing: "0.4em", color: "#71717a", textTransform: "uppercase", margin: 0 }}>
              Automotive Grade Carbon Composites
            </p>
          </td>
        </tr>
      </table>

      {/* Main Status Callout */}
      <div style={{ marginTop: "40px", marginBottom: "40px" }}>
        <h3 style={{ fontSize: "12px", fontWeight: "bold", letterSpacing: "0.2em", textTransform: "uppercase", color: "#ffffff", margin: "0 0 16px 0" }}>
          {active.title}
        </h3>
        <p style={{ fontSize: "11px", color: "#a1a1aa", lineHeight: "1.8", textTransform: "uppercase", margin: 0 }}>
          {active.desc}
        </p>
      </div>

      {/* Technical Data Block */}
      <div style={{ borderTop: "1px solid #27272a", borderBottom: "1px solid #27272a", padding: "20px 0", margin: "30px 0" }}>
        <table width="100%" cellPadding="0" cellSpacing="0">
          <tr>
            <td style={{ fontSize: "10px", color: "#52525b", textTransform: "uppercase" }}>Build Reference</td>
            <td style={{ fontSize: "10px", color: "#ffffff", textAlign: "right", fontWeight: "bold" }}>#{orderNumber}</td>
          </tr>
          <tr>
            <td style={{ fontSize: "10px", color: "#52525b", textTransform: "uppercase", paddingTop: "8px" }}>Component Assigned</td>
            <td style={{ fontSize: "10px", color: "#ffffff", textAlign: "right", fontWeight: "bold", paddingTop: "8px" }}>{productTitle}</td>
          </tr>
        </table>
      </div>

      {/* System Readout Flag */}
      <div style={{ backgroundColor: "#09090b", border: "1px solid #27272a", padding: "16px", fontSize: "10px", color: "#71717a", textTransform: "uppercase", letterSpacing: "0.1em" }}>
        SYSTEM_STATUS // <span style={{ color: "#ffffff", fontWeight: "bold" }}>{active.status}</span>
      </div>
    </div>
  );
}
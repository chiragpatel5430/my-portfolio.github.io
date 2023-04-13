import React from "react";
import Section from "../components/Section";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">INSTITUTE OF TECHNOLOGY, NIRMA UNIVERSITY 🎓</h3>
          <div className="subheading mb-3">B.TECH IN INFORMATION TECHNOLOGY</div>
          <div>Data Structures, Algorithms, OOPs, OS, DBMS, Web Development</div>
          <p>CGPA: 7.8</p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">July 2017 - July 2021</span>
        </div>
      </div>
    </Section>
  );
}

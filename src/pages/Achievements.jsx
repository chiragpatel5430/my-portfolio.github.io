import React from "react";
import Section from "../components/Section";

import { BsTrophy } from "react-icons/bs"
import { RiFilePaper2Fill } from "react-icons/ri"

export default function Achievements() {
  return (
    <React.Fragment>
      <Section id="achievements" title="Achievements &amp; Certifications">
        <ul className="fa-ul mb-0">
        <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><RiFilePaper2Fill /></i>
            </span>
            <a href="https://drive.google.com/file/d/1oEbRREiIQzzOkDVNID-dDca8UfDUnVxG/view?usp=sharing" target="_id">
            Google Associate Cloud Engineer (ACE)
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><BsTrophy /></i>
            </span>
            <a href="https://drive.google.com/file/d/1UqdaRp474s5qfdBXrq2PhOC6RBWOrX0Y/view?usp=share_link" target="_id">
            Google Kick Start 2020 Round A
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><BsTrophy /></i>
            </span>
            <a href="https://drive.google.com/file/d/1vtKbNi7dBFJ5tAXVUxUHqfiRPMXkZM5h/view?usp=sharing" target="_id">
              Google Kick Start 2019 Round E
            </a>
          </div>
        </ul>
      </Section>
    </React.Fragment>
  );
}

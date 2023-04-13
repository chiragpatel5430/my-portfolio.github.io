import React from "react";
import Section from "../components/Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Software Engineer</h3>
          <div className="subheading mb-3">Searce Cosourcing Service Pvt Ltd</div>
          <ul>
            <strong>Roles/Responsibilities</strong><br />
            <li>Working on an advertisement booking web application using React Js, Python, MongoDB, and Google Cloud Platform</li>
            <li>Designed Promo Code module, and Complaint module along with admin panel from scratch including developing APIs, database structure, User interfaces, etc</li>
            <li>Designed a GCP Cloud Functions to trigger automatic Email and SMS services for event-driven actions</li>
            <li>Increased and optimized the capacity of concurrent users and reliability of the application using a GCP load balancer</li>
            <li>Created a customer feedback module to measure the satisfaction of the customer after implementing suggested changes which resulted in the growth of the customer retention rate</li>
            <li>Increased online advertisement bookings by 40%  which led to 25% growth in the company's revenue</li>
          </ul>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">June 2021 - Present | Pune</span>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Software Engineer Intern</h3>
          <div className="subheading mb-3">Searce Cosourcing Service Pvt Ltd</div>
          <ul>
            <strong>Roles/Responsibilities</strong><br />
            <li>Implemented a Google Apps Script to check the current rates on production for different types of advertisement in advertisement booking client-based site</li>
            <li>Worked on enhancing and fixing bugs such as UI alignments, portal rate calculate API, etc in a production system</li>
            <li>Created a Customer Relationship Management module from scratch to handle the customer’s queries</li>
          </ul>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">Jan 2021 - Jun 2021 | Pune</span>
        </div>
      </div>
    </Section>
  );
}

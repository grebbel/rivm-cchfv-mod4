# Product Requirements Document (PRD)

## Document Information

- **Document Title:** Online PCR Course - Module 4 - interactive Jennings Graph
- **Version:** 0.1
- **Last Updated:** February 17, 2026
- **Document Owner:** Robert ten Hove
- **Status:** Draft

## 1. Introduction

### 1.1 Purpose

Preparatory document for the development of an interactive Jennings Graph

### 1.2 Scope

Focus on CCHFv Molecular detection for laboratories

### 1.3 Definitions and Acronyms


| Term | Definition         |
| ------ | -------------------- |
| IC   | Internal Control   |
| ctrl | control            |
| SD   | Standard Deviation |
| Ct   | Cycle treshold     |
| UCL  | Upper Control Line |
| Ct   | Lower Control Line |

## 2. Product Overview

### 2.1 Dependencies

- Jenings Graph.csv
- Jenings Graph.xlsx
- script.js

### 2.2 Target Users

- Primary Users:

  - students of the e-learning
- Prerequisites for Users:

  - Basic knowledge of microbiology and virology
  - Prior hands-on experience working in a laboratory environment
  - Computer literacy
- Stakeholders:

  - RIVM (course provider)
  - Central Asian laboratories
  - World Health Organisation

### 2.3 User Problems Solved

- Lack of standardised training materials for CCHF molecular diagnostics across Central Asian laboratories
- Inconsistent laboratory practices leading to variable diagnostic accuracy
- Limited local capacity for safe handling and testing of high-consequence pathogens
- Need for accessible, free training that can be translated and locally adapted

## 3. Requirements

### 3.1 Functional Requirements

Excel functions that are missing from the csv file:



| Column     | Excel Function                                                                                                                                    |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| IC SD      | =STDEV.S($D$2:D7)                                                                                                                                 |
| UCL=Ct+1SD | =D21+1*E21                                                                                                                                        |
| UCL=Ct+2SD | =D21+2*E21                                                                                                                                        |
| LCL=Ct-1SD | =D21-1*E21                                                                                                                                        |
| LCL=Ct-2SD | =D21-2*E21                                                                                                                                        |
| Run result | =IF(AND(D21<=F21; D21>=H21); "Passed"; IF(OR(AND(D21>=F21; D21<G21); AND(D21<H21; D21>=I21)); "Warning"; IF(OR(D21<I21; D21>F21); "Failed"; ""))) |

### 10.1 Deployment Requirements

### 10.2 Installation Requirements

## 4. User Interface
- [x] 4.1 The pop-up in the plot shows the results multiple times. Do you understand what I mean? 
  - **Fixed:** Tooltip now shows detailed info (Ct, Status, SD, Note) only for Ct Value dataset, and shows appropriate labels and values for control limit lines 

- [x] 4.2 The pop-up in the plot shows the results correctly. However, it is hoovering over the plot, obscuring parts of the plot from the user. Propose to have a results panel on the side, instead of hoovering over the plot? What do you think?
  - **Implemented:** Side info panel (280px wide) positioned next to chart showing run details on hover. Tooltips disabled to prevent chart obstruction. Panel displays: Run number, Date, Ct value, Status (color-coded badge), SD, Batch number, and Notes. Responsive design stacks panel below chart on mobile. 
- [x] 4.3 I've added more cycles for the plot. They are updated in the file 'Jennings Graph2.csv'. Import the new date.
  - **Implemented:** Updated with 68 QC runs (was 44). Key additions: Runs 40-44 show escalating warnings (Ct 31.70-32.56), Run 45 initiates new batch (241205063_IC) after 4 consecutive warnings, Run 52 shows pipetting error (Ct 33.50, Failed). Control limits recalculated for new batch at run 51. Mean line now calculated dynamically per batch from control limits.
- [x] 4.4 The plot might now be to narrow. Perhaps you can put the results panel beneath the plot? If it is still to narrow, add a slider for the plot?
  - **Implemented:** Info panel repositioned below chart for full-width visualization. Chart height increased to 450px. Info panel uses responsive grid layout (auto-fit columns, min 200px). Chart now displays all 68 data points clearly without horizontal crowding. Mobile responsive: panel stacks neatly on small screens. 
  - [x] 4.5 'Highlight failures'. There is not much 'highlight' difference when (de)selected. Highlight the failures more. 
  - **Implemented:** Enhanced failure highlighting with: Point size increased from 6 to 10 (vs 4 for normal), 3px dark red border (#8B0000) around failed points, hover radius increased to 12. Toggle now clearly distinguishes failed values from passed/warning points.
  - [x] 4.6 'Show Batch Changes'. No difference is noticed in the plot when the box is selected. Adapt as you think is best.
  - **Implemented:** Batch changes now visualized with: Red vertical dashed lines at batch transitions (run 45), "New Batch" label at top of line, Light red background shading (rgba(255,107,107,0.1)) highlighting 3-run transition zone. Uses Chart.js annotation plugin v3.0.1. 
  - [x] 4.7 import and replace data from Jennings Graph.csv . A few more corrections were made.
  - **Implemented:** Corrected dataset to actual 68 runs from "Jennings Graph.csv". Batch 241205062_IC (runs 1-44): SD 1.52→1.23, control limits 31.59/33.11/28.55/27.03. Batch 241205063_IC (runs 45-68): SD 1.29, control limits 31.35/32.64/28.78/27.49. Two failures: Run 26 (Ct=20.00, contamination from adjacent well), Run 52 (Ct=33.50, pipetting error). Real lab notes preserved including "Who ate my lunch?!" at run 59.  

### 4.1 User Interface Requirements

[List key UI requirements and considerations]

### 4.2 Mockups and Wireframes

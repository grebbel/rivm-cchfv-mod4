
# Task List - CCHFV Module 4 Online Course
## QC/QA for Molecular Detection

**Generated from:** PRD_mod4.md  
**Project:** Online PCR Course - Module 4  
**Owner:** Robert ten Hove (RIVM)  
**Created:** October 12, 2025

---

## 📋 1 Phase 1: Content Plan
**Target Completion:** October 20, 2025

### Documentation Tasks
- [X] **DOC-001** Prepare downloadable resource library
  - Priority: High
  - Assignee: Production Team
  - Duration: 2 days
  - Dependencies: None

### Content plan
- [X] **PLAN-001** Develop course overview and learning objectives
  - Priority: High
  - Assignee: Robert ten Hove
  - Duration: 3 hours
  - Dependencies: None

- [X] **PLAN-002** Create Module 4 content structure and outline
  - Priority: High
  - Assignee: Production Team
  - Duration: 5 hours
  - Dependencies: PLAN-001

- [X] **PLAN-003** Write lesson coverview for QC/QA molecular detection
  - Priority: High
  - Assignee: Robert ten Hove + SMEs
  - Duration: 1,5 days
  - Dependencies: PLAN-002

- [X] **PLAN-004** Create draft interactive simulations and exercises
  - Priority: Medium
  - Assignee: Robert ten Hove
  - Duration: 0,5 days
  - Dependencies: PLAN-003


## 📋 2 Phase 2: Content Creation
**Target Completion:** October 28, 2025

### Content creation
- [X] **CONT-001** Introduction
  - Priority: High
  - Assignee: Robert ten Hove
  - Duration: 0,5 hours
  - Dependencies: PLAN-001, PLAN-002, PLAN-003

- [ ] **CONT-002** Chapter 1
  - Priority: High
  - Assignee: Robert ten Hove
  - Duration: 6 hours
  - Dependencies: PLAN-001, PLAN-002, PLAN-003

- [X] **CONT-003** Chapter 2
  - Priority: High
  - Assignee: Robert ten Hove
  - Duration: 6 hours
  - Dependencies: PLAN-001, PLAN-002, PLAN-003

- [X] **CONT-004** Chapter 3
  - Priority: High
  - Assignee: Robert ten Hove
  - Duration: 6 hours
  - Dependencies: PLAN-001, PLAN-002, PLAN-003

- [ ] **CONT-005** Chapter 4
  - Priority: High
  - Assignee: Robert ten Hove
  - Duration: 6 hours
  - Dependencies: PLAN-001, PLAN-002, PLAN-003

- [ ] **CONT-006** Chapter 5
  - Priority: High
  - Assignee: Robert ten Hove
  - Duration: 6 hours
  - Dependencies: PLAN-001, PLAN-002, PLAN-003

- [ ] **CONT-007** Summary
  - Priority: High
  - Assignee: Robert ten Hove
  - Duration: 6 hours
  - Dependencies: PLAN-001, PLAN-002, PLAN-003


## 📋 3 Phase 3: Review
**Target Completion:** November 07, 2025

### Review Quality Assurance
- [ ] **REV-001** SME content review (first round)
  - Priority: High
  - Assignee: External SME + Internal SME
  - Duration: 7 days
  - Dependencies: CONT-003, DOC-001, xxxxxx

- [ ] **REV-002** Incorporate SME feedback and revisions
  - Priority: High
  - Assignee: Robert ten Hove
  - Duration: 5 days
  - Dependencies: REV-001

- [ ] **REV-003** Final SME approval and sign-off
  - Priority: High
  - Assignee: SMEs + Chantal Reusken
  - Duration: 3 days
  - Dependencies: REV-002

---


# Task List - CCHFV Module 4 Online Course
## QC/QA for Molecular Detection

**Generated from:** PRD_mod4.md  
**Project:** Online PCR Course - Module 4  
**Owner:** Robert ten Hove (RIVM)  
**Created:** October 12, 2025

---

## 📋 4 Phase 1: Content Plan
**Target Completion:** October 20, 2025

### 4.1 Documentation Tasks
- [X] **DOC-001** Prepare downloadable resource library
  - Priority: High
  - Assignee: Production Team
  - Duration: 2 days
  - Dependencies: None

### 4.2 Content plan
- [X] **PLAN-001** Develop course overview and learning objectives
  - Priority: High
  - Assignee: Robert ten Hove
  - Duration: 3 hours
  - Dependencies: None

- [X] **PLAN-002** Create Module 4 content structure and outline
  - Priority: High
  - Assignee: Production Team
  - Duration: 5 hours
  - Dependencies: PLAN-001

- [X] **PLAN-003** Write lesson coverview for QC/QA molecular detection
  - Priority: High
  - Assignee: Robert ten Hove + SMEs
  - Duration: 1,5 days
  - Dependencies: PLAN-002

- [X] **PLAN-004** Create draft interactive simulations and exercises
  - Priority: Medium
  - Assignee: Robert ten Hove
  - Duration: 0,5 days
  - Dependencies: PLAN-003


## 📋 5 Phase: Content Creation
**Target Completion:** February 28, 2026
### Preparations ### 
- [X] **PREP-001** 5.1 Template
  - Prepare template for this module using the previous MODULE 1: all files of MODULE 1 can be found in folder 11_MODULE_1
  - **Completed:** Created index.html, script.js, imsmanifest.xml, copied style.css and scorm-wrapper.js from Module 1
- [X] 5.2 Loose the icons 
  - In the left column with chapter links, remove the small icons. They look ridiculous.
  - **Completed:** Removed all emoji icons from sidebar navigation 


### 6. Content creation
**Transform content from module_4_quality.md to index.html**
- [X] **CONT-001** 6.1 Introduction
  - Dependencies: Mod_4_Quality controlv3_1.md 
  - Update Introduction text.
  - **Completed:** Updated Introduction section with corrected text (fixed typo: "continues" → "continued")
  
- [X] **CONT-002** 6.2 When Quality fails in CCHF diagnosis
  - Dependencies: Mod_4_Quality controlv3_1.md
  - **Completed:** Added complete case study content including Dr. Ayşe Demir case and two multiple choice questions
  
- [X] **CONT-003** 6.2 chapter 1, Multiple Choice Question 1
  - Dependencies: Mod_4_Quality controlv3_1.md
  - Transform MC question 1 to interactive question. 
  - User can only choose one answer.
  - For the correct answer (C) give 20 points.
  - **Completed:** Created interactive quiz with radio buttons, JavaScript validation, and SCORM scoring (20 points for correct answer)

- [X] **CONT-004** 6.4 chapter 1, Multiple Choice Question 2
  - Dependencies: Mod_4_Quality controlv3_1.md
  - Transform MC question 2 to interactive question.
  - User can choose multiple answers 
  - Correct answers are A, B and C. For each correct selected answer give 20 points
  - Incorrect answers are D and E. For each incorrect selected answer substract 20 points.
  - **Completed:** Created interactive multi-select quiz with checkboxes, scoring logic (+20 for correct, -20 for incorrect, minimum 0), and SCORM integration
  
- [X] **CONT-005** 6.5 Chapter 2: The Pre-Analytical Phase
  - Dependencies: Mod_4_Quality controlv3_1.md
  - Add content
  - **Completed:** Added complete Pre-Analytical Phase content including proper collection and labeling guidelines

- [X] **CONT-006** 6.6 Chapter 3: Assay controls
  - Dependencies: Mod_4_Quality controlv3_1.md
  - Add content
  - **Completed:** Added complete Assay Controls content including all five essential components (internal, positive, negative, blank, and quantitative controls) plus UNG-digestion PCR intermezzo

- [X] **CONT-007** 6.7 Chapter 4: Trend analysis
  - Dependencies: Mod_4_Quality controlv3_1.md
  - Add content
  - **Completed:** Added complete Trend Analysis content including IC "buddy" concept, Levy-Jennings plots, Westgard rules, and new reagent lot testing guidelines

- [X] **CONT-008** 6.8 Chapter 4:[Insert interactive Levy-Jennings plot]
  - Dependencies: Mod_4_Quality controlv3_1.md
  - **Completed:** Created fully interactive Levy-Jennings chart using Chart.js with:
    - 44 data points from QC runs showing Ct values over time
    - Color-coded status indicators (Green=Passed, Yellow=Warning, Red=Failed)
    - Control limit lines (Mean, ±1 SD, ±2 SD)
    - Interactive toggles for show/hide control limits and highlight failures
    - Hover tooltips showing run details, date, status, SD, and remarks
    - Batch change detection and visual markers
    - Responsive design for mobile and desktop
    - Implementation of Excel formulas for control limit calculations

- [X] **CONT-009** 6.9 Chapter 5: Proficiency testing
  - Dependencies:  Mod_4_Quality controlv3_1.md
  - Add content
  - **Completed:** Added complete Chapter 5 content including Proficiency Testing (EQC), Personnel Competency training requirements, and Commercial Kits vs In-House Assays validation guidelines

- [X] **CONT-010** Chapter 5: Proficiency testing
  - Dependencies: Mod_4_Quality controlv3_1.md
  - Remove paragraph 'Personal competency
  - Add paragraph 'Where to find reference material?' 
  - **Completed:** Removed Personnel Competency section, added "Where to Find Reference Material?" section with deactivated virus recommendations, BSL-3/4 safety notes, and sources for reference materials 

- [X] **CONT-011** Chapter 6: The Post-Analytical Phase 
  - Dependencies: Mod_4_Quality controlv3_1.md
  - Add to module 4 chapter 6: The post-Analytical Phase
  - Use the same template the other chapters. 
  - Add link to Chapter 6 in left column, between 'Chapter5: Proficiency Testinf' and 'Summary' 
  - If prompt is not clear, please pause and ask for clarification.
  - **Completed:** Added Chapter 6 navigation link in sidebar, created complete Post-Analytical Phase content including Interpreting the Run, Qualitative Reports (LOD), Quantitative Reports (measuring range), and clinical interpretation guidelines with inverse Ct-value correlation

- [ ] **CONT-013** Summary
  - Dependencies: Mod_4_Quality controlv3_1.md
  - Add content

- [ ] **CONT-013** Summary
  - Dependencies: module_4_quality.md


### Assessment Development
- [ ] **ASSESS-001** Design formative knowledge checks
  - Priority: Medium
  - Assignee: Production Team
  - Duration: 6 days
  - Dependencies: PLAN-003

- [ ] **ASSESS-002** Create summative exam questions
  - Priority: Medium
  - Assignee: Robert ten Hove + SMEs
  - Duration: 8 days
  - Dependencies: CONT-003

- [ ] **ASSESS-003** Set pass/fail thresholds and scoring criteria
  - Priority: Medium
  - Assignee: Robert ten Hove + SMEs
  - Duration: 2 days
  - Dependencies: ASSESS-002

## 📋 Phase 3: Review
**Target Completion:** November 07, 2025

### Review & Quality Assurance
- [ ] **REV-001** SME content review (first round)
  - Priority: High
  - Assignee: External SME + Internal SME
  - Duration: 7 days
  - Dependencies: CONT-003, DOC-001, xxxxxx

- [ ] **REV-002** Incorporate SME feedback and revisions
  - Priority: High
  - Assignee: Robert ten Hove
  - Duration: 5 days
  - Dependencies: REV-001

- [ ] **REV-003** Final SME approval and sign-off
  - Priority: High
  - Assignee: SMEs + Chantal Reusken
  - Duration: 3 days
  - Dependencies: REV-002

---


## 🌍 Phase 4: SCORM & Moodle LMS
**Target Completion:** December 12, 2025

## LMS integration tasks
- [ ] **SCORM-001** Build SCORM package
  - Priority: High
  - Assignee: Robert ten Hove
  - Duration: 2 hours
  - Dependencies: REV-003

- [ ] **SCORM-002** Upload SCORM into Moodle LMS
  - Priority: High
  - Assignee: Robert ten Hove
  - Duration: 2 hours
  - Dependencies: REV-003

- [ ] **SCORM-003** Test online course 
  - Priority: High
  - Assignee: Robert ten Hove
  - Duration: 2 hours
  - Dependencies: REV-003

- [ ] **SCORM-004** Incorporate fixes and revisions
  - Priority: High
  - Assignee: Robert ten Hove
  - Duration: 4 hours
  - Dependencies: REV-001


---

## 📊 Summary Statistics
- **Total Tasks:** 84
- **High Priority:** 45 tasks
- **Medium Priority:** 35 tasks  
- **Low Priority:** 4 tasks
- **Estimated Duration:** ~4 months (Sept 2025 - Jan 2026)
- **Key Dependencies:** SME review, translation completion, pilot feedback

---

## 🏷️ Task Categories
- **Content Development:** 22 tasks
- **Technical Implementation:** 18 tasks  
- **Translation & Localization:** 14 tasks
- **Testing & QA:** 12 tasks
- **Launch & Monitoring:** 10 tasks
- **Infrastructure & Support:** 8 tasks

---

## ⚠️ Critical Path Items
1. SME content review and approval
2. Translation completion for target languages
3. Moodle platform configuration and testing
4. Pilot user feedback incorporation
5. Final production deployment

---

*This task list is generated from PRD_mod4.md and should be reviewed and updated regularly as the project progresses.*

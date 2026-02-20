
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

- [X] **CONT-012** Chapter 6: The Post-Analytical Phase 
  - Dependencies: Mod_4_Quality controlv3_1.md 
  - Add to module 4 chapter 4, after paragraph "Testing of New Reagent Lots", the Quiz question: 'Reagent lots quiz question', lines 174-199. 
  - Look in the Levey-Jennings plot above. After run number 44, the control is replaced. What could be the reason for this decision? Tick the correct answer(s).'
  - add the answers, but in random order. 
  - More than one answers can be ticked. 
  - The (in)correct aswers are listed following 'Results and argumentation:' 
  - The user can submit their answers only two times. 
  - After clicking the sumbit answer button the first time, the user received only a score from the total. 
  - After the first try, the user is asked: Try again?. 
  - After submitting the answers the second time, the user received the score together with the explanation of the answers. 
  - **Completed:** Added Quiz 3 to Chapter 4 (Testing of New Reagent Lots section) with 5 randomized options. Quiz tracks 2 submissions: first shows only score with "Try Again" option, second shows full explanation with correct/incorrect answers and scoring breakdown (±15 points for correct, -10 for incorrect answers). 

- [X] **CONT-014** Tweaking quiz question in CONT-012. 
  - after submitting the answers the first time write the score of the maximum score
  - If the users already got the maximum score, then the user receives the explanation of the results. If the user got less then the maximum score, the user received the text:   
  - 📊 First Attempt Score: 20 points from the maximum of 30 points. 
  - Instead of 'Try again to see the detailed explanation.' write 'you can try again one more time.' 
  - **Completed:** Updated checkQuiz3 function to show "X points from the maximum of 30 points" on first attempt. If perfect score (30 points) is achieved, full explanation is shown immediately without requiring second attempt. If score is less than maximum, shows message "📊 First Attempt Score: X points from the maximum of 30 points. You can try again one more time." All feedback messages now include "from the maximum of 30 points" for clarity. 


- [X] **CONT-015** Adding the score thermometer. 
  - In the left column, under the chapters-list, add a score thermometer. The same as used in the other modules. 
  - Do you have access to the other modules we prepared earlier? 
  - **Completed:** Added interactive score thermometer to sidebar in Module 4 with the following features:
    - Visual mercury thermometer with animated fill based on quiz scores (0-100 points)
    - Real-time score display showing current/maximum points
    - Progressive status messages based on score percentage (e.g., "Just getting started!", "Making progress!", "Perfect score!")
    - Color-changing mercury bulb (red → orange → green) indicating performance level
    - Reset Progress button with confirmation dialog
    - Integrated with all quiz scoring functions (Quiz 1: 20 pts, Quiz 2: variable pts, Quiz 3: 30 pts max)
    - CSS styling with thermometer tube, bulb, and marks display
    - Responsive design for mobile and desktop views 


- [X] **CONT-016** Chapter 1 Continue button
  - At the end of Chapter 1, add Continue button. 
  - User will go to chapter 2 after clicking the button.
  - **Completed:** Added continue button at end of Chapter 1 that navigates to Chapter 2  

- [X] **CONT-017** Chapter 2 edit text
  - Replace Sentence "Did the sample arrive in the correct and undamaged container?" by: "Did the sample arrive in the correct and undamed tube? Are the samples safe from contaminations?" 
  - After the "Note". add image
  - **Completed:** Updated text to "Did the sample arrive in the correct and undamaged tube? Are the samples safe from contaminations?"

- [X] **CONT-018** Chapter 2 add image
  - At image at the end. Image path: images/01_RIVM_59-1920.JPG
  - **Completed:** Added laboratory sample handling image at end of Chapter 2 with proper styling 

- [X] **CONT-019** Chapter 2 Continue button
  - At the end of Chapter 2, add Continue button. 
  - User will go to chapter 3 after clicking the button.
  - **Completed:** Added continue button at end of Chapter 2 that navigates to Chapter 3  

- [X] **CONT-020** Chapter 3 Continue button
  - At the end of Chapter 3, add Continue button. 
  - User will go to chapter 4 after clicking the button.
  - **Completed:** Added continue button at end of Chapter 3 that navigates to Chapter 4  

- [X] **CONT-021** Chapter 3 remove headers
- Dependencies: index.html 
  - In Chapter 3, Remove the following headers: 
    - line 508 <h4>Internal Control</h4>
    - line 515 <h4>Positive Control</h4>
    - line 518 <h4>Negative Control</h4>
    - line 521 <h4>Blank Control</h4> 
    - line 529 <h4>Quantitative Control</h4>
  - **Completed:** Removed all 5 control headers (Internal, Positive, Negative, Blank, Quantitative) from Chapter 3 while preserving the content paragraphs

- [X] **CONT-022** Chapter 4 add image slider
  - Template: 13_MODULE_3/CCHF_PCR_course/index.html 
  - Template: 13_MODULE_3/CCHF_PCR_course/script.js
  - Template: Module 3: Principles of PCR, Course chapter PCR principle, The PCR process
  - In module 4, chapter 3: Assays controls, INTERMEZZO: UNG-Digestion PCR. 
  - add Image slider, with the same template as used in 13_MODULE_3/CCHF_PCR_course/
  - Use the following 5 images: images/1_Uracil.png, 2_Uracil.png, 3_Uracil.png, 4_Uracil.png. 5_Uracil.png
  - Make sure that the size of the images in de slides are adapted to the same proportions.
  - **Completed:** Added interactive image slider with 5 slides showing the UNG-Digestion PCR process (Uracil Incorporation, UNG Treatment, Carryover Elimination, PCR Amplification, Clean Results). Included Previous/Next navigation buttons, progress bar, and step counter. JavaScript functionality embedded in HTML for slide navigation and progress tracking. 

- [X] **CONT-023** Chapter 4 add image slider Tweak
  - Place the text 'Step 1: Uracil Incorporation' above the image.
  - Remove the explainig text below :'Deoxyuridine triphosphate (dUTP) is incorporated into PCR reactions in place of deoxythymidine triphosphate (dTTP). This creates amplicons that contain uracil instead of thymine, marking them as newly synthesized DNA for this reaction.' 
  - Make the image larger. 
  - Do the same for the other slides. 
  - **Completed:** Moved all slide titles above their images, removed the descriptive paragraphs, and increased slide image size.

- [X] **CONT-024** Chapter 4 add image slider more Tweaks
- Make the last 'Next' button grey / non-clickable 
- Make the <div class="progress-fill" id="uracilProgressFill"></div> one solid colour. 
- Enlarge the images so they fit the white space with less margins around them. 
  - **Completed:** Disabled the Next button on the final slide, forced a solid progress-fill color, and reduced slider padding with larger max image size.

- [X] **CONT-025** Chapter 4 Trying to make the images fill the white container
  - Put the Step 1, 2, 3, 4 and 5 texts the the next/previous button containers. 
  - The try to make the images in de slider larger. 
  - **Completed:** Moved step titles into the navigation area, removed slide titles, and increased the uracil slider image area by reducing padding and raising the slider height.

- [X] **CONT-026** Adding Continue buttons
- Chapters 1, 2 and 3 have a continue button at the end. Place continue buttons also to Introductiom chapter 4, 5 and 6. 
  - **Completed:** Added continue buttons to Introduction (to Chapter 1), Chapter 4 (to Chapter 5), Chapter 5 (to Chapter 6), and Chapter 6 (to Summary).

- [X] **CONT-027** Footer text
- Each chapter has the footer text © 2025 RIVM - National Institute for Public Health and the Environment Module 4: Quality Control and Quality Assurance in CCHF Molecular Diagnostics. 
- Remove the sentence 'Module 4: Quality Control and Quality Assurance in CCHF Molecular Diagnostics. ' 
- Centralize the sentence '© 2025 RIVM - National Institute for Public Health and the Environment' 
  - **Completed:** Removed the module-specific footer line and centered the remaining copyright line.

- [ ] **CONT-030** Summary
  - Dependencies: Mod_4_Quality controlv3_1.md 
  - Add content for Summary


### Make modules uniform

- [ ] **UNIF-001** Make scoring thermometer modules 1 and 3 the same as in module 4
- [ ] **UNIF-002** Make overview of scoring and recalc
- [ ] **UNIF-003** Write '© 2025 RIVM - National Institute for Public Health and the Environment' underneath each chapter in each module. Add een extra tab from the left. 




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

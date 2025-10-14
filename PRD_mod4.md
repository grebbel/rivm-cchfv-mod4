# Product Requirements Document (PRD)

## Document Information
- **Document Title:** Online PCR Course - Module 4 - QC/QA for molecular detection
- **Version:** 0.1
- **Last Updated:** September 23, 2025
- **Document Owner:** Robert ten Hove
- **Status:** Draft

## 1. Introduction
### 1.1 Purpose
Preparatory document for the course module development

### 1.2 Scope
Focus on CCHFv detection for laboratories in Central Asian Countries

### 1.3 Definitions and Acronyms
| Term | Definition |
|------|------------|
| QC | Quality Control |
| QA | Quality Assurance |
| QM | Quality Management |

## 2. Product Overview
### 2.1 Product Description
Fourth module for online course Molecular Diagnostics of Crimean-Congo hemorrhagic fever virus. This course explains the fundamentals of performing molecular diagnostics of Crimean-Congo hemorrhagic fever (CCHF) virus, safely and reliably. The course is designed for laboratory staff in Central Asia and will be translated into local languages. The course is available for free on the RIVM Moodle platform.

### 2.2 Target Users
- Primary Users:
  - Laboratory staff in Central Asian microbiology laboratories
  
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
| ID | Requirement | Priority | Status |
|----|------------|----------|---------|
| FR-01 | Provide modular online course content (text, video, simulations) covering CCHF molecular diagnostics | High | Started |
| FR-02 | Provide discussion forums and periodic live Q&A with subject matter experts | Optional | Not Started |
| FR-03 | Include knowledge checks and optional exam for certification | Medium | Not Started |
| FR-04 | Provide downloadable protocols and SOP templates for QC/QA and molecular workflows | Optional | Not Started |
| FR-05 | Translate course content into local languages used in Central Asia (e.g., Russian, Uzbek, Kazakh) | High | Not Started |

### 3.2 Non-Functional Requirements

High-level test cases:
- Content accuracy review by subject matter experts (SMEs)
- Accessibility checks (WCAG) and mobile responsiveness testing
- Localization QA for each translated language
- Forum and Q&A workflow testing (post, reply, moderator actions)
- Certificate issuance and download flow
- Host content on RIVM Moodle platform | Leverage existing LMS features for course delivery and tracking 
### 10.1 Deployment Requirements
- Deploy parts of course on RIVM Moodle staging environment for public review before final public release
- Pilot deployment to a selected group of Central Asian partner laboratories
- Monitor usage, errors, and learner feedback during pilot phase and iterate
- Exportable completion certificates (PDF) | Include course and learner metadata 
### 10.2 Installation Requirements
- Moodle plugins for certificates, forums, and media embedding must be installed and configured
- Access to RIVM media server or an approved third-party CDN for video hosting
- Ensure backups and disaster recovery plan for course content and user data

## 4. User Interface
### 4.1 User Interface Requirements
[List key UI requirements and considerations]
### 4.2 Mockups and Wireframes
| Content Draft Complete | All module content drafted and SME-reviewed | 2025-11-15 |
| Translations Complete | Course translated into target local languages | 2025-12-10 |
| Staging Launch | Course deployed to Moodle staging for pilot testing | 2026-01-05 |
# Product Requirements Document (PRD)

## Document Information
- **Document Title:** Online PCR Course - QC/QA for molecular detection
- **Version:** 0.1
- **Last Updated:** September 23, 2025
- **Document Owner:** Robert ten Hove
- **Status:** Draft

## 1. Introduction
### 1.1 Purpose
Preparatory document for the development of Module 4 of the online course: "Molecular Diagnostics of Crimean-Congo Hemorrhagic Fever Virus". This PRD defines learning objectives, functional and technical requirements, deployment and testing needs, and acceptance criteria for the module.

### 1.2 Scope
This PRD covers Module 4 content focused on QC/QA for molecular detection of CCHF virus and all learning artifacts required for delivery through the RIVM Moodle platform. It does not cover in-person logistics for the optional hands-on component beyond recommending a pilot timetable and resources.

### 1.3 Definitions and Acronyms
| Term | Definition |
|------|------------|
| QC | Quality Control |
| QA | Quality Assurance |
| QM | Quality Management |
| CCHF | Crimean-Congo Hemorrhagic Fever |
| LMS | Learning Management System |

## 2. Product Overview
### 2.1 Product Description
Fourth module for the online course "Molecular Diagnostics of Crimean-Congo Hemorrhagic Fever Virus". The module explains the fundamentals of performing molecular diagnostics for CCHF virus with emphasis on safe specimen handling, quality control (QC), quality assurance (QA), and troubleshooting. The module is designed for microbiology laboratory staff across Central Asia and will be translated into local languages. Delivery will be on the RIVM Moodle platform and will be free to participants.

### 2.2 Target Users
- Primary Users:
  - Laboratory staff and technical personnel in Central Asian microbiology laboratories

- Prerequisites for Users:
  - Basic knowledge of microbiology and virology
  - Prior hands-on experience working in a laboratory environment
  - Basic computer literacy to navigate online platforms

- Stakeholders:
  - RIVM (course owner and host)
  - Central Asian public health institutes and laboratories
  - World Health Organization (regional offices)

### 2.3 User Problems Solved
- Lack of standardised training materials for CCHF molecular diagnostics across Central Asian laboratories
- Inconsistent laboratory practices leading to variable diagnostic accuracy
- Limited local capacity for safe handling and testing of high-consequence pathogens
- Need for accessible, free training that can be translated and locally adapted

## 3. Requirements
### 3.1 Functional Requirements
| ID | Requirement | Priority | Status |
|----|------------|----------|---------|
| FR-01 | Provide modular online course content (text, video, simulations) covering CCHF molecular diagnostics | High | Not Started |
| FR-02 | Provide discussion forums and scheduled live Q&A sessions with subject matter experts | Medium | Not Started |
| FR-03 | Include formative knowledge checks in each module and an optional summative exam for a certificate of completion | Medium | Not Started |
| FR-04 | Provide downloadable SOPs, protocols, checklists and QC templates for laboratory use | High | Not Started |
| FR-05 | Provide multi-language support (translations and subtitles) for the primary target languages in Central Asia | High | Not Started |

### 3.2 Non-Functional Requirements
| ID | Category | Requirement | Priority |
|----|----------|------------|----------|
| NFR-01 | Performance | Course pages and media should render and be usable within 3 seconds on a typical broadband connection | Medium |
| NFR-02 | Security | Authentication for learner accounts; restrict exam access and certificate issuance to authenticated users | High |
| NFR-03 | Usability | Navigation should be intuitive, mobile-friendly and meet WCAG 2.1 AA accessibility where feasible | High |
| NFR-04 | Availability | Hosted on RIVM Moodle with targeted 99% uptime during peak hours in Central Asian time zones | Medium |

### 3.3 Technical Requirements
| ID | Requirement | Notes |
|----|------------|-------|
| TR-01 | Host content on RIVM Moodle LMS | Leverage Moodle courses, activities, and certificate plugins |
| TR-02 | Multimedia formats: MP4 for video, PDF for downloads, HTML5 interactive elements | Provide subtitle files (SRT) for translations |
| TR-03 | Certificate generation (PDF) with verifiable metadata | Include user name, institution, module, date, and score where applicable |

## 4. User Interface
### 4.1 User Interface Requirements
The module UI will follow the RIVM Moodle theme and must:
- Present a clear module structure (Overview, Lessons, Assessments, Resources)
- Display a progress bar and completion indicators per learner
- Include embedded multimedia players with subtitle support and downloadable transcripts
- Provide clearly labelled downloadable resources (SOPs, checklists)
- Offer forum pages with threading, moderation, and links to scheduled Q&A sessions
- Include a readability check for all course text and subtitles (target Flesch–Kincaid readability appropriate for technical audiences; ensure translations preserve clarity)

### 4.2 Mockups and Wireframes
Add links to Moodle page prototypes, screenshots or Figma files here once available.

## 5. Data Requirements
### 5.1 Data Objects
Main data objects and core attributes:
- User Profile: user_id, name, email, IP-addres, preferred_language
- Course Module: module_id, title, description, duration_hours, resource_links
- Assessment Record: assessment_id, user_id, score, max_score, date_taken, certificate_id
- Forum Post: post_id, module_id, user_id, timestamp, content, parent_post_id

### 5.2 Data Validation Rules
- User email must be valid and unique within the LMS
- Assessment scores must be numeric and between 0 and defined maximum
- Uploaded resources must conform to allowed file types (PDF, MP4, JPG/PNG for images)

## 6. System Integration
### 6.1 External Systems
- RIVM Moodle LMS (primary host)
- Video hosting/CDN (RIVM media server or approved third-party) for streaming
- Translation/localisation services or tools for multi-language support
- Email/notification service for announcements, reminders and Q&A scheduling

### 6.2 APIs
- Moodle REST API for user enrolment, progress tracking and certificate issuance
- CDN/video platform APIs for embedding, streaming and analytics
- Optional translation API for draft translations (human review required)

## 7. Security Requirements
- Authentication: account-based access for learners and role-based permissions for trainers/moderators
- Authorization: role-based controls for course authoring, moderation, and certificate issuance
- Data privacy: adhere to RIVM data handling policies and applicable regulations for personal data
- Content protection: label and control distribution of sensitive SOPs; use licensing statements for downloads

## 8. Performance Requirements
- Target support for 200 concurrent learners with acceptable UX
- Use CDN for media to reduce origin server load and improve playback in target regions
- Page navigation and media startup times targeted under 2–3 seconds on typical broadband

## 9. Testing Requirements
### 9.1 Testing Types
- Content review by SMEs (subject matter experts)
- Functional testing (links, downloads, multimedia playback)
- Accessibility and responsiveness testing (WCAG and mobile)
- Localization QA for each translated language
- Pilot user acceptance testing with partner labs

### 9.2 Test Cases
- Verify module navigation and progress tracking for a sample user
- Validate knowledge-check scoring and pass/fail thresholds
- Confirm certificate generation and download contains correct metadata
- Validate forum posting, moderation, and Q&A scheduling workflows
- Confirm translated content and subtitles match source meaning (linguistic QA)

## 10. Deployment
### 10.1 Deployment Requirements
- Deploy module to a Moodle staging site for SME review and pilot testing before public release
- Pilot with selected Central Asian partner laboratories to validate content and technical behaviour
- Monitor error logs, user feedback and analytics during pilot and first four weeks post-launch

### 10.2 Installation Requirements
- Ensure required Moodle plugins (certificate, media embedding, forum moderation) are installed and up to date
- Provision access to RIVM media server or approved CDN for hosting videos
- Establish backups and a content recovery plan for course materials and user data

## 11. Timeline and Milestones
| Milestone | Description | Target Date |
|-----------|------------|-------------|
| Content Draft Complete | All module content drafted and SME-reviewed | 2025-11-15 |
| Translations Complete | Course translated into target local languages | 2025-12-10 |
| Staging Launch | Course deployed to Moodle staging for pilot testing | 2026-01-05 |
| Public Launch | Course goes live on RIVM Moodle | 2026-01-20 |

## 12. Risks and Mitigation
| Risk | Impact | Probability | Mitigation Strategy |
|------|--------:|------------:|-------------------|
| Insufficient SME review capacity | Content inaccuracies | Medium | Schedule SME reviews early; allocate reviewers across institutions |
| Translation delays | Delayed launch in target languages | Medium | Prioritise core content; engage bilingual SMEs for faster review |
| Limited internet access in target regions | Reduced accessibility and participation | High | Provide low-bandwidth options: transcripts, compressed videos and downloadable resources; use CDN

## 13. Approval
| Role | Name | Signature | Date |
|------|------|-----------|------|
| Product Owner | RIVM | | |
| Technical Lead |  Robert ten Hove| | |
| Project Manager | Saskia Rutjes  | | |
| Production 1 | Robert ten hove  | | |
| Production 2 | Joris Sprokholt  | | |
| Production 3 | Lance Presser | | |
| Production 4 | Casper Jamin  | | |
| Liason officer | Chantal Reusken | | |

## 14. Document History
| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 0.1 | September 23, 2025 | Robert ten Hove | Initial draft and population for Module 4 |

## Appendix
### A. Supporting Documents
- Course Introduction page: `Introduction_course.html`
- Existing modules and SOPs repository (link to RIVM internal repo if applicable)

### B. References
- WHO guidance on CCHF diagnostics
- RIVM internal QC/QA SOP templates
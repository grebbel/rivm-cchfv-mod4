Quality control and assurance in molecular testing


# Contents

[Introduction	1](#_Toc214454853)

[When Quality fails in CCHF diagnosis	2](#_Toc214454854)

[The Pre-Analytical Phase	3](#_Toc214454855)

[Proper collection and labeling	3](#_Toc214454856)

[Assay controls	4](#_Toc214454857)

[Trend analysis	5](#_Toc214454858)

[Routine trend monitoring	5](#_Toc214454859)

[Testing of new reagent lots	6](#_Toc214454860)

[Proficiency testing	6](#_Toc214454861)

[Personnel competency	6](#_Toc214454862)

[Commercial kits versus in-house assays	6](#_Toc214454863)

[Where to find reference material?	7](#_Toc214454864)

[The Post-Analytical Phase	8](#_Toc214454865)

[Interpreting the Run	8](#_Toc214454866)




# Introduction

In the previous chapter we already discussed some controls and calibrators of the real-time PCR assay. In this chapter we will elaborate more on technical quality indicators of the assay, among others the validation of the test and continued control assessment, for example with proficiency testing.

We will NOT discuss here the quality management aspects such as facilities, safety, assessments and so on.

By the end of this chapter, you will be able to:

- Setup a technical control system for your assay, containing

  - Use of correct assay controls

  - Interpret trend analysis

  - Use of correct reference materials

  - Perform proficiency testing

  - Know when reagent lots need to be tested

  - Describe the main Standard Operation procedures

- Recognize non-conformities and act upon these.

Good luck and enjoy this chapter.

# When Quality fails in CCHF diagnosis

(based on an actual case from Iran, adapted for this course)

Dr. Ayşe Demir, an infectious disease physician at a regional hospital in eastern Turkey, received a critical call from her laboratory on a Friday afternoon. A 42-year-old livestock farmer had presented to the emergency department with high fever (39.5°C), severe headache, myalgia, and thrombocytopenia (platelet count: 45,000/µL). He reported removing multiple ticks from his body three days earlier while working with sheep.

Given the endemic nature of CCHF in the region and the classic presentation, Dr. Demir immediately ordered CCHF real-time RT-PCR testing on the patient's serum sample. The laboratory used a commercial RT-PCR kit targeting the S-segment of the CCHFV genome. Within 6 hours, the result came back: POSITIVE for CCHF virus with a Ct value of 34.

The patient was isolated and treated for CCHF, his family and healthcare workers were placed under surveillance, and public health authorities mobilized.

However, the patient’s rapid clinical recovery contradicted the typical CCHF course. Repeat CCHF PCR and serology were negative, while *Anaplasma phagocytophilum* PCR returned positive. 

Further investigation revealed a critical quality control failure: On the same day the farmer's sample was processed, the laboratory prepared high viral load CCHF-positive control sample (from a confirmed case with viral load \>108 copies/mL) in the same Laminar Flow Cabinet. Cross-contamination during manual extraction (high-load positive control processed before the patient) was the likely culprit—pipette and spatial workflow lapses had not been mitigated. Negative extraction controls had not been included that day. 

The outcome: The patient underwent unnecessary CCHF treatment and isolation. There was delayed diagnosis (and therapy) of his actual illness, unnecessary public health interventions, and considerable distress to all involved.

The true diagnosis was human granulocytic anaplasmosis, a tick-borne infection with overlapping symptoms but completely different treatment requirements and prognosis.

**Multiple Choice Question 1**

Which of the circumstances explains the incorrect CCHF RT-PCR diagnosis in this case?

A) The positive predictive value of CCHF PCR is always low in mild clinical cases in endemic regions

B) Cross-reaction of Anaplasma DNA with the CCHF PCR probe due to tick-borne pathogen co-infections 

C) Carryover contamination from a high-load positive control processed close to the patient’s sample, combined with lapses in spatial and procedural workflow and absence of extraction controls 

D) Primer mismatch due to local CCHF virus genetic diversity, resulting in a false positive signal 

E) Hemolysis of the patient’s blood sample led to non-specific PCR amplification


Answer Question 1: C


**Multiple Choice Question 2**

Which of the following procedural adjustments, based on the described incident details, would have helped prevent this quality control failure? (Select one or more.)

A) Mandate that extraction of positive control and high-risk clinical samples occurs last in the batch, after all (unknown) clinical samples. 

B) Physically separate pre- and post-PCR work areas. 

C) Include negative extraction controls in each run and review their results before authorizing patient results. 

D) Use only serological assays to pre-screen samples before CCHF PCR. 

E) Assign less experienced staff to process only negative controls, not clinical samples. 


Question 2: A, B, C (All directly address risk reduction steps highlighted or implied in the scenario. D is incorrect—serology alone would not solve a contamination problem; E is not a logical or safe quality practice.)


# The Pre-Analytical Phase

The first step of quality control happens before the main test begins, before the sample reaches our instruments. This is a critical step as studies have shown that the majority of laboratory errors occur here. 

## Proper collection and labeling

Is the sample labeled? Preferably with at least two unique patient identifiers to make sure that we are testing the right person. 

Did the sample arrive in the correct and undamaged container? For example, preservatives such as alcohol, heparin and formaldehyde inhibit the PCR. 

Are the laboratory and technicians ready to process the samples? 

Once the samples have been accepted for the analysis, the process of analytical testing van begin. 

\[INSERT PHOTOS OF INPROPER CONTAINERS\] (blood bag; Envelope with no name on it)

# Assay controls

Federal regulations require the use of controls, and they are very specific for molecular amplification tests.

Control procedures must be established to monitor the test system over time and detect immediate errors due to factors like test system failure, poor environmental conditions, or operator error. 

Essential Components of the Real-Time PCR Control System:

	Internal control

	Positive control

Negative control

	Blank control

Quantitative control

	

**Internal control** is a nucleic acid sequence that is amplified alongside the target nucleic acid in the same reaction. It is differentiated from the target amplicon using a sequence-specific probe tagged with a reporting dye that fluoresces at a different wavelength. The IC provides intelligence to call a test "indeterminate" rather than "negative" if it fails to amplify, indicating chemical system inhibition. Amplification of an IC (either endogenous or spiked) is recommended to ensure inhibitors are not interfering with the assay. Morphology of internal control similar as target -\> Do not use viruses as internal control for assay for detection of bacterial spores. Internal control worked, so the extraction must be right, whereas in reality, it takes a lot more to break up spores. 

**Positive control**: Used to demonstrate the ability of the test to detect a target when it is present (analytical sensitivity). It should contain a **clinically relevant amount of analyte (EXPLAIN). High and low positive (near LOD). **

**Negative control. **A known negative clinical specimen run alongside the unknown sample, but with internal control. 

**Blank control**: the blank should contain the complete reaction mixture *except* nucleic acids (adding used elution buffer). Its use is mandatory to monitor for carry-over contamination (amplification contamination).


**INTERMEZZO**

“uracil-DNA glycosylase (UDG) or UNG-digestion PCR.” In this approach, deoxyuridine triphosphate (dUTP) is incorporated into PCR reactions in place of deoxythymidine triphosphate (dTTP), creating amplicons that contain uracil instead of thymine. Before performing the PCR, the reaction mixture is treated with uracil-N-glycosylase (UNG or UDG), which digests or removes any uracil-containing DNA. This step eliminates carryover contamination from previous PCRs, as only newly synthesized DNA (without uracil) will be amplified in the reaction. This technique is often referred to as “UNG-digestion” or “carryover prevention PCR” or simply “dUTP/UNG system. For digesting potential previous reaction products to prevent contamination, making it highly valuable for sensitive applications. \[INSERT IMAGE CLARIFYING UDG\] 


**Quantitative control:** Quantitative procedures must include **two control materials of different concentrations** (calibrators) in each run. 

\[INSERT IMAGE OF PLOT WITH TWO CONTROLS AND SLOPE\]



# Trend analysis

If the sample contains substances that inhibits the PCR, it can be detected with the Internal Control (IC). When we purify nucleic acids, we remove proteins and other substances that could interfere with the test. Any left-over inhibitors will interfere with the IC. Think of the IC as a "buddy" that goes through the entire extraction and amplification process alongside the patient's own nucleic acids. If the patient's sample is truly negative for the target we're looking for, the IC *must *still amplify successfully. If the IC "buddy" doesn't show up at the end of the test, or shows up late, it tells us that something went wrong along the way —either the extraction failed or something in the sample inhibited the PCR reaction. How do you know an IC-buddy in one of the patient sample ‘is late’? For this, we can compare the IC-buddy in our negative extraction control (no patient material added) with our IC-buddies in the clinical samples. 

\[INSERT TABLE WITH CONTROLS; later we will add to it SD\] 

The same applies for our positive controls. Keeping track of Ct-values from positive controls can help you to analyse the root cause of false positive/negative outcomes. How? We will explain this next. 

## Routine trend monitoring

One specific method utilized in laboratories for monitoring Ct values is the implementation of **Levy-Jennings plots,** and applying **Westgard rules** on the plots. 

\[Insert interactive Levy-Jennings plot\]

- Mean Value, Standard Deviation (SD), and Coefficient of Variation (%CV)

- Westgard rules 

[https://www.spcforexcel.com/knowledge/measurement-systems-analysis-gage-rr/levey-jennings-charts/](https://www.spcforexcel.com/knowledge/measurement-systems-analysis-gage-rr/levey-jennings-charts/) 


## Testing of new reagent lots

When we receive a new batch (lot) of reagents, we test it side-by-side with the old lot to confirm it performs identically before we put it into clinical use.




# Proficiency testing

External Quality Surveillance (Inter-Laboratory Comparison)

**External Quality Control (EQC):** EQC samples are periodically run alongside routine assays to verify the integrity of the reagent and the successful extraction of nucleic acid, often assessed **based on the Ct value** compared to an endogenous control.

Several times a year (and at a minimum, twice per year), an external, independent agency sends us a panel of "unknown" samples to test. We don't know the expected results. We process these samples exactly like patient specimens and send our results back. This process, known as proficiency testing, is a critical, objective way to verify that our entire testing system—our people, our methods, and our machines—is producing accurate results that are comparable to those from other top labs.

# Personnel competency

Every team member's skills are regularly assessed to ensure they can perform tests accurately, interpret results correctly, and troubleshoot problems effectively. A laboratory technician is trained by a senior technician. Together, they carry out the testing procedures from start to finish. When the senior technician considers that the laboratory technician is capable of performing the test independently, this is recorded in a Quality Management document. 

The technician should also sign the relevant SOP stating that she/he has read and understood the procedure. 

Personal competency also includes ongoing training and continuing education to stay current with the latest technologies and procedures. 

# Commercial kits versus in-house assays

Commercial require **Verification**: The purpose is to confirm that the test performs as expected according to the manufacturer's established performance characteristics, in the laboratory's specific environment. 

In-house assays requires **Validation**: Here the purpose is to establish the test's performance characteristics from scratch, as no performance data is supplied by a manufacturer. Performance characteristics that need to be tested are Accuracy, Precision, Analytical sensitivity (lower limit of target detection), Reportable range of test results, reproducibility and analytic specificity. 

There is also a midway, by setting up an assay that is described in an scientific article. In consultation with the quality manager a verification/validation plan can be made which meets national quality requirements. 


| **Name** | **Info** | **URL** |
| - | - | - |
| VIASURE CCHFv Real Time PCR Detection Kit | For detection of CCHFV RNA in serum, blood, or fluids from symptomatic patients, RT-PCR with fluorescent probes. | https://www.certest.es/products/viasure-crimean-congo-haemorrhagic-fever-virus-real-time-pcr-detection-kit/ |
| Bioperfectus Crimean-Congo Hemorrhagic Fever Virus Real Time PCR Kit | Qualitative detection of CCHFV RNA in human serum/plasma, based on real-time PCR technology. | https://www.bioperfectus.com/crimean-congo-hemorrhagic-fever-virus-real-time-pcr-kit/ |
| LightMix\\'ae Modular Crimean Congo Virus (Roche) | RUO kit for 96 PCR reactions, detects 78 bp fragment in CCHFV nucleocapsid gene using RNA extracts. | https://diagnostics.roche.com/global/en/products/params/lightmix-modular-crimean-congo-virus-cchfv.html |
| NZYtech Crimean Congo Haemorragic Fever virus RT-qPCR Kit | Duplex probe-based qPCR, for broad inclusivity, specific/exclusive detection of CCHFV genomes. | https://www.nzytech.com/en/products/detail/crimean-congo-haemorragic-fever-virus-rt-qpcr-kit |
| Bioeksen Bio-Speedy CCHFV RT-qPCR Detection Kit | Qualitative detection from whole blood, serum, plasma samples; probe RT-qPCR format. | https://www.bioeksen.com/en/cchfv-rt-qpcr-detection-kit |
| Genetic PCR Solutions (GPS) CCHFV dtec-RT-qPCR Kit | Specific targeted reagents for CCHFV detection by qPCR; compatible with all qPCR devices. | https://www.geneticpcr.com/product/cchfv-rt-qpcr-kit/ |
| Biopremier Real Time PCR Detection Kit CrimeanCongo | Singleplex qPCR kit, primers and probes for detection of CCHFV; includes internal controls. | https://biopremier.com/product/real-time-pcr-detection-kit-crimean-congo-haemorrhagic-fever-virus/ |
| Altona Diagnostics RealStar CCHFV RT-PCR Kit 1.0 | In vitro diagnostic kit, real-time PCR, includes heterologous internal control for CCHFV RNA detection. | https://www.altona-diagnostics.com/en/products/realstar/realstar-cchfv-rt-pcr-kit-1-0.html |
| genesig Standard Real-Time PCR Detection Kit for CCHFV | Up to 150 tests per kit, standard real-time PCR for CCHFV with simple workflow. | https://www.scientificlabs.co.uk/product/CCHFV |
| Biofargo CCHFV Probe qRT-PCR Kit | Probe-based quantitative RT-PCR kit for sensitive and specific viral RNA quantification. | https://www.biofargo.com/product/cchfv-probe-qrt-pcr-kit/ |
| Creative Biogene Crimean-Congo Hemorrhagic Fever Virus Real Time RT-PCR Kit | Real-time RT-PCR kit for qualitative detection of CCHFV RNA, supplied by Creative Biogene. | https://www.creative-biogene.com/crimean-congo-hemorrhagic-fever-virus-real-time-rt-pcr-kit-6110.html |


## Where to find reference material? 

Use preferably deactivated virus instead of clean Nucleic Acid constructs such as plasmids or cDNA. A positive control has to simulate NA extraction from real-virus particles. For example if during extraction proteinase-K was not added, this would be visible in the positive virus control, in contrast when using clean cDNA. 

Handling any infectious CCHF material requires BSL-3/4 precautions; most suppliers only offer non-infectious, synthetic, or recombinant standards suitable for validation without special containment. 


Commercial kits as described above contain well defined positive controls. 


Ask other laboratories, reference labs, together with their results. Check which platform and extraction method they are using. 

Use positive samples from a proficiency testing panel. 


# The Post-Analytical Phase 

## Interpreting the Run

Results must be reported accurate, clear, and provide the necessary context for the ordering physician. 

**Qualitative Reports:** These provide a simple "Positive/Detected" or "Negative/Not Detected" answer. A Ct-value often doesn’t mean much to a physician. 

To help physicians interpret a negative result, the report must always include the test's **Limit of Detection (LOD)**—the smallest amount of the target the test can reliably detect. LOD of CCHF detection kits? 

**Quantitative Reports:** These provide a numerical value, such as a viral load (e.g., 50,000 copies/mL). These reports must state the test's **analytic measuring range**. A result can be reported as 

- a specific number (if within the range) with the actual quantity along with the unit (for example copies per ml), 

- or as "above limit of quantification/ measuring range" 

- or "below the limit of quantification, not detected, not accurately quantifiable, or whatever is applicable.  

Including an **interpretive guideline** helps the physician in patient diagnosis and subsequent treatment. Physician might associate a low Ct value such as Ct=23,1 as a light infection, while its actually the outcome of infection is inversely correlation with the Ct value. A lower Ct value signifies a higher viral load and thus a worse prognosis. The quantitative detection of a viral load of ≥1 x 10⁹ copies/ml is a specific indicator of poor prognosis. 

The laboratory can also recommend additional serological testing if two weeks have passed since the onset of symptoms. 

\[Insert graph?\]






document.addEventListener('DOMContentLoaded', () => {

    // Course Progress Tracking
    let courseProgress = {
        chaptersVisited: new Set(),
        totalChapters: 8, // Introduction + 6 chapters + Summary
        quizzesCompleted: { 
            quiz1: false,
            quiz2: false
        },
        startTime: new Date(),
        interactions: [],
        bookmarks: [],
        sessionData: {
            loginTime: new Date().toISOString(),
            timeSpent: 0,
            pagesVisited: 0
        }
    };

    // Initialize SCORM
    if (window.scormAPI && window.scormAPI.isScormAvailable()) {
        console.log('✅ SCORM tracking active');
        window.scormSetProgress(0);
    }

    // Chapter Navigation Logic
    const chapterItems = document.querySelectorAll('.chapter-item');
    const contentSections = document.querySelectorAll('.content-section');

    chapterItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all chapters and sections
            chapterItems.forEach(chapter => chapter.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked chapter
            this.classList.add('active');
            
            // Get and show corresponding content section
            const tabId = this.dataset.tab;
            const targetSection = document.getElementById(tabId);
            
            if (targetSection) {
                targetSection.classList.add('active');
                
                // Track chapter visits
                courseProgress.chaptersVisited.add(tabId);
                updateCourseProgress();
                
                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    // Update Course Progress
    function updateCourseProgress() {
        const progressPercent = (courseProgress.chaptersVisited.size / courseProgress.totalChapters) * 100;
        const progressFill = document.getElementById('courseProgress');
        const progressText = document.getElementById('progressText');
        
        if (progressFill) {
            progressFill.style.width = progressPercent + '%';
        }
        if (progressText) {
            progressText.textContent = Math.round(progressPercent) + '%';
        }

        // Update SCORM progress
        if (window.scormAPI && window.scormAPI.isScormAvailable()) {
            window.scormSetProgress(progressPercent);
            
            // Mark as complete if 100%
            if (progressPercent >= 100) {
                window.scormAPI.setValue('cmi.completion_status', 'completed');
                window.scormAPI.setValue('cmi.success_status', 'passed');
            }
        }
    }

    // Quiz functionality (placeholder for future implementation)
    function initializeQuizzes() {
        // Quiz initialization code will be added here
        console.log('Quiz functionality ready to be implemented');
    }

    // Quiz 1 - Single Choice Question
    window.checkQuiz1 = function() {
        const form = document.getElementById('quiz1-form');
        const selectedAnswer = form.querySelector('input[name="quiz1"]:checked');
        const feedback = document.getElementById('quiz1-feedback');
        
        if (!selectedAnswer) {
            feedback.style.display = 'block';
            feedback.className = 'quiz-feedback warning';
            feedback.innerHTML = '⚠️ Please select an answer before submitting.';
            return;
        }
        
        const answer = selectedAnswer.value;
        const correctAnswer = 'C';
        
        // Disable all inputs after submission
        const inputs = form.querySelectorAll('input[type="radio"]');
        inputs.forEach(input => input.disabled = true);
        
        // Disable submit button
        const submitBtn = form.querySelector('.submit-quiz-btn');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitted';
        
        if (answer === correctAnswer) {
            feedback.style.display = 'block';
            feedback.className = 'quiz-feedback correct';
            feedback.innerHTML = '✅ <strong>Correct!</strong> You earned 20 points.<br><br>Answer C is correct: Carryover contamination from the high-load positive control processed before the patient\'s sample, combined with workflow lapses and absence of extraction controls, explains the false positive result.';
            
            // Update quiz completion status
            courseProgress.quizzesCompleted.quiz1 = true;
            
            // Award points via SCORM
            if (window.scormAPI && window.scormAPI.isScormAvailable()) {
                const currentScore = parseFloat(window.scormAPI.getValue('cmi.score.raw') || '0');
                const newScore = currentScore + 20;
                window.scormAPI.setValue('cmi.score.raw', newScore.toString());
                console.log('Quiz 1: Awarded 20 points. Total score:', newScore);
            }
        } else {
            feedback.style.display = 'block';
            feedback.className = 'quiz-feedback incorrect';
            feedback.innerHTML = '❌ <strong>Incorrect.</strong> The correct answer is C.<br><br>Carryover contamination from the high-load positive control processed before the patient\'s sample, combined with workflow lapses and absence of extraction controls, explains the false positive result.';
        }
        
        updateCourseProgress();
    };

    // Quiz 2 - Multiple Choice Question with scoring
    window.checkQuiz2 = function() {
        const form = document.getElementById('quiz2-form');
        const selectedAnswers = Array.from(form.querySelectorAll('input[name="quiz2"]:checked')).map(input => input.value);
        const feedback = document.getElementById('quiz2-feedback');
        
        if (selectedAnswers.length === 0) {
            feedback.style.display = 'block';
            feedback.className = 'quiz-feedback warning';
            feedback.innerHTML = '⚠️ Please select at least one answer before submitting.';
            return;
        }
        
        const correctAnswers = ['A', 'B', 'C'];
        const incorrectAnswers = ['D', 'E'];
        
        // Calculate score
        let score = 0;
        let correctSelected = 0;
        let incorrectSelected = 0;
        
        selectedAnswers.forEach(answer => {
            if (correctAnswers.includes(answer)) {
                score += 20;
                correctSelected++;
            } else if (incorrectAnswers.includes(answer)) {
                score -= 20;
                incorrectSelected++;
            }
        });
        
        // Ensure score doesn't go below 0
        score = Math.max(0, score);
        
        // Disable all inputs after submission
        const inputs = form.querySelectorAll('input[type="checkbox"]');
        inputs.forEach(input => input.disabled = true);
        
        // Disable submit button
        const submitBtn = form.querySelector('.submit-quiz-btn');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitted';
        
        // Determine if answer is perfect
        const isPerfect = correctSelected === 3 && incorrectSelected === 0;
        
        feedback.style.display = 'block';
        
        if (isPerfect) {
            feedback.className = 'quiz-feedback correct';
            feedback.innerHTML = '✅ <strong>Perfect!</strong> You earned ' + score + ' points.<br><br>You correctly identified all three preventive measures: A, B, and C. These directly address the risk reduction steps highlighted in the scenario.<br><br><em>Note: D is incorrect—serology alone would not solve a contamination problem; E is not a logical or safe quality practice.</em>';
            
            // Update quiz completion status
            courseProgress.quizzesCompleted.quiz2 = true;
        } else if (score > 0) {
            feedback.className = 'quiz-feedback correct';
            feedback.innerHTML = '✅ <strong>Partially Correct.</strong> You earned ' + score + ' points.<br><br>The correct answers are A, B, and C. These all directly address risk reduction steps highlighted or implied in the scenario.<br><br><em>D is incorrect—serology alone would not solve a contamination problem; E is not a logical or safe quality practice.</em>';
            
            // Update quiz completion status
            courseProgress.quizzesCompleted.quiz2 = true;
        } else {
            feedback.className = 'quiz-feedback incorrect';
            feedback.innerHTML = '❌ <strong>Incorrect.</strong> You earned 0 points.<br><br>The correct answers are A, B, and C. These all directly address risk reduction steps highlighted or implied in the scenario.<br><br><em>D is incorrect—serology alone would not solve a contamination problem; E is not a logical or safe quality practice.</em>';
        }
        
        // Award points via SCORM
        if (window.scormAPI && window.scormAPI.isScormAvailable() && score > 0) {
            const currentScore = parseFloat(window.scormAPI.getValue('cmi.score.raw') || '0');
            const newScore = currentScore + score;
            window.scormAPI.setValue('cmi.score.raw', newScore.toString());
            console.log('Quiz 2: Awarded ' + score + ' points. Total score:', newScore);
        }
        
        updateCourseProgress();
    };

    // Interactive elements (placeholder for future implementation)
    function initializeInteractiveElements() {
        // Interactive elements code will be added here
        console.log('Interactive elements ready to be implemented');
    }

    // Initialize all components
    initializeQuizzes();
    initializeInteractiveElements();
    updateCourseProgress();
    
    // Initialize Levy-Jennings Chart
    initializeLevyJenningsChart();

    // Track time spent
    let startTime = Date.now();
    window.addEventListener('beforeunload', () => {
        const timeSpent = Math.floor((Date.now() - startTime) / 1000); // in seconds
        if (window.scormAPI && window.scormAPI.isScormAvailable()) {
            window.scormAPI.setValue('cmi.session_time', `PT${timeSpent}S`);
            window.scormAPI.commit();
        }
    });

    console.log('✅ Module 4 - Quality Control and Quality Assurance initialized');
});
// Levy-Jennings Chart Implementation
function initializeLevyJenningsChart() {
    const canvas = document.getElementById('levyJenningsChart');
    if (!canvas) return; // Chart not on this page
    
    // QC Data from Jennings Graph.csv (Updated with 68 runs)
    const qcData = [
        {run: 1, date: '01/01/2025', batch: '241205062_IC', ct: 32.05, sd: null, ucl1: null, ucl2: null, lcl1: null, lcl2: null, remark: 'Testing new IC', status: null},
        {run: 2, date: '02/01/2025', batch: '241205062_IC', ct: 28.48, sd: null, ucl1: null, ucl2: null, lcl1: null, lcl2: null, remark: '', status: null},
        {run: 3, date: '03/01/2025', batch: '241205062_IC', ct: 28.45, sd: null, ucl1: null, ucl2: null, lcl1: null, lcl2: null, remark: '', status: null},
        {run: 4, date: '06/01/2025', batch: '241205062_IC', ct: 29.56, sd: null, ucl1: null, ucl2: null, lcl1: null, lcl2: null, remark: '', status: null},
        {run: 5, date: '07/01/2025', batch: '241205062_IC', ct: 30.34, sd: null, ucl1: null, ucl2: null, lcl1: null, lcl2: null, remark: '', status: null},
        {run: 6, date: '08/01/2025', batch: '241205062_IC', ct: 31.53, sd: null, ucl1: null, ucl2: null, lcl1: null, lcl2: null, remark: '', status: null},
        {run: 7, date: '09/01/2025', batch: '241205062_IC', ct: 28.44, sd: 1.52, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: 'Calculated standard deviation from the 6 previous results from running the control.', status: 'Warning'},
        {run: 8, date: '10/01/2025', batch: '241205062_IC', ct: 28.64, sd: 1.52, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Passed'},
        {run: 9, date: '13/01/2025', batch: '241205062_IC', ct: 29.68, sd: 1.52, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Passed'},
        {run: 10, date: '14/01/2025', batch: '241205062_IC', ct: 28.52, sd: 1.52, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Warning'},
        {run: 11, date: '15/01/2025', batch: '241205062_IC', ct: 29.99, sd: 1.52, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Passed'},
        {run: 12, date: '16/01/2025', batch: '241205062_IC', ct: 30.75, sd: 1.52, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Passed'},
        {run: 13, date: '17/01/2025', batch: '241205062_IC', ct: 29.09, sd: 1.52, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Passed'},
        {run: 14, date: '20/01/2025', batch: '241205062_IC', ct: 31.39, sd: 1.52, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Passed'},
        {run: 15, date: '21/01/2025', batch: '241205062_IC', ct: 31.68, sd: 1.52, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Warning'},
        {run: 16, date: '22/01/2025', batch: '241205062_IC', ct: 31.98, sd: 1.52, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Warning'},
        {run: 17, date: '23/01/2025', batch: '241205062_IC', ct: 29.70, sd: 1.52, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Passed'},
        {run: 18, date: '24/01/2025', batch: '241205062_IC', ct: 29.86, sd: 1.52, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Passed'},
        {run: 19, date: '27/01/2025', batch: '241205062_IC', ct: 29.34, sd: 1.52, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Passed'},
        {run: 20, date: '28/01/2025', batch: '241205062_IC', ct: 29.63, sd: 1.23, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: 'Recalculate the SD and Calculate the control limit', status: 'Passed'},
        {run: 21, date: '29/01/2025', batch: '241205062_IC', ct: 28.08, sd: 1.23, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Warning'},
        {run: 22, date: '30/01/2025', batch: '241205062_IC', ct: 28.43, sd: 1.23, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Warning'},
        {run: 23, date: '31/01/2025', batch: '241205062_IC', ct: 28.69, sd: 1.23, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Passed'},
        {run: 24, date: '03/02/2025', batch: '241205062_IC', ct: 30.56, sd: 1.23, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Passed'},
        {run: 25, date: '04/02/2025', batch: '241205062_IC', ct: 30.43, sd: 1.23, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Passed'},
        {run: 26, date: '05/02/2025', batch: '241205062_IC', ct: 20.00, sd: 1.23, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: 'High positive sample in next well', status: 'Failed'},
        {run: 27, date: '06/02/2025', batch: '241205062_IC', ct: 29.72, sd: 1.23, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Passed'},
        {run: 28, date: '07/02/2025', batch: '241205062_IC', ct: 28.12, sd: 1.23, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Warning'},
        {run: 29, date: '10/02/2025', batch: '241205062_IC', ct: 31.30, sd: 1.23, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Passed'},
        {run: 30, date: '11/02/2025', batch: '241205062_IC', ct: 28.53, sd: 1.23, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Warning'},
        {run: 31, date: '12/02/2025', batch: '241205062_IC', ct: 28.33, sd: 1.23, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Warning'},
        {run: 32, date: '13/02/2025', batch: '241205062_IC', ct: 30.32, sd: 1.23, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Passed'},
        {run: 33, date: '14/02/2025', batch: '241205062_IC', ct: 29.20, sd: 1.23, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Passed'},
        {run: 34, date: '17/02/2025', batch: '241205062_IC', ct: 31.00, sd: 1.23, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Passed'},
        {run: 35, date: '18/02/2025', batch: '241205062_IC', ct: 28.31, sd: 1.23, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Warning'},
        {run: 36, date: '19/02/2025', batch: '241205062_IC', ct: 29.33, sd: 1.23, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Passed'},
        {run: 37, date: '20/02/2025', batch: '241205062_IC', ct: 29.04, sd: 1.23, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Passed'},
        {run: 38, date: '21/02/2025', batch: '241205062_IC', ct: 29.84, sd: 1.23, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Passed'},
        {run: 39, date: '24/02/2025', batch: '241205062_IC', ct: 29.47, sd: 1.23, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Passed'},
        {run: 40, date: '25/02/2025', batch: '241205062_IC', ct: 31.70, sd: 1.23, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Warning'},
        {run: 41, date: '26/02/2025', batch: '241205062_IC', ct: 31.88, sd: 1.23, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Warning'},
        {run: 42, date: '27/02/2025', batch: '241205062_IC', ct: 32.00, sd: 1.23, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Warning'},
        {run: 43, date: '28/02/2025', batch: '241205062_IC', ct: 32.24, sd: 1.23, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Warning'},
        {run: 44, date: '03/03/2025', batch: '241205062_IC', ct: 32.56, sd: 1.23, ucl1: 31.59, ucl2: 33.11, lcl1: 28.55, lcl2: 27.03, remark: '', status: 'Warning'},
        {run: 45, date: '04/03/2025', batch: '241205063_IC', ct: 28.98, sd: 1.58, ucl1: null, ucl2: null, lcl1: null, lcl2: null, remark: 'New batch after 4 warnings', status: null},
        {run: 46, date: '05/03/2025', batch: '241205063_IC', ct: 29.74, sd: 1.48, ucl1: null, ucl2: null, lcl1: null, lcl2: null, remark: '', status: null},
        {run: 47, date: '06/03/2025', batch: '241205063_IC', ct: 31.78, sd: 1.44, ucl1: null, ucl2: null, lcl1: null, lcl2: null, remark: '', status: null},
        {run: 48, date: '07/03/2025', batch: '241205063_IC', ct: 29.71, sd: 1.34, ucl1: null, ucl2: null, lcl1: null, lcl2: null, remark: '', status: null},
        {run: 49, date: '10/03/2025', batch: '241205063_IC', ct: 31.49, sd: 1.35, ucl1: null, ucl2: null, lcl1: null, lcl2: null, remark: '', status: null},
        {run: 50, date: '11/03/2025', batch: '241205063_IC', ct: 28.68, sd: 1.25, ucl1: null, ucl2: null, lcl1: null, lcl2: null, remark: '', status: null},
        {run: 51, date: '12/03/2025', batch: '241205063_IC', ct: 28.50, sd: 1.29, ucl1: 31.35, ucl2: 32.64, lcl1: 28.78, lcl2: 27.49, remark: 'Standard deviation calculated over 6 repeats', status: 'Warning'},
        {run: 52, date: '13/03/2025', batch: '241205063_IC', ct: 33.50, sd: 1.29, ucl1: 31.35, ucl2: 32.64, lcl1: 28.78, lcl2: 27.49, remark: 'Pipeting error? Rest of assay looks fine.', status: 'Failed'},
        {run: 53, date: '14/03/2025', batch: '241205063_IC', ct: 30.19, sd: 1.29, ucl1: 31.35, ucl2: 32.64, lcl1: 28.78, lcl2: 27.49, remark: '', status: 'Passed'},
        {run: 54, date: '17/03/2025', batch: '241205063_IC', ct: 31.51, sd: 1.29, ucl1: 31.35, ucl2: 32.64, lcl1: 28.78, lcl2: 27.49, remark: '', status: 'Warning'},
        {run: 55, date: '18/03/2025', batch: '241205063_IC', ct: 29.88, sd: 1.29, ucl1: 31.35, ucl2: 32.64, lcl1: 28.78, lcl2: 27.49, remark: '', status: 'Passed'},
        {run: 56, date: '19/03/2025', batch: '241205063_IC', ct: 29.42, sd: 1.29, ucl1: 31.35, ucl2: 32.64, lcl1: 28.78, lcl2: 27.49, remark: '', status: 'Passed'},
        {run: 57, date: '20/03/2025', batch: '241205063_IC', ct: 29.57, sd: 1.29, ucl1: 31.35, ucl2: 32.64, lcl1: 28.78, lcl2: 27.49, remark: '', status: 'Passed'},
        {run: 58, date: '21/03/2025', batch: '241205063_IC', ct: 29.14, sd: 1.29, ucl1: 31.35, ucl2: 32.64, lcl1: 28.78, lcl2: 27.49, remark: '', status: 'Passed'},
        {run: 59, date: '24/03/2025', batch: '241205063_IC', ct: 28.15, sd: 1.29, ucl1: 31.35, ucl2: 32.64, lcl1: 28.78, lcl2: 27.49, remark: 'Who ate my lunch?!', status: 'Warning'},
        {run: 60, date: '25/03/2025', batch: '241205063_IC', ct: 28.31, sd: 1.29, ucl1: 31.35, ucl2: 32.64, lcl1: 28.78, lcl2: 27.49, remark: '', status: 'Warning'},
        {run: 61, date: '26/03/2025', batch: '241205063_IC', ct: 30.58, sd: 1.29, ucl1: 31.35, ucl2: 32.64, lcl1: 28.78, lcl2: 27.49, remark: '', status: 'Passed'},
        {run: 62, date: '27/03/2025', batch: '241205063_IC', ct: 28.99, sd: 1.29, ucl1: 31.35, ucl2: 32.64, lcl1: 28.78, lcl2: 27.49, remark: '', status: 'Passed'},
        {run: 63, date: '28/03/2025', batch: '241205063_IC', ct: 29.20, sd: 1.29, ucl1: 31.35, ucl2: 32.64, lcl1: 28.78, lcl2: 27.49, remark: '', status: 'Passed'},
        {run: 64, date: '31/03/2025', batch: '241205063_IC', ct: 29.63, sd: 1.29, ucl1: 31.35, ucl2: 32.64, lcl1: 28.78, lcl2: 27.49, remark: '', status: 'Passed'},
        {run: 65, date: '01/04/2025', batch: '241205063_IC', ct: 28.39, sd: 1.29, ucl1: 31.35, ucl2: 32.64, lcl1: 28.78, lcl2: 27.49, remark: '', status: 'Warning'},
        {run: 66, date: '02/04/2025', batch: '241205063_IC', ct: 28.73, sd: 1.29, ucl1: 31.35, ucl2: 32.64, lcl1: 28.78, lcl2: 27.49, remark: '', status: 'Warning'},
        {run: 67, date: '03/04/2025', batch: '241205063_IC', ct: 30.53, sd: 0.74, ucl1: 31.35, ucl2: 32.64, lcl1: 28.78, lcl2: 27.49, remark: '', status: 'Passed'},
        {run: 68, date: '04/04/2025', batch: '241205063_IC', ct: 29.95, sd: 0.86, ucl1: 31.35, ucl2: 32.64, lcl1: 28.78, lcl2: 27.49, remark: '', status: 'Passed'}
    ];
    
    // Prepare chart data
    const runs = qcData.map(d => d.run);
    const ctValues = qcData.map(d => d.ct);
    // Calculate mean dynamically from control limits for each batch
    const meanLine = qcData.map(d => {
        if (d.ucl1 && d.lcl1) {
            return (d.ucl1 + d.lcl1) / 2;
        }
        return null;
    });
    const ucl1Line = qcData.map(d => d.ucl1 || null);
    const ucl2Line = qcData.map(d => d.ucl2 || null);
    const lcl1Line = qcData.map(d => d.lcl1 || null);
    const lcl2Line = qcData.map(d => d.lcl2 || null);
    
    // Color code points by status
    const pointColors = qcData.map(d => {
        if (!d.status) return '#999';
        if (d.status === 'Passed') return '#28a745';
        if (d.status === 'Warning') return '#ffc107';
        if (d.status === 'Failed') return '#dc3545';
        return '#999';
    });
    
    const pointRadius = qcData.map(d => {
        if (d.status === 'Failed') return 10; // Increased from 6 for better visibility
        return 4;
    });
    
    // Point border for failures
    const pointBorderWidth = qcData.map(d => {
        if (d.status === 'Failed') return 3;
        return 1;
    });
    
    const pointBorderColor = qcData.map(d => {
        if (d.status === 'Failed') return '#8B0000'; // Dark red border for failures
        return pointColors[qcData.indexOf(d)];
    });
    
    // Identify batch changes
    const batchChanges = [];
    for (let i = 1; i < qcData.length; i++) {
        if (qcData[i].batch !== qcData[i-1].batch) {
            batchChanges.push({
                index: i,
                run: qcData[i].run,
                newBatch: qcData[i].batch,
                oldBatch: qcData[i-1].batch
            });
        }
    }
    
    // Create chart
    const ctx = canvas.getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: runs,
            datasets: [
                {
                    label: 'Ct Value',
                    data: ctValues,
                    borderColor: '#007bff',
                    backgroundColor: pointColors,
                    pointBackgroundColor: pointColors,
                    pointBorderColor: pointBorderColor,
                    pointBorderWidth: pointBorderWidth,
                    pointRadius: pointRadius,
                    pointHoverRadius: 12,
                    borderWidth: 2,
                    tension: 0,
                    fill: false,
                    order: 1
                },
                {
                    label: 'Mean',
                    data: meanLine,
                    borderColor: '#28a745',
                    borderWidth: 2,
                    borderDash: [],
                    pointRadius: 0,
                    fill: false,
                    order: 2
                },
                {
                    label: 'UCL +1 SD',
                    data: ucl1Line,
                    borderColor: '#ffc107',
                    borderWidth: 1.5,
                    borderDash: [5, 5],
                    pointRadius: 0,
                    fill: false,
                    order: 3
                },
                {
                    label: 'UCL +2 SD',
                    data: ucl2Line,
                    borderColor: '#dc3545',
                    borderWidth: 1.5,
                    borderDash: [5, 5],
                    pointRadius: 0,
                    fill: false,
                    order: 4
                },
                {
                    label: 'LCL -1 SD',
                    data: lcl1Line,
                    borderColor: '#ffc107',
                    borderWidth: 1.5,
                    borderDash: [5, 5],
                    pointRadius: 0,
                    fill: false,
                    order: 5
                },
                {
                    label: 'LCL -2 SD',
                    data: lcl2Line,
                    borderColor: '#dc3545',
                    borderWidth: 1.5,
                    borderDash: [5, 5],
                    pointRadius: 0,
                    fill: false,
                    order: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        filter: function(legendItem, data) {
                            // Show all except Ct Value (shown in custom legend)
                            return legendItem.text !== 'Ct Value';
                        }
                    }
                },
                tooltip: {
                    enabled: false // Disable tooltips, using info panel instead
                },
                annotation: {
                    annotations: {}
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Run Number',
                        font: { size: 14, weight: 'bold' }
                    },
                    grid: {
                        display: true,
                        drawOnChartArea: true,
                        color: '#e0e0e0'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Ct Value',
                        font: { size: 14, weight: 'bold' }
                    },
                    min: 18,
                    max: 34,
                    grid: {
                        display: true,
                        color: '#e0e0e0'
                    }
                }
            }
        }
    });
    
    // Update info panel on hover
    function updateInfoPanel(dataIndex) {
        if (dataIndex === null || dataIndex === undefined || dataIndex < 0) {
            // Reset to default state
            document.getElementById('runNumber').textContent = '-';
            document.getElementById('runDate').textContent = '-';
            document.getElementById('runCt').textContent = '-';
            document.getElementById('runStatus').textContent = '-';
            document.getElementById('runStatus').className = 'status-badge';
            document.getElementById('runSD').textContent = '-';
            document.getElementById('runBatch').textContent = '-';
            document.getElementById('runNote').textContent = '-';
            return;
        }
        
        const data = qcData[dataIndex];
        document.getElementById('runNumber').textContent = data.run;
        document.getElementById('runDate').textContent = data.date;
        document.getElementById('runCt').textContent = data.ct.toFixed(2);
        
        const statusElement = document.getElementById('runStatus');
        statusElement.textContent = data.status || 'N/A';
        statusElement.className = 'status-badge';
        if (data.status === 'Passed') statusElement.classList.add('passed');
        else if (data.status === 'Warning') statusElement.classList.add('warning');
        else if (data.status === 'Failed') statusElement.classList.add('failed');
        
        document.getElementById('runSD').textContent = data.sd ? data.sd.toFixed(2) : 'N/A';
        document.getElementById('runBatch').textContent = data.batch || 'N/A';
        document.getElementById('runNote').textContent = data.remark || 'None';
    }
    
    // Add hover event listeners to canvas
    canvas.addEventListener('mousemove', (event) => {
        const points = chart.getElementsAtEventForMode(event, 'index', { intersect: false }, false);
        if (points.length > 0) {
            const dataIndex = points[0].index;
            updateInfoPanel(dataIndex);
        }
    });
    
    canvas.addEventListener('mouseout', () => {
        updateInfoPanel(null);
    });
    
    // Control toggles
    const showControlLimits = document.getElementById('showControlLimits');
    const highlightFailures = document.getElementById('highlightFailures');
    const showBatchChanges = document.getElementById('showBatchChanges');
    
    if (showControlLimits) {
        showControlLimits.addEventListener('change', function() {
            chart.data.datasets[2].hidden = !this.checked; // UCL +1
            chart.data.datasets[3].hidden = !this.checked; // UCL +2
            chart.data.datasets[4].hidden = !this.checked; // LCL -1
            chart.data.datasets[5].hidden = !this.checked; // LCL -2
            chart.update();
        });
    }
    
    if (highlightFailures) {
        highlightFailures.addEventListener('change', function() {
            if (this.checked) {
                // Enhanced highlighting
                chart.data.datasets[0].pointRadius = pointRadius;
                chart.data.datasets[0].pointBorderWidth = pointBorderWidth;
                chart.data.datasets[0].pointBorderColor = pointBorderColor;
            } else {
                // Standard view
                chart.data.datasets[0].pointRadius = 4;
                chart.data.datasets[0].pointBorderWidth = 1;
                chart.data.datasets[0].pointBorderColor = pointColors;
            }
            chart.update();
        });
    }
    
    if (showBatchChanges) {
        showBatchChanges.addEventListener('change', function() {
            if (this.checked) {
                // Add vertical lines and labels at batch changes
                const annotations = {};
                batchChanges.forEach((change, idx) => {
                    annotations[`batchLine${idx}`] = {
                        type: 'line',
                        xMin: change.run,
                        xMax: change.run,
                        borderColor: '#FF6B6B',
                        borderWidth: 2,
                        borderDash: [5, 5],
                        label: {
                            display: true,
                            content: `New Batch`,
                            position: 'start',
                            backgroundColor: 'rgba(255, 107, 107, 0.8)',
                            color: 'white',
                            font: {
                                size: 10,
                                weight: 'bold'
                            },
                            padding: 4
                        }
                    };
                    
                    // Add background box for the batch change zone
                    annotations[`batchBox${idx}`] = {
                        type: 'box',
                        xMin: change.run - 0.5,
                        xMax: change.run + 2.5,
                        backgroundColor: 'rgba(255, 107, 107, 0.1)',
                        borderWidth: 0
                    };
                });
                
                chart.options.plugins.annotation.annotations = annotations;
            } else {
                chart.options.plugins.annotation.annotations = {};
            }
            chart.update();
        });
    }
    
    console.log('✅ Levy-Jennings chart initialized');
}

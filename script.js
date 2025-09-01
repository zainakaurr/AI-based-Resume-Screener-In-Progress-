document.addEventListener("DOMContentLoaded", () => {
    
    const submitBtn = document.querySelector(".submit button");

    const resumeInput = document.getElementById("input");

    const jdBox = document.querySelector(".JD textarea");
    
    const similaritySpan = document.querySelector(".number");

    const similaritiesDiv = document.querySelector(".whatThere");

    const missingDiv = document.querySelector(".whatMissing");

    if (submitBtn && resumeInput && jdBox && similaritySpan && similaritiesDiv && missingDiv) {
        submitBtn.addEventListener("click", () => {
            const file = resumeInput.files[0];
            const jd = jdBox.value.trim();

            if (!file || !jd) {
                alert("Please upload your resume and/or job description for the job you are applying for");
                return;
            }

        });
    }
});
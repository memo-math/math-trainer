document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("quiz-container");

    document.getElementById("start-complejos").addEventListener("click", () => {
        showExam(algebraQuestions);
    });

    function showExam(questions) {
        container.innerHTML = "";

        questions.forEach((q, index) => {
            const qDiv = document.createElement("div");
            qDiv.classList.add("question-block");

            const qText = document.createElement("p");
            qText.classList.add("question-text");
            qText.innerHTML = `Pregunta ${index + 1}: ${q.question}`;
            qDiv.appendChild(qText);

            // Aquí empieza la parte nueva: contenedor para las opciones
            const optionsContainer = document.createElement("div");
            optionsContainer.classList.add("option-btn");

            q.options.forEach(opt => {
                const btn = document.createElement("button");
                btn.textContent = opt;
                btn.addEventListener("click", () => {
                    btn.style.backgroundColor = opt === q.answer ? "lightgreen" : "lightcoral";
                });
                optionsContainer.appendChild(btn); // Agregar botón al contenedor
            });

            qDiv.appendChild(optionsContainer); // Agregar contenedor al bloque de pregunta
            container.appendChild(qDiv);
        });

        if (window.MathJax && MathJax.Hub) {
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
        }
        
    }
});

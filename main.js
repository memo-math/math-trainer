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

            // Contenedor para las opciones
            const optionsContainer = document.createElement("div");
            optionsContainer.classList.add("option-btn");

            q.options.forEach((opt, optIndex) => {
                const btn = document.createElement("button");
                btn.classList.add("option");
                btn.innerHTML = opt;

                btn.addEventListener("click", () => {
                    if (qDiv.classList.contains('respondida')) return;
                    qDiv.classList.add('respondida');

                    if (optIndex === q.answer) {
                        btn.classList.add('correcta');
                    } else {
                        btn.classList.add('incorrecta');
                    }

                    const allButtons = qDiv.querySelectorAll('.option');
                    allButtons.forEach(b => b.disabled = true);
                });

                optionsContainer.appendChild(btn); // Agregar botón al contenedor
            });

            qDiv.appendChild(optionsContainer); // Agregar contenedor al bloque de pregunta
            container.appendChild(qDiv); // Agregar bloque al contenedor principal
        });

        // Renderizar MathJax
        if (window.MathJax && MathJax.typeset) {
            MathJax.typeset();
        } else if (window.MathJax && MathJax.Hub) {
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
        }

        // Scroll automático
        document.getElementById("quiz-container").scrollIntoView({ behavior: "smooth" });
    }
});

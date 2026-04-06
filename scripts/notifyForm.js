document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const headerText = document.querySelector("#formContattaci > p");   
    if(form && headerText){
        form.addEventListener("submit", async (e) => {
            e.preventDefault();   
            const data = new FormData(form);   
            try {
                    await fetch(form.action, {
                        method: "POST",
                        body: data
                    });
                    form.reset();   
                    const originalText = headerText.textContent;   
                    headerText.textContent = "Messaggio inviato correttamente";   
                    headerText.style.color = "lightgreen";
                    headerText.style.marginTop = "20px";
                    headerText.style.padding = "5px 15px";
                    headerText.style.borderRadius = "25px";
                    headerText.style.fontWeight = "bold";
                    headerText.style.textAlign = "center";
                    headerText.style.transition = "opacity 1s ease, transform 1s ease";
                    headerText.style.opacity = "1";
                    headerText.style.transform = "translateY(-20px)";
                    setTimeout(() => {
                        headerText.style.opacity = "1";
                        headerText.style.transform = "translateY(0)";
                    }, 500);
                setTimeout(() => {
                    headerText.style.opacity = "0";
                    headerText.style.transform = "translateY(-20px)";
                    setTimeout(() => {
                        headerText.textContent = originalText;
                        headerText.style.opacity = "1";
                        headerText.style.transform = "translateY(0)";
                        headerText.style.backgroundColor = "";
                        headerText.style.color = "";
                        headerText.style.padding = "";
                        headerText.style.borderRadius = "";
                        headerText.style.fontWeight = "";
                        headerText.style.fontStyle = "";
                        headerText.style.textAlign = "";
                    }, 1000);
            }, 4000);
            } 
            catch (err) {
                alert("❌ Errore nell'invio del messaggio");
            }
        });
    }
});
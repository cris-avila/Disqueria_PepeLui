const d = document

export default function carrousel() {
    const $nextBtn = d.querySelector(".carrousel-btn.next"),
    $prevBtn = d.querySelector(".carrousel-btn .prev"),
    $slides = d.querySelectorAll(".carrousel-img");

    let i = 0;

    d.addEventListener("click", (e) => {
        if(e.target===$prevBtn) {
            e.preventDefault();
            $slides[i].classList.remove("active");
            i--;

            if (i < 0) {
                i = $slides.length -1;
            }
            
            $slides[i].classList.add("active");
        }

        if(e.target===$nextBtn) {
            e.preventDefault();
            $slides[i].classList.remove("active");
            i++;

            if (i >= $slides.length) {
                i = 0;
            }
            
            $slides[i].classList.add("active");
        }
    })
}


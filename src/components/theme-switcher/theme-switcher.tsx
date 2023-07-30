import "./theme-switcher.sass";

export function ThemeSwitcher() {
  const handleOnClick = (e: any) => {
    if (e.classList.contains("step-1")) {
      e.classList.remove("step-1");
      e.classList.add("step-2");
      document.querySelector("html").setAttribute("data-theme", "theme-2");
    } else if (e.classList.contains("step-2")) {
      e.classList.remove("step-2");
      e.classList.add("step-3");
      document.querySelector("html").setAttribute("data-theme", "theme-3");
    } else {
      e.classList.remove("step-3");
      e.classList.add("step-1");
      document.querySelector("html").setAttribute("data-theme", "theme-1");
    }
  };

  return (
    <div class="theme-switcher">
      <div class="number-container">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <i
        class="bx bxs-circle circle step-1"
        onClick={(e) => handleOnClick(e.target)}
      ></i>
    </div>
  );
}

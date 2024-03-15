import { useEffect } from "react";
import MainBgImgandVideo from "./components/MainBgImgandVideo";
import MainContainer from "./components/MainContainer";
import ThemeToggle from "./components/Theme.Toggle";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  useEffect(() => {
    // Menu link click event
    // const menuLinks = document.querySelectorAll(".menu-link");
    // menuLinks.forEach((link) => {
    //   link.addEventListener("click", function () {
    //     menuLinks.forEach((mlink) => {
    //       mlink.classList.remove("is-active");
    //     });
    //     this.classList.add("is-active");
    //   });
    // });

    // Main header link click event
    // const mainHeaderLinks = document.querySelectorAll(".main-header-link");
    // mainHeaderLinks.forEach((link) => {
    //   link.addEventListener("click", function () {
    //     mainHeaderLinks.forEach((headerLink) => {
    //       headerLink.classList.remove("is-active");
    //     });
    //     this.classList.add("is-active");
    //   });
    // });

    // Search bar focus and blur events
    // const searchBarInput = document.querySelector(".search-bar input");
    // searchBarInput.addEventListener("focus", function () {
    //   document.querySelector(".header").classList.add("wide");
    // });

    // searchBarInput.addEventListener("blur", function () {
    //   document.querySelector(".header").classList.remove("wide");
    // });

    // Dark/light mode toggle
    const toggleButton = document.querySelector(".dark-light");
    toggleButton.addEventListener("click", function () {
      document.body.classList.toggle("light-mode");
    });

    // Cleanup event listeners on component unmount
    // return () => {
    //   menuLinks.forEach((link) => link.removeEventListener("click"));
    //   mainHeaderLinks.forEach((link) => link.removeEventListener("click"));
    //   dropdowns.forEach((dropdown) => dropdown.removeEventListener("click"));
    //   searchBarInput.removeEventListener("focus");
    //   searchBarInput.removeEventListener("blur");
    //   document.removeEventListener("click");
    //   dropdownsOverlay.forEach((dropdown) =>
    //     dropdown.removeEventListener("click")
    //   );
    //   statusButton.removeEventListener("click");
    //   popupClose.removeEventListener("click");
    //   toggleButton.removeEventListener("click");
    // };
  }, []);

  return (
    <Provider store={store}>
      <MainBgImgandVideo />
      <ThemeToggle />
      <MainContainer />
    </Provider>
  );
};

export default App;

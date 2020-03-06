import useCoder from "./FooterDataProvider";
import Footer from "./Footer";

const CoderList = () => {
    const contentElement = document.querySelector("personalInfo_list")
    const personals = useCoder()

    personals.forEach(footerItem => {
        contentElement.innerHTML += Footer(footerItem)
    });

}

export default FooterList
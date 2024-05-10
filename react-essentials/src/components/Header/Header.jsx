import reactImg from '../../assets/react-core-concepts.png'
import './Header.css'
const reactDescriptions = ["Crucial", "Fundamental", "Core"];

function ReturnRandomIndex() {
    return Math.floor(Math.random() * reactDescriptions.length)
}

export default function Header() {

    const description = reactDescriptions[ReturnRandomIndex()]

    return (<header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
    </header>
    );

}

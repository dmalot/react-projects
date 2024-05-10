import componentImg from '../../assets/components.png'
import './CoreConcept.css'
export default function CoreConcept({image, title, description, children}) {
    return (

        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>

    )
}
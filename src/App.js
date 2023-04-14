import logo from './logo.svg';
import './App.css';
import {useState} from "react";


const App = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const form = do {
        if (!submitted) {
            return (<form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>);
        } else {
            return (<div>
                <p>Thank you for your submission!</p>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Message: {message}</p>
            </div>);
        }
    };

    return (
        <div>
            <div id="info">
                <h3>Прізвище, імʼя: </h3>
                <span>Рябова Єлизавета</span>
                <h3>Напрямок, за яким планує розвиватись: </h3>
                <span>ASP.NET</span>
                <h3>Персональну сертифікацію, яку планує складати: </h3>
                <span>Microsoft Certified: Web Applications Developer Associate</span>
                <h3>Аргументація, чому саме ця сертифікація:</h3>
                <span>Отримання сертифікації Microsoft Certified: Web Applications
                    Developer Associate корисне тим, що я зможу підвищити свій професійний рівень та показати
                    свої знання та навички в розробці веб-додатків на платформі Microsoft. Ця сертифікація також може
                    збільшити шанси на знаходження роботи, оскільки вона свідчить про високий рівень знань та компетентності
                    в цій області. Крім того, знання та навички, які необхідні для отримання цієї сертифікації, допоможуть
                    мені покращити якість своїх веб-додатків та зробити їх більш безпечними та ефективними.
                </span>
            </div>
            <div id="form">
            <h1>Contact Form</h1>
            {form}
            </div>
        </div>
    );
};

export default App;

import '../index.css';

export default function Header() {
    return <header>
        <h1>CV Automator!</h1>
        <nav>
            <button onClick={() => {window.open(`https://github.com/jdogcodey`, '_blank')}}><img src='/images/github.svg'/></button>
        </nav>
    </header>
}

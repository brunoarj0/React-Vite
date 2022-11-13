import './styles.css'

//testando

export function Card(props){
    return(
        <div className="card">
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}

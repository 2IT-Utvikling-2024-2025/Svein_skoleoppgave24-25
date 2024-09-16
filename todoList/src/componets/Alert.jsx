import './Alert.css'

export default function Alert({ alert, level, setOpen }) {
    return (
        <div className={`alert ${level}`}>
            <span className="closebtn" onclick={() => setOpen(false)}>&times;</span>
            {alert}
        </div>
    )
}
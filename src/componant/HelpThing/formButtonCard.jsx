import './formButtonCard.css'
const FormButtonCard = (props) => {
    return (
        <div className='card'>
            {
                props.colors.map((color, i) =>
                    <button key={color + i}
                        style={{ background: color }}
                        onClick={() => props.onClick(color)}
                    />)
            }
        </div>
    )
}
export default FormButtonCard;
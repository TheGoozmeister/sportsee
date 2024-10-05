function CardKeyData (props) {

    const {label, unit, amount, icon} = props;

    return (
        <div className="cardKeyData">
            <div className="cardKeyData__icon">
                <img src={icon} alt="icon" />
            </div>
            <div className="cardKeyData__infos">
                <div className="cardKeyData__infos__datas">{amount}{unit}</div>
                <div className="cardKeyData__infos__label">{label}</div>
            </div>
        </div>
    )
}

export default CardKeyData;
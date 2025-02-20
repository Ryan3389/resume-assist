function FeaturesCard({ title, pointOne, pointTwo, pointThree }) {
    return (
        <article className="features-card">
            <h3>{title}</h3>
            <p>{pointOne}</p>
            <p>{pointTwo}</p>
            <p>{pointThree}</p>
        </article>
    )
}

export default FeaturesCard
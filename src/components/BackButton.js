const BackButton = ({setCount}) => {

    const goBack = () => {
       setCount(0)
    }

    return (
        <>
        <h1>Count limit reached</h1>
        <button onClick = {goBack}>Reset</button>
        </>

    )
}

export default BackButton
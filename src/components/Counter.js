const Counter = ({setCount, count}) => {

    const reduceCount = ()=> {
        setCount(count - 1)
    }
    const increaseCount = () => {
        setCount(count + 1)
    }
    return (
        <>
        <button onClick = {reduceCount}> - </button>
        <button onClick = {increaseCount}> + </button>
        </>
    )
}

export default Counter
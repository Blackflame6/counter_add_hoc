const Counter = ({reduceCount, increaseCount}) => {

    const handleReduce = ()=> {
       reduceCount()
    }
   const handleIncrease =()=> {
    increaseCount()
   }
    return (
        <>
        <button onClick = {handleReduce}> - </button>
        <button onClick = {handleIncrease}> + </button>
        </>
    )
}

export default Counter
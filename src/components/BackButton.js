const BackButton = ({countToZero}) => {

  const handleClick = ()=> {
    countToZero()
  }

    return (
        <>
        <h1>Count limit reached</h1>
        <button onClick = {handleClick}>Reset</button>
        </>

    )
}

export default BackButton
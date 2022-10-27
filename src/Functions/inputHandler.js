const inputHandler = (e, state, setState) => {
    const currentUserInfo = { ...state }
    const name = e.target.name
    const value = e.target.value

    if (name === "amount") {
        const floorValue = Math.floor(value)
        currentUserInfo[name] = floorValue
        setState(currentUserInfo)
    } else if (name === "phoneNumber_valid") {
        const filterPhoneNumber = value.replaceAll(" ", "").replace(/[a-z]/gi, "")
        currentUserInfo["phoneNumber"] = filterPhoneNumber

        setState(currentUserInfo)
    } else {
        currentUserInfo[name] = value
        setState(currentUserInfo)
    }

};

export default inputHandler;

const inputHandler = (e, state, setState) => {
    const currentUserInfo = { ...state }
    const name = e.target.name
    const value = e.target.value
    console.log(name)
    console.log(value)

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









    // if (name === "firstName" || name === "lastName") {
    //     const words = value.split(" ");
    //     for (let i = 0; i < words.length; i++) {
    //         words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    //     }
    //     let sentence = ''

    //     words.map(word => {
    //         sentence = sentence + " " + word
    //     })

    //     currentUserInfo[name] = sentence
    //     setState(currentUserInfo)
    // } else {
    // setState(currentUserInfo)
    // }
};

export default inputHandler;

// const mySentence = "freeCodeCamp is an awesome resource";

// const words = mySentence.split(" ");

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
// }
// let sentence = ''

// words.map(word => {
//     sentence = sentence + " " + word
// })
// console.log(sentence)


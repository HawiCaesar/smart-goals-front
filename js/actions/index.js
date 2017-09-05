export const selectUser = (user) => {
    console.log("User Clicked " + user.first)

    return {
        type: "USER_SELECTED",
        payload: user
    }
};

const userValidator = (user) => {
    const types = ['admin', 'entregador', 'empresa'];
    
    if (!user.username) {
        return { error: "Username is required" };
    }
    
    if (!user.password) {
        return { error: "Password is required" };
    }

    if (!types.includes(user.type)) {
        return { error: "Type is required" };
    }
}

export default userValidator;

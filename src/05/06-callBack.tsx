import React,{MouseEvent} from "react";

const callback = (): number => {
    alert('hey')
    return 12;
}

window.setTimeout(callback, 1000)

export const User = () => {


    const deleteUser = (event:MouseEvent<HTMLButtonElement>) => {

        alert(event.currentTarget.name);
    }

    const onNameChange = () => {
        console.log('name changed')
    }

    const focusLostHandler = () => {
        console.log('focus')
    }
    return <div>
        <textarea onChange={onNameChange}
                  onBlur={focusLostHandler}
        >Yulia</textarea>
        <input/>
        <button onClick={deleteUser} name='delete'>DELETE</button>

    </div>
}
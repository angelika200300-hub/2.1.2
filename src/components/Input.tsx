import { useState } from "react";

const Input = () => {
    const [name, setName] = useState<string>(''); //состояние name
    const [value, setValue] = useState<string>(''); //состояние value

    const [savedName, setSavedName] = useState<string>(''); //состояние введенного name
    const [savedValue, setSavedValue] = useState<string>(''); //состояние введенного value

    const [show, setShow] = useState(false); //состояние вывода данных

    const handleCreate = () => {
        setSavedName(name);
        setSavedValue(value);
        setShow(true);
    };

    return (
        <>
            <label>
                Название поля:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>
                Значение поля:
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </label>
            <div className="buttonContent">
                <button type="button"
                    onClick={handleCreate}
                    disabled={!name}
                >
                    Создать поле в объекте
                </button>
            </div>
            <div className="buttonContent">
                {show && (
                    <div>
                        <p>Объект: {`{'name': '${savedName}', 'surname': '${savedValue}'}`}</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default Input;
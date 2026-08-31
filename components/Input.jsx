import { useState } from "react";

const Input = () => {
    const [name, setName] = useState(''); //состояние name
    const [value, setValue] = useState(''); //состояние value

    const [savedName, setSavedName] = useState(''); //состояние введенного name
    const [savedValue, setSavedValue] = useState(''); //состояние введенного value

    const [show, setShow] = useState(false); //состояние вывода данных

    const handleCreate = () => {
        setSavedName(name);
        setSavedValue(value);
        setShow(true);
    };

    return (
        <div>
            <form>
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
                <button type="button"
                    onClick={handleCreate}
                    disabled={!name}
                >
                    Создать поле в объекте
                </button>
            </form>

            {show && (
                <div>
                    <p>Объект: {`{'name': '${savedName}', 'surname': '${savedValue}'}`}</p>
                </div>
            )}

        </div>
    );
}

export default Input;
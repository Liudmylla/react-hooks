import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const blockRef = useRef();
    const handleChange = () => {
        blockRef.current.style.width = "150px";
        blockRef.current.style.height = "80px";
        blockRef.current.textContent = "text";
    };
    const handleDefault = () => {
        blockRef.current.style.width = "60px";
        blockRef.current.style.height = "40px";
        blockRef.current.textContent = "block";
    };
    return (
        <CollapseWrapper title="Exercise">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содежимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={blockRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded mb-2"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <button className="btn btn-secondary m-2" onClick={handleChange}>
                Text
            </button>
            <button className="btn btn-info m-2" onClick={handleDefault}>
                Block
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;

import React from "react";

export const NotesAppBar = () => {
    return (
        <div className="notes__appbar">
            <span className="notes__appbar-title">
                27 de Diciembre del 2021
            </span>

            <div>
                <button className="btn">picture</button>
                <button className="btn">save</button>
            </div>
        </div>
    );
};

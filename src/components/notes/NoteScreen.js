import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    name="title"
                    className="notes__title-input"
                />

                <textarea
                    placeholder="What happened today?"
                    name="content"
                    className="notes__textarea"
                ></textarea>

                <div className="notes__image">
                    <img
                        src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                        alt="note"
                    ></img>
                </div>
            </div>
        </div>
    );
};

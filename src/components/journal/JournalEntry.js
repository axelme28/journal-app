import React from "react";

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk=)`,
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">A new day</p>
                <p className="journal__entry-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>25</h4>
            </div>
        </div>
    );
};

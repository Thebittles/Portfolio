import React from "react";
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from './category/Status';


export default function Filter({ pageNumber, updatePageNumber, updateStatus, updateGender, updateSpecies }) {

    /* Function to clear filters sets all filters state to empty string*/
    let clear = () => {
        updateStatus("");
        updateGender("");
        updateSpecies("");
        updatePageNumber(1);
        window.location.reload(false);

    }

    return (
        <div className="col-lg-3 col-12 mb-5">
            <div className="text-center fw-bold fs-4 mb-2">
                <div
                    style={{ cursor: "pointer" }}
                    onClick={clear}
                    className="text-primary text-decoration-underline text-center mb-3">
                    Clear Filters
                </div>
                <div className="accordion" id="accordionExample">

                    <Status
                        updatePageNumber={updatePageNumber}
                        updateStatus={updateStatus}
                    />
                 {   <Species
                        updatePageNumber={updatePageNumber}
                        updateSpecies={updateSpecies}
                    />}
                    <Gender
                        updatePageNumber={updatePageNumber}
                        updateGender={updateGender}
                    />

                </div>
            </div>
        </div>
    )
}

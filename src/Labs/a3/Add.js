import React from "react";
import { useParams } from "react-router-dom";
function Add() {
    const { a, b } = useParams();
    return (
        <div>
            <h3>Add Path Parameters</h3>
            {a} + {b} = {parseInt(a) + parseInt(b)}
        </div>
    );
}
export default Add;
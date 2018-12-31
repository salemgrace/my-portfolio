import React from "react";
import "./ProjectCard.css";

const ProjectCard = props => (
    <div className="content">
        <span onClick={() => props.link}>
            <div className="img-container">
                <img className="img-fluid" alt={props.name} src={props.image} />
            </div>
        </span>
    </div>
);

export default ProjectCard;
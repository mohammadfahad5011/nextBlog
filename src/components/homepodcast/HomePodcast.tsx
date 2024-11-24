import React from "react";
import classNames from "classnames";
// import "./HomePodcast.scss";

const HomePodcast = ({ className = "HomePodcast" }) => {
    const classList = classNames(className, 'bg-white py-[130px]');

    return <div data-cy="HomePodcast" className={classList}>
        <section>
            
        </section>
    </div>;
};

export default HomePodcast;




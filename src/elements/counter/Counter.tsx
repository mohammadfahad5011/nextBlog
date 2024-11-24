import React from "react";
import classNames from "classnames";
import "./Counter.scss";

interface Stat {
    value: string;
    label: string;
}

interface CounterProps {
    stats: Stat[];
    className?: string; // Optional className prop for custom styling
}

const Counter: React.FC<CounterProps> = ({ className = "Counter", stats }) => {
    const classList = classNames(className, 'gap-x-14 mt-5 hidden md:flex');

    return (
        <div data-cy="Counter" className={classList}>
            {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                    <h4 className="text-pwV2Font48 text-pwV2DarkGreen font-semibold">
                        {stat.value}
                    </h4>
                    <span className="text-pwV2Font16 text-pwV2DarkGreen">
                        {stat.label}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Counter;
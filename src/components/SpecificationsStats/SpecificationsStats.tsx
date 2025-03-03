import { AnimatedNumberInView } from "../AnimatedNumberInView/AnimatedNumberInView";
import { StaticTextInView } from "../StaticTextInView/StaticTextInView";

interface Stat {
  id: number;
  name: string;
  value: string | number;
  prefix?: string;
  suffix?: string;
}

interface SpecificationsStatsProps {
  stats: Stat[];
  textColor?: string;
}

export function SpecificationsStats({
  stats,
  textColor,
}: SpecificationsStatsProps) {
  return (
    <div className="">
      <h2 className="mb-16 text-center text-3xl font-normal tracking-widest">
        SPECIFICATIONS
      </h2>
      <dl className="grid grid-cols-1 gap-x-8 text-center lg:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className={`flex flex-col items-center ${
              index < stats.length - 1 ? "border-r border-white" : ""
            }`}
          >
            <dt  style={{ color: textColor ?? "white" }} className={`mb-4 text-lg text-[${textColor}] ?? 'text-white'}`}>
              {stat.name.toUpperCase()}
            </dt>
            <dd className=" text-3xl font-light tracking-tight text-white sm:text-5xl">
              {typeof stat.value === "number" ? (
                <AnimatedNumberInView
                  prefix={stat.prefix ?? ""}
                  suffix={stat.suffix ?? ""}
                  getal={stat.value}
                />
              ) : (
                <StaticTextInView
                  prefix={stat.prefix ?? ""}
                  suffix={stat.suffix ?? ""}
                  text={stat.value}
                />
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

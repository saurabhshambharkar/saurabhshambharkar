import { useEffect, useState } from "react";
import { request, gql } from "graphql-request";
import dayjs from "dayjs";

const token = import.meta.env.VITE_GITHUB_TOKEN;
console.log("GitHub Token:", token);

const fetchContributionData = async (username) => {
  const endpoint = "https://api.github.com/graphql";

  const query = gql`
    query ($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                color
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  const variables = { login: username };
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const data = await request(endpoint, query, variables, headers);
    return data.user.contributionsCollection.contributionCalendar;
  } catch (error) {
    console.error("Failed to fetch contribution data:", error);
    return null;
  }
};

const GitHubCalendar = ({ username }) => {
  const [calendarData, setCalendarData] = useState(null);

  useEffect(() => {
    fetchContributionData(username).then(setCalendarData);
  }, [username]);

  if (!calendarData)
    return (
      <p className="text-gray-900 dark:text-white">
        Loading GitHub contributions...
      </p>
    );

  const weeks = calendarData.weeks;

  const allMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthStartIndexes = allMonths.map((month) =>
    weeks.findIndex((week) => {
      const firstDay = week.contributionDays[0];
      return dayjs(firstDay.date).format("MMM") === month;
    })
  );

  const dayLabels = ["Mon", "Wed", "Fri"];

  return (
    <div className="overflow-x-auto">
      <div className="ml-[40px] mb-2 relative" style={{ height: 20 }}>
        {monthStartIndexes.map(
          (weekIndex, i) =>
            weekIndex !== -1 && (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: weekIndex * 17,
                  width: 50,
                  textAlign: "left",
                  fontSize: 12,
                }}
                className="text-gray-900 dark:text-white font-bold text-xs"
              >
                {allMonths[i]}
              </div>
            )
        )}
      </div>

      <div className="flex">
    
        <div className="flex flex-col mr-2">
          {Array.from({ length: 7 }).map((_, i) =>
            dayLabels.includes(dayjs().day(i).format("ddd")) ? (
              <div
                key={i}
                style={{ height: 17 }}
                className="text-xs text-gray-400"
              >
                {dayjs().day(i).format("ddd")}
              </div>
            ) : (
              <div key={i} style={{ height: 17 }} />
            )
          )}
        </div>

     
        <div className="flex gap-[2px]">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-[2px]">
              {week.contributionDays.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  title={`${day.date}: ${day.contributionCount} contributions`}
                  style={{
                    width: 15,
                    height: 15,
                    backgroundColor: day.color,
                    borderRadius: 3,
                    transition: "transform 0.2s",
                  }}
                  className="hover:scale-110"
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-300">
        Total contributions: {calendarData.totalContributions}
      </p>
    </div>
  );
};

export default GitHubCalendar;

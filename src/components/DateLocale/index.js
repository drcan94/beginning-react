import React from "react";

const DateLocale = () => {
  const date = new Date();
  const day = date.toLocaleString("tr-TR", { weekday: "long" });
  const earlyMorning = date.getHours() >= 0 && date.getHours() < 6;
  const morning = date.getHours() >= 6 && date.getHours() < 12; // date.getHours(); // 0-23
  const afternoon = date.getHours() >= 12 && date.getHours() < 18;
  const night = date.getHours() >= 18 && date.getHours() < 24;
  return (
    <React.Fragment>
      <div>Bugün günlerden {day}</div>
      <div>
        {earlyMorning
          ? "Sabahın Erken Saatleri"
          : morning
          ? "Sabah"
          : afternoon
          ? "Öğleden Sonra"
          : night
          ? "Akşam"
          : null}
      </div>
    </React.Fragment>
  );
};

export default DateLocale;

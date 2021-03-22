export function readingTime(content = "", readingSpeed = 2) {
  let maxSecond = 50;
  let oneMinute = 60;
  let totalSecondsInOneHour = 3600;

  let wordCount = content.trim().split(" ").length;

  let readingTime = Math.ceil(wordCount / readingSpeed);

  if (readingTime < maxSecond) {
    
    let second = parseInt(readingTime / 10);
    second++;
    second *= 10;
    return `${second}`;

  } else if (readingTime < totalSecondsInOneHour) {
    let minute = Math.ceil(readingTime / oneMinute);
    return `${minute}`;

  } else {

    let hour = Math.floor(readingTime / totalSecondsInOneHOur);
    return `${hour}`;

  }
}

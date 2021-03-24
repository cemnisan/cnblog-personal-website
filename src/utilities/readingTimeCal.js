export function readingTime(content = "", readingSpeed = 3.5) {
  let maxSecond = 50;
  let oneMinute = 60;
  let totalSecondsInOneHour = 3600;

  let wordCount = content.trim().split(" ").length;

  let readingTime = Math.ceil(wordCount / readingSpeed);

  if (readingTime < maxSecond) {
    
    let second = parseInt(readingTime / 10);
    second++;
    second *= 10;
    return `${second} seconds read`;

  } else if (readingTime < totalSecondsInOneHour) {
    let minute = Math.ceil(readingTime / oneMinute);
    return `${minute} min read `;

  } else {

    let hour = Math.floor(readingTime / totalSecondsInOneHOur);
    return `${hour} hours read`;

  }
}

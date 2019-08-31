const waitForDescriptionLoading = async () => {
  const descriptionNode = document.getElementById("description");

  if (!descriptionNode) {
    window.setTimeout(waitForDescriptionLoading, 500);
  } else {
    youTimeStamp(descriptionNode);
  }
};

const youTimeStamp = async descriptionNode => {
  const refinedDescription = extractTimeStamps(descriptionNode);
  console.log("refinedDescription", refinedDescription);
};

const extractTimeStamps = descriptionNode => {
  return descriptionNode.innerText
    .match(/[^\r\n]+/g)
    .reduce((accumulator, line) => {
      const splitedLine = line.match(/([0-9]?[0-9](:[0-9][0-9])+)(.*)/);
      if (splitedLine && splitedLine[3]) {
        accumulator.push({
          timeCode: splitedLine[1],
          description: splitedLine[3]
        });
      }
      return accumulator;
    }, []);
};

waitForDescriptionLoading();

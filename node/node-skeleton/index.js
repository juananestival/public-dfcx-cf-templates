

/*****************************************************************************/
// MAIN SECTION
/*****************************************************************************/
exports.sampleFunction = (req, res) => {
 
  console.log(`Function version: ${process.env.K_REVISION}`);
  console.log("Dialogflow Request body: " + JSON.stringify(req.body));
  let tag = req.body.fulfillmentInfo.tag;
  console.log("Tag: " + tag);
  console.log(
    "Session Info Parameters: " +
      JSON.stringify(req.body.sessionInfo.parameters)
  );

  // Checking Tags
  if (tag === "sample-tag") {
    res.status(200).send({
      sessionInfo: {
        parameters: {
          sample_parameter1: 'request with recognized tag'        
        },
      },
    });

  } else {
    res.status(200).send({
      sessionInfo: {
        parameters: {
          sample_parameter1: 'request without recognized tag'        
        },
      },
    });

  }

};

exports.myInfo = async (req, res) => {
  try {
    const userInfo = {
      slackUsername: 'ridowayne1',
      backend: true,
      age: 25,
      bio: 'Well I cook anything i am told to cook, agba beans cooker',
    };

    res.status(200).json(userInfo);
  } catch (error) {
    console.log(error);
  }
};
exports.calculate = async (req, res) => {
  try {
    const operationType = req.body.operation_type;
    const x = req.body.x;
    const y = req.body.y;
    let operation;
    let result;
    const slackUsername = 'ridowayne1';
    if (operationType === 'addition') {
      operation = 'addition';
      result = x + y;
      return res.status(201).json({
        // status: 'success',
        slackUsername: slackUsername,
        result: result,
        operation_type: operation,
      });
    } else if (operationType === 'subtraction') {
      operation = 'subtraction';
      result = x - y;
      return res.status(201).json({
        // status: 'success',
        slackUsername: slackUsername,
        result: result,
        operation_type: operation,
      });
    } else if (operationType === 'multiplication') {
      operation = 'multiplication';
      result = x * y;
      return res.status(201).json({
        // status: 'success',
        slackUsername: slackUsername,
        result: result,
        operation_type: operation,
      });
    } else {
      return res.status(400).json({
        status: 'fail',
        message:
          'invalid operation type, your operation can either be addition, multiplication or subtraction',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

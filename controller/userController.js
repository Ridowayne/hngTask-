exports.myInfo = async (req, res) => {
  try {
    const userInfo = [
      {
        slasckUserName: "@Rilwan",
        backend: true,
        age: 25,
        bio: "Well I cook anything i am told to cook, agba beans cooker",
      },
    ];
    res.status(200).json(userInfo);
  } catch (error) {
    console.log(error);
  }
};

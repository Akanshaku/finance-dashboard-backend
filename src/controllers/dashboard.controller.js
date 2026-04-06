const dashboardService = require("../services/dashboard.service");

exports.summary = async (req, res) => {
  const data = await dashboardService.getSummary();
  res.json(data);
};
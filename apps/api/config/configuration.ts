export default () => ({
  port: process.env.PORT ?? 3002,
  dateFormat: process.env.DATE_FORMAT ?? "YYYY-MM-DD",
});

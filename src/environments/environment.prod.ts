const baseUrl = 'http://localhost:8080/DiabetesData';
export const environment = {
  production: true,

  BgReadings: {
    getBgReadings: () => `${baseUrl}/DiaServlet?action=getBgReadings`
  }
};

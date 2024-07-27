// src/utils/dataService.js
export async function loadData() {
  try {
    const response = await fetch('/dataTest.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

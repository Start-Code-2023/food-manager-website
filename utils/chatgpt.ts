import { API_KEY } from "@/constants/key";
import { OPEN_AI_URL } from "@/constants/url";



export async function makeOpenAIRequest(foodlist : FoodItems) {
  const requestBody = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'Du får en liste med norske matvarer. Gi en liste med matretter du kan lage med matvarene. Du kan kunn svare i JSON format av listen med navn av matrettene. Eksmpel respons er {["Hjorte Gryte", "Spagetti", "Grønnsaksuppe"]}. Fjern alle whitespaces og new line og bachslash tegn i svaret ditt.Navnet på listen skal hete "retter"',
      },
      {
        role: 'user',
        content: foodlist.food_items.toString(),
      },
    ],
  };

  try {
    const response = await fetch(OPEN_AI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const responseData: any = await response.json();
    return responseData["choices"][0]["message"]["content"];
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

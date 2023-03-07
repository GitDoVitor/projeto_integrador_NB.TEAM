// Importe a biblioteca axios para fazer solicitações HTTP
import axios from "axios";

// Defina a função que envia o texto de entrada para a API do GPT e recebe a resposta
async function sendToGPT(inputText, maxChars, maxWords) {
  // Configure a solicitação HTTP para a API do GPT
  const response = await axios.post(
    "https://api.openai.com/v1/engines/davinci-codex/completions",
    {
      prompt: inputText,
      max_tokens: maxWords,
      n: 1,
      stop: ".",
      temperature: 0.5,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer YOUR_API_KEY_HERE", // Substitua YOUR_API_KEY_HERE pela sua chave de API do OpenAI
      },
    }
  );

  // Obtenha a resposta do GPT da resposta da solicitação HTTP
  const outputText = response.data.choices[0].text.trim();

  // Verifique se o texto de saída é menor que o comprimento máximo especificado
  if (maxChars && outputText.length > maxChars) {
    return outputText.slice(0, maxChars) + "...";
  } else {
    return outputText;
  }
}

// Defina a função que adiciona a resposta do GPT às notas do Obsidian
async function addToNotes(outputText) {
  // Obtenha o editor de notas ativo
  const editor = window.app.workspace.getActiveLeaf().view.editor;

  // Insira o texto de saída do GPT nas notas
  editor.replaceSelection(outputText);
}

// Crie a interface de usuário para o plugin
new Notice("Digite o texto de entrada:", 5000);
new TextPrompt("Insira seu texto aqui", async (inputText) => {
  // Obtenha as opções do usuário para o comprimento máximo da resposta
  const maxChars =
    parseInt(
      await new TextInput("Número máximo de caracteres (opcional):").getValue(),
      10
    ) || null;
  const maxWords =
    parseInt(
      await new TextInput("Número máximo de palavras (opcional):").getValue(),
      10
    ) || null;

  // Envie o texto de entrada para o GPT e obtenha a resposta
  const outputText = await sendToGPT(inputText, maxChars, maxWords);

  // Adicione a resposta do GPT às notas do Obsidian
  await addToNotes(outputText);

  // Mostre uma mensagem de confirmação ao usuário
  new Notice("A resposta foi adicionada às notas.", 5000);
});

// Este código roda apenas no servidor, de forma segura.

export default async function handler(req, res) {
  // 1. Validação básica: só aceita requisições do tipo POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // 2. Extrai os dados do corpo da requisição
  const { name, email, phone, avgBill } = req.body;

  // 3. Validação dos dados recebidos
  if (!name || !email || !phone) {
    return res.status(400).json({ message: 'Nome, e-mail e telefone são obrigatórios.' });
  }

  // 4. Monta o corpo da requisição para a API do Brevo
  const brevoData = {
    email: email,
    attributes: {
      // Mapeie os atributos conforme eles existem na sua conta Brevo
      // O nome do atributo aqui (ex: NOME) deve ser igual ao nome na sua lista de contatos Brevo
      NOME: name,
      CONTATO: phone,
      CONSUMO_MEDIO: avgBill,
    },
    // ID da lista no Brevo para onde o contato será adicionado (opcional, mas recomendado)
    // Você pode encontrar o ID da lista na página de Contatos -> Listas no Brevo.
    listIds: [5], // Exemplo: ID da lista "Leads Landing Page"
    updateEnabled: true, // Atualiza o contato se ele já existir
  };

  // 5. Envia os dados para a API do Brevo
  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY, // Usa a chave de API segura
      },
      body: JSON.stringify(brevoData ),
    });

    if (!response.ok) {
      // Se a API do Brevo retornar um erro, repassa a mensagem
      const errorData = await response.json();
      console.error('Erro da API Brevo:', errorData);
      throw new Error('Falha ao registrar o contato no Brevo.');
    }

    // 6. Retorna uma resposta de sucesso
    return res.status(201).json({ message: 'Contato criado com sucesso!' });

  } catch (error) {
    console.error('Erro interno ao contatar o Brevo:', error.message);
    return res.status(500).json({ message: 'Erro interno do servidor.' });
  }
}

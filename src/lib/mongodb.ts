import mongoose from 'mongoose';

const { MONGODB_URI, MONGODB_PASSWORD } = process.env;

if (!MONGODB_URI || !MONGODB_PASSWORD) {
  throw new Error(
    'MONGODB_URI ou MONGODB_PASSWORD não estão definidos nas variáveis de ambiente.',
  );
}

const dbURI = MONGODB_URI.replace('<db_password>', MONGODB_PASSWORD);
let isConnected = false;

export const connectDB = async () => {
  if (isConnected) {
    console.log('Já conectado ao MongoDB.');
    return Promise.resolve(true);
  }

  try {
    const { connection } = await mongoose.connect(dbURI);
    isConnected = connection.readyState === 1;

    if (isConnected) {
      console.log('Conectado com sucesso ao MongoDB.');
      return Promise.resolve(true);
    } else {
      console.log('Falha ao conectar ao MongoDB.');
      return Promise.reject(false);
    }
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    return Promise.reject(error);
  }
};
